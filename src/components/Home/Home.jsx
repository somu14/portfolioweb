import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Home() {
  return (
    <>
      <div className="md:mr-64">
        <div className="mt-4 md:mt-4 px-4 md:px-0 mx-auto md:w-2/3 md:ml-64">
          <h1 className="text-3xl md:text-4xl font-bold">
            Hi 👋, I’m Tathagata Nayak
          </h1>
          <br />
          <p className="text-xl md:text-lg text-gray-500">
            Hey there! 👋 I’m a passionate developer and Computer Science
            undergrad, always on the lookout to create meaningful tech
            solutions.
          </p>
          <p className="text-lg md:text-lg text-gray-500"></p>
          <br />
          <p className="text-lg md:text-lg text-gray-500">
            From coding cool projects to exploring the latest in tech, I’m here
            to share my journey—warts and all! If you vibe with my story or find
            something useful, feel free to spread the word with your friends.
            Let’s build and learn together! 💡🚀
          </p>
          <p className="text-lg md:text-lg text-gray-500"></p>
        </div>

        <div className="mt-9 md:mt-3 flex  space-x-4 mx-auto md:w-2/3 md:ml-64">
          <a href="https://github.com/tathagata17" target="blank">
            <FaGithub color={`var(--primarycolor)`} size={40} />
          </a>
          <a
            href="https://www.linkedin.com/in/tathagata-nayak-957864211/"
            target="blank"
          >
            <FaLinkedin color={`var(--primarycolor)`} size={40} />
          </a>
          <a href="https://www.instagram.com/tathagata__14" target="blank">
            <FaInstagram color={`var(--primarycolor)`} size={40} />
          </a>
        </div>

        <div className="md:ml-64">
          <p className="text-2xl md:text-3xl mt-6 md:mt-9 md:w-full">Skills</p>
          <div
            className=" h-auto p-0 flex flex-wrap justify-center rounded-lg md:w-full"
            style={{ backgroundColor: `var(--cardcontainercolor)` }}
          >
            {[
              "C/C++",
              "JAVA",
              "JavaScript",
              "PHP",
              "NODE JS",
              "MongoDB",
              "MySQL",
              "REST API",
              "React JS",
              "ARDUINO",
              "ReactNative",
              "Python",
            ].map((skill) => (
              <div
                className="bg-white h-14 w-28 m-2 p-3 rounded-lg flex justify-center items-center text-sm md:text-base hover:bg-gray-300"
                style={{ backgroundColor: `var(--cardcolor)` }}
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
