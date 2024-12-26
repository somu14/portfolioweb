import React from "react";

function Project() {
  return (
    <>
      <div className="mt-9 px-4 sm:px-8 lg:px-16 md:ml-64">
        <h1 className="text-3xl sm:text-4xl font-bold">Personal Projects</h1>
        <p className="text-gray-500 text-lg mt-2">
          This page showcases my projects that I made while understanding
          various technologies.
        </p>
        <p className="text-gray-500 text-lg">
          Some projects solve everyday problems.
        </p>
      </div>
      <div
        className="bg-neutral-200 p-4 rounded-lg mx-auto w-full sm:w-3/4 lg:w-1/2 mt-6"
        style={{ backgroundColor: `var(--cardcontainercolor)` }}
      >
        <p className="text-3xl font-semibold">ZoneMeter</p>
        <p className="text-2xl mt-2">Tech stack used</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Frontend: React Native</li>
          <li>Backend: Node.js, Express.js</li>
          <li>Database: MongoDB</li>
        </ul>
        <ul className="list-disc ml-6 mt-2">
          <li className="p-1 text-lg">
            ZoneMeter is a geofencing app designed to track user locations
            effectively.
          </li>
          <li className="p-1 text-lg">
            Managers can create geofences around specific work areas, like
            boiler rooms and control rooms.
          </li>
          <li className="p-1 text-lg">
            It allows managers to monitor user visits, track frequency, and
            identify any unusual activities.
          </li>
          <li className="p-1 text-lg">
            This helps in accountability and ensures safety by easily tracking
            users in critical areas.
          </li>
        </ul>
      </div>

      <div
        className="bg-neutral-200 p-4 rounded-lg mx-auto w-full sm:w-3/4 lg:w-1/2 mt-6"
        style={{ backgroundColor: `var(--cardcontainercolor)` }}
      >
        <p className="text-3xl font-semibold">Bloodbank</p>
        <p className="text-2xl mt-2">Tech stack used</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Frontend:</li>
          <li>EJS Templating</li>
          <li>HTML, CSS</li>
          <li>Backend:</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Database:</li>
          <li>MySQL</li>
        </ul>
        <ul className="list-disc ml-6 mt-2">
          <li className="p-1 text-lg">
            This website helps people search for blood in case of emergencies.
          </li>
          <li className="p-1 text-lg">
            Helps blood banks register and update their data.
          </li>
          <li className="p-1 text-lg">
            Real-time updates with messaging to keep users informed.
          </li>
        </ul>
      </div>

      <div
        className="bg-neutral-200 p-4 rounded-lg mx-auto w-full sm:w-3/4 lg:w-1/2 mt-6"
        style={{ backgroundColor: `var(--cardcontainercolor)` }}
      >
        <p className="text-3xl font-semibold">Ecobazar</p>
        <p className="text-2xl mt-2">Tech stack used</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Frontend:</li>
          <li>React js and Tailwind Css</li>
          <li>HTML, CSS</li>
          <li>Backend:</li>
          <li>Node.js</li>
          <li>Express.js</li>
        </ul>
        <ul className="list-disc ml-6 mt-2">
          <li className="p-1 text-lg">
            This is a full-fledged eCommerce website for groceries and veggies.
          </li>
          <li className="p-1 text-lg">
            The MERN tech stack is used to build this project.
          </li>
          <li className="p-1 text-lg">
            Real-time updates with messaging to keep users informed.
          </li>
        </ul>
      </div>

      <div
        className="bg-neutral-200 p-4 rounded-lg mx-auto w-full sm:w-3/4 lg:w-1/2 mt-6"
        style={{ backgroundColor: `var(--cardcontainercolor)` }}
      >
        <p className="text-3xl font-semibold">Child Tracker</p>
        <p className="text-2xl mt-2">Tech stack used</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Server:</li>
          <li>Node.js, Express.js</li>
          <li>
            Client: JavaScript, Twilio API for sending real-time WhatsApp
            updates
          </li>
        </ul>
        <ul className="list-disc ml-6 mt-2">
          <li className="p-1 text-lg">
            This is a Chrome extension that, when activated, sends real-time
            updates to the authorized person's phone.
          </li>
          <li className="p-1 text-lg">
            This helps in tracking where the user is visiting.
          </li>
        </ul>
      </div>

      <div
        className="bg-neutral-200 p-4 rounded-lg mx-auto w-full sm:w-3/4 lg:w-1/2 mt-6"
        style={{ backgroundColor: `var(--cardcontainercolor)` }}
      >
        <p className="text-3xl font-semibold">ShortURL</p>
        <p className="text-2xl mt-2">Tech stack used</p>
        <ul className="list-disc ml-6 mt-2">
          <li>Frontend:</li>
          <li>HTML, CSS</li>
          <li>Backend: PHP</li>
          <li>Database: MySQL</li>
        </ul>
        <ul className="list-disc ml-6 mt-2">
          <li className="p-1 text-lg">This is a URL shortener.</li>
          <li className="p-1 text-lg">
            Keeps track of user URLs and shows how many visits they have
            received.
          </li>
        </ul>
      </div>
    </>
  );
}

export default Project;
