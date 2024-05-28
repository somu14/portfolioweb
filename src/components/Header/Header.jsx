import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";
import sun from "../../assets/sun.png"
import moon from "../../assets/moon.png"

export default function Header() {

  const [sunmoon,setsunmoon]=useState(sun);
  
  function sunmoonfun()
  {
    if(sunmoon==sun)
      {
        setsunmoon(moon)
      }
      else
      {
        setsunmoon(sun);
      }
  }


//const lighttheme={
//backgroundColor: "white",
//color: "text-black"
//}
//const darktheme={
//  backgroundColor: "black",
//  color: "text-white",
//}
//const [theme,settheme]=useState(lighttheme);
//
//  function toogletheme()
//  {
//    if(theme==lighttheme)
//      {
//        settheme(darktheme);
//      }
//      else
//      {
//        settheme(lighttheme);
//      }
//  }

  return (
    <ul className=" flex items-center list-none mb-0 p-0 m-36 mt-0 ">
      <li className="mr-auto font-bold inline-flex">
        <NavLink to="/" 
        className={({isActive})=>`text-3xl ${isActive?"text-orange-400":"text-black"}`}>
          Tathagata
        </NavLink>
        <img src={sunmoon} alt="sun"
        onClick={(e)=>sunmoonfun()}
         className="w-6 h-6 ml-2 mt-1 transform transition-transform duration-500 hover:animate-spin-slow"/>
      </li>
      <li className=" m-4 p-4 ml-4">
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "text-orange-400" : "text-black"}`
          }
        >
          Contact
        </NavLink>
      </li>
      <li className=" m-4 p-4 ml-4">
        <NavLink
          to="/Blog"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "text-orange-400" : ":text-black"}`
          }
        >
          Blog
        </NavLink>
      </li>
      <li className=" m-4 p-4 ml-4">
        <NavLink
          to="/Project"
          className={({ isActive }) =>
            `text-2xl ${isActive ? "text-orange-400" : "text-black"}`
          }
        >
          Projects
        </NavLink>
      </li>
    </ul>
  );
}
