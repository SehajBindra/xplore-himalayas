import React from "react";

function Logo(props: any) {
  const { renderDefault, title } = props;

  return (
    <div className=" flex items-center space-x-2 ">
      <img
        className="h-10 w-10  rounded-full object-cover "
        src="/p.jpg"
        alt="logo"
      />
      <>{renderDefault(props)}</>
    </div>
  );
}

export default Logo;
