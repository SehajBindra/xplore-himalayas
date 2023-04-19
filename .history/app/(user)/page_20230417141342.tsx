import React from "react";
import { previewData } from "next/headers";
import { groq } from "next-sanity";
import { client } from "./../../lib/sanity.client";
import PreviewSuspense from "../../Components/PreviewSuspense";
import PreviewBlogList from "../../Components/PreviewBlogList";
import BlogList from "../../Components/BlogList";
import Header from "../../Components/Header";
import Banner from "../../Components/Banner";
import Projects from "../../Components/Projects";
import Experiences from "../../Components/Experiences";
import Footer from "../../Components/Footer";

const query = groq`
    *[_type=='post'] {
        ...,
        author->,
    
        categories[] ->,

    } | order(_createdAt desc)
`;

const query2 = groq`
    *[_type=='pageInfo'][0]
`;
const experience = groq`
*[_type == 'experience']{
  ...,
  technologies[]->,
}
`;

const project = groq`
 *[_type=='projects']{
  ...,
  technologies[]->,
 }
`;

export default async function Homepage() {
  if (previewData()) {
    // return <div>private mode</div>;
    return (
      <PreviewSuspense
        fallback={
          <div role="status">
            <p className="text-center text-lg animate-pulse text-red-400">
              Loading Preview Data...
            </p>
          </div>
        }
      >
        <PreviewBlogList query={query} />
      </PreviewSuspense>
    );
  }

  const posts = await client.fetch(query);

  const pageInfo = await client.fetch(query2);
  const projects = await client.fetch(project);
  const Experience = await client.fetch(experience);
  // console.log(pageInfo);

  return (
    <>
      <Header />
      <Banner pageInfo={pageInfo} />
      <section id="projects">
        <Projects projects={projects} />
      </section>

      <section id="experience">
        <Experiences Experience={Experience} />
      </section>

      <section id="Blogs">
        <BlogList posts={posts} />
      </section>

      {/* <Footer /> */}

      {/* <Experience /> */}
    </>
  );
}
