// import Image from "next/image";
import React from "react";
import urlFor from "../lib/urlFor";
import { Experience } from "../typing";

type Props = {
  Experience: Experience[];
};
export default function Projects({ Experience }: Props) {
  // console.log(Experience);
  return (
    <div>
      <h2 className="text-4xl mb-8 text-center text-slate-200">Experience</h2>
      <div className="md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl overflow-hidden ">
        {Experience?.map((experience) => (
          <div key={experience._id}>
            <div className="max-w-xs flex flex-row  card   mx-auto  my-8 overflow-hidden  rounded-md cursor-pointer">
              <div className=" flex flex-row md:flex-col   justify-center items-center mx-auto">
                <div className="md:shrink-0 md:p-4 mx-auto ">
                  <img
                    className=" hidden md:inline object-cover rounded-full md:h-16 md:w-16"
                    src={urlFor(experience.companyImage).url()}
                    alt={experience.company}
                  />
                </div>
                <div className="p-4">
                  <a className="block mt-1 text-lg leading-tight font-medium text-[#ed00eb] hover:underline">
                    {experience.jobtitle}
                  </a>
                  <div className=" capitalize text-white/60 whitespace-nowrap line-clamp-1">
                    {new Date(experience.datestarted).toDateString()} -
                    {experience.currentStatus
                      ? "Present"
                      : new Date(experience.dateended).toDateString()}
                  </div>
                  <p className="mt-2 whitespace-nowrap  text-white/75">
                    {experience.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
