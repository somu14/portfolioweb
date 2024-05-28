import React, { useState } from 'react'

function Contact() {

  const [words ,setwords]=useState(0);

  function wordcount(word)
  {
    setwords(word);
  }

  return (
    <>
     <div className="mt-9 ml-64">
        <h1 className=" text-4xl font-bold ">Hi 👋, I’m Tathagata Nayak</h1>
        <p className="mt-3 text-gray-500">Send an email and lets connect </p>
        </div>
        <div className="bg-neutral-300  w-2/4 ml-64 m-8 rounded-lg p-4">
            <input type='email' className="h-10 rounded-xl w-3/4 outline-none p-3 " placeholder="Exapmle@gmail.com"></input>
            <input type='Text' className="h-10 rounded-xl w-3/4 outline-none p-3 mt-6" placeholder="Subject:lets connect"></input>
            <div className="mt-2">
            <textarea
            placeholder='Enter Text' className="w-3/4 p-3 rounded-lg outline-none mt-8" onChange={(e)=>{
              const wordlen=e.target.value.length;
              wordcount(wordlen);
            }}/>
            <h6 className="text-gray-400 flex justify-end mr-40">{words}</h6>
            </div>
            <button type="submit" className="bg-white p-2 rounded-lg w-1/4 mt-2 text-gray-400 font-bold hover:bg-gray-400
            hover:text-white" 
            onClick={(e)=>{
                e.preventDefault();
            }}>Send
            </button>
        </div>
    </>
  )
}

export default Contact