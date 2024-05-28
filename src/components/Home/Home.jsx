import React from "react";

import githubIcon from "../../assets/github (1).png";
import lk from "../../assets/linkedin.png";
import ig from "../../assets/instagram.png";
import '../../App.css'
function Home() {
  return (
    <>
      <div className="mt-9 ml-64">
        <h1 className=" text-4xl font-bold ">Hi 👋, I’m Tathagata Nayak</h1>
        <br />
        <p className="text-1.5xl text-gray-500">
          Hey I am your friendly developer and Computer Science
          UnderGrad,pasionate to build useful products with
        </p>
        <p className=" text-gray-500 "> Technology</p>
        <br />
        <p className=" text-gray-500 ">
          Here I share my journey how I work on all my projects and experience
          if you like the content do share it with your
        </p>
        <p className="  text-gray-500 ">Friends</p>
      </div>
      <div className="mt-9 ml-64 flex">
        <a href="https://github.com/tathagata17" target="blank">
        <img src={githubIcon}  alt="GitHub" className="w-8 h-8 m-1" />
        </a>
        <a href="https://www.linkedin.com/in/tathagata-nayak-957864211/" target="blank">
        <img src={lk} alt="linkedIn" className="w-8 h-8 m-1 ml-2" />
        </a>
        <a href="https://www.instagram.com/tathagata__14">
        <img src={ig} alt="Instagram" className="w-8 h-8 m-1 ml-2" />
        </a>
      </div>
      <div>
        <p className=" text-2xl ml-64 m-4" >Skills</p>
        <div className="bg-neutral-300 h-28 p-1 flex justify-center rounded-lg ml-64 w-2/3 overflow-x-auto">
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">C++</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">JAVA</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">JS</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">PHP</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">NODE JS</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">Mongodb</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">MYsQL</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">RESTApi</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">React</div>
            <div className="bg-white h-14 m-2 w-28 p-3 rounded-lg flex ">ARDUINO</div>
        </div>
      </div>
    </>
  );
}

export default Home;
