import React from "react";

type Props = {
  params: {
    slug: string;
  };
};

function Postpage({ params: { slug } }: Props) {
  return <div>Post : {slug}</div>;
}

export default Postpage;
