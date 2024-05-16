import React from "react";
import Form from "../components/Form";

const Homepage = () => {
  return (
    <div>
      <div className=" bg-green-300 h-screen flex flex-col justify-center items-center ">
        <h1 className="mb-8 font-bold text-3xl italic">UNIQUE ID GENERATOR</h1>
        <Form />
      </div>
    </div>
  );
};

export default Homepage;
