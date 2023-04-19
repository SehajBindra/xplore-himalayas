// import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";
import { Project } from "../typing";

type Props = {
  projects: Project[];
};
export default function Projects({ projects }: Props) {
  //   console.log(projects);
  return (
    <div className="">
      <h2 className="text-4xl mb-8 text-center text-slate-200">Projects</h2>
      {projects?.map((project) => (
        <div key={project._id}>
          <div className="max-w-sm mx-auto  my-8 overflow-hidden md:max-w-2xl lg:max-w-3xl">
            <div className="md:flex">
              <div className="md:shrink-0">
                <img
                  className="h-56 w-full mx-auto max-w-xs object-cover rounded-md md:h-full md:w-80"
                  src={urlFor(project.image).url()}
                  alt={project.slug}
                />
              </div>
              <div className="p-8">
                <a
                  href={project.linktoBuild}
                  className="block mt-1 text-lg leading-tight font-medium text-[#ed00eb] hover:underline"
                >
                  {project.title}
                </a>
                <p className="mt-2 text-justify text-sm -tracking-tight max-w-[20rem]  text-white/75">
                  {project.shortdescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
