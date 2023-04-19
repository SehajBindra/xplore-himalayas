"use client";
import { Experience } from "../typing";
import React from "react";
import urlFor from "../lib/urlFor";
type Props = {
  experience: Experience[];
};

function Experience({ experience }: Props) {
  return (
    <div>
      <div className="grid grid-flow-col grid-rows-2 grid-cols-3 gap-8">
        <div className="transform scale-110 -rotate-6">
          <img src="/mountains-1.jpg" alt="" loading="lazy" />
        </div>
        <div className="col-start-3 transform scale-75 rotate-6 translate-x-2 translate-y-15">
          <img src="/mountains-1.jpg" alt="" loading="lazy" />
        </div>
        <div className="transform scale-150 translate-y-11">
          <img src="/mountains-1.jpg" alt="" loading="lazy" />
        </div>
        <div className="transform translate-y-24">
          <img src="/mountains-1.jpg" alt="" loading="lazy" />
        </div>
        <div className="row-start-1 col-start-2 col-span-2 transform translate-x-20 translate-y-4">
          <img src="/mountains-1.jpg" alt="" loading="lazy" />
        </div>
      </div>
    </div>
  );
}

export default Experience;
