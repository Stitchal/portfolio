import React from "react";
import Title from "./Title";

const Container = (props) => {
  return (
    <div className="flex flex-col w-full bg-container-bg rounded-2xl shadow-md shadow-gray-900 gap-4 ">
      <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-t-2xl p-4">
        <Title title={props.title} level={props.titleLevel} margin="0" />
      </div>

      <div className="p-4 text-custom-white">{props.children}</div>
    </div>
  );
};

export default Container;
