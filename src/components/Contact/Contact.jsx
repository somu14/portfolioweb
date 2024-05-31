import React, { useState } from 'react'
import axios from 'axios'

function Contact() {

  const [words ,setwords]=useState(0);

  const [email,setemail]=useState('');
  const [subject,setsubject]=useState('');
  const [body,setbody]=useState('');
  const [status ,setstatus]=useState('')

  function wordcount(word)
  {
    setwords(word);
  }
  const formdata={
    subjectdata:subject,
    emaildata:email,
    bodydata:body,
  }
  function handleclick()
  {
    axios.post("https://mailserver-flax.vercel.app/send",formdata)
    .then((response)=>{console.log("requesrmade",response); set();})
    .catch((err)=>{console.log("error is",err);})
  }
  function set()
  {
    setstatus("Thanks for Contacting you will be soon replied 😊");
    setTimeout(() => {
      setstatus('');
    },3000);
  }

  return (
    <>
     <div className="mt-9 ml-64">
        <h1 className=" text-4xl font-bold ">Hi 👋, I’m Tathagata Nayak</h1>
        <p className="mt-3 text-gray-500">Send an email and lets connect </p>
        <p className="mt-1 text-green-600">{status}</p>
        </div>
        <div className="bg-neutral-300  w-2/4 ml-64 m-5 rounded-lg p-4">
            <input 
            type='email' 
            className="h-10 rounded-xl w-3/4 outline-none p-3 " 
            placeholder="Exapmle@gmail.com" 
            value={email}
            onChange={(e)=>{setemail(e.target.value)}}
            required
            />
            <input 
            type='Text' 
            className="h-10 rounded-xl w-3/4 outline-none p-3 mt-6" 
            placeholder="Subject:lets connect" 
            value={subject}
            onChange={(e)=>{setsubject(e.target.value)}}
            />
            <div className="mt-2">
            <textarea
            placeholder='Enter Text' 
            className="w-3/4 p-3 rounded-lg outline-none mt-8"
            value={body}
            onChange={(e)=>{
            setbody(e.target.value);
            const wordlen=e.target.value.length;
            wordcount(wordlen);
            }}/>
            <h6 className="text-gray-400 flex justify-end mr-40">{words}</h6>
            </div>
            <button type="submit" className="bg-white p-2 rounded-lg w-1/4 mt-2 text-gray-400 font-bold hover:bg-gray-400
            hover:text-white" 
            onClick={(e)=>{
                e.preventDefault();
                handleclick();
                setbody('');
                setemail('');
                setsubject('');
                setwords(0);
            }}>Send
            </button>
        </div>
    </>
  )
}

export default Contact
