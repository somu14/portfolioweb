import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [words, setWords] = useState(0);
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [status, setStatus] = useState("");

  function wordCount(word) {
    setWords(word);
  }

  const formData = {
    subjectdata: subject,
    emaildata: email,
    bodydata: body,
  };

  function handleClick() {
    axios
      .post("https://mailserver-flax.vercel.app/send", formData)
      .then((response) => {
        console.log("Request made", response);
        setStatusMessage();
      })
      .catch((err) => {
        console.log("Error is", err);
      });
  }

  function setStatusMessage() {
    setStatus("Thanks for Contacting! You will be replied to soon 😊");
    setTimeout(() => {
      setStatus("");
    }, 10000);
  }

  return (
    <>
      <div className="">
        <div className="mt-9 px-0 sm:ml-64">
          <h1 className="text-3xl sm:text-4xl font-bold">
            Hi 👋, I’m Tathagata Nayak
          </h1>
          <p className="mt-3 text-gray-500">Send an email and let's connect!</p>
          <p className="mt-1 text-green-600">{status}</p>
        </div>

        <div
          className="bg-neutral-300 w-full sm:w-2/3 lg:w-1/2 mx-auto mt-5 rounded-lg p-4 sm:ml-64"
          style={{ backgroundColor: `var(--cardcontainercolor)` }}
        >
          <input
            type="email"
            className="h-10 rounded-xl w-full sm:w-3/4 outline-none p-3"
            placeholder="Example@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            required
          />
          <input
            type="text"
            className="h-10 rounded-xl w-full sm:w-3/4 outline-none p-3 mt-6"
            placeholder="Subject: Let's connect"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
          />
          <div className="mt-2">
            <textarea
              placeholder="Enter your message"
              className="w-full sm:w-3/4 p-3 rounded-lg outline-none mt-8"
              value={body}
              onChange={(e) => {
                setBody(e.target.value);
                const wordLen = e.target.value.length;
                wordCount(wordLen);
              }}
            />
            <h6 className="text-gray-400 flex justify-end sm:mr-40">{words}</h6>
          </div>
          <button
            type="submit"
            className="bg-white p-2 rounded-lg w-full sm:w-1/4 mt-2 text-gray-400 font-bold hover:bg-gray-400 hover:text-white"
            onClick={(e) => {
              e.preventDefault();
              handleClick();
              setBody("");
              setEmail("");
              setSubject("");
              setWords(0);
            }}
          >
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Contact;
