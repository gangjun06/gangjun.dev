import React from "react";
import Title from "../components/Title";
import "../assets/styles/programmingIcon.css";

const Home = () => {
  return (
    <>
      <Title title="About Me" text="" />
      <div className="text-center text-lg mb-12">
        Hello. I'm Gangjun Lee, 15, who likes programming. <br />I like learning
        new things and moving forward rather than staying fixed. <br />I want to
        learn hard and help many people in the future.
      </div>
      <Title title="Skills" text="" />
      <div class="grid grid-cols-4 gap-4 text-6xl">
        <i class="devicon-react-original colored flex justify-center"></i>
        <i class="devicon-vuejs-plain colored flex justify-center"></i>
        <i class="devicon-express-original-wordmark flex justify-center"></i>
        <i class="devicon-css3-plain-wordmark colored flex justify-center"></i>
        <i class="devicon-nginx-original colored flex justify-center"></i>
        <i class="devicon-linux-plain colored flex justify-center"></i>
        <i class="devicon-mysql-plain colored flex justify-center"></i>
        <i class="devicon-cplusplus-plain colored flex justify-center"></i>
      </div>
    </>
  );
};

export default Home;
