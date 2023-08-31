import React from "react";

const Title = (props) => {
  return (
    <div className={"flex flex-col gap-2 w-full"}>
      <h1
        className={
          "flex text-" + props.level + "xl font-bold text-custom-white"
        }
      >
        {props.title}
      </h1>
      {props.level === "4" && (
        <div className="bg-blue-500 w-12 h-3 rounded-sm text-4xl"></div>
      )}
    </div>
  );
};

export default Title;
