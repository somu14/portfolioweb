import React from "react";

function Blog() {
  return (
    <>
      <div className="mt-9 px-4 sm:px-0 lg:px-16 md:ml-64">
        <h1 className="text-3xl sm:text-4xl">Blog Posts</h1>
        <p className="mt-2 text-gray-400">
          Check out my blog posts for a peek into my life and hobbies
        </p>
      </div>

      <div className="mt-6 px-4 sm:px-8 lg:px-16">
        <div
          className="bg-neutral-200 p-4 rounded-lg w-full sm:w-3/4 lg:w-2/3 mx-auto"
          style={{ backgroundColor: `var(--cardcontainercolor)` }}
        >
          Hello viewers, recently I have been studying Japanese and preparing
          for the JLPT N5 along with my friend, and I am actively looking for an
          IT job in JAPAN. Every day I gain a little knowledge of the language.
          Wish me luck!
          <br />
          ありがとう (Thank You)
        </div>
      </div>
    </>
  );
}

export default Blog;
