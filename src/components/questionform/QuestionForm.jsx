import React from "react";

export default function QuestionsForm() {
  return (
    <div className="container flex justify-between w-3/4 mt-24 mb-16 bg-gray-100 shadow-xl rounded-3xl sm:mx-auto flex-row-wrap">
      <div className="container flex flex-col px-8 py-12 lg:w-4/5">
        <h2 className="text-2xl not-italic font-bold text-gray-700 ">
          Want to ask a question?
        </h2>
        <p className="mt-2">
          Just submit your question here, and our VIT life experts will be sure
          to answer it and add it to the FAQ list.
        </p>
      </div>
      <form className="container flex flex-col items-center justify-center bg-purple-800 rounded-l-none rounded-3xl">
        <div className="flex flex-row justify-between w-3/4">
          <input
            type="text"
            id="name"
            className="block p-1.5 mb-4 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
            placeholder="Your Name"
            required=""
          />
          <input
            type="email"
            id="email"
            className="block p-1.5 mb-4 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Email"
            required=""
          />
        </div>
        <div className="w-3/4 mb-4">
          <input
            type="text"
            id="question"
            className="block w-full p-1.5 text-sm text-gray-900 border border-gray-300 rounded-sm bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Your Question"
            required=""
          />
        </div>
        <div className="flex flex-row justify-end w-3/4">
          <button
            type="submit"
            className="text-white bg-purple-800 hover:bg-purple-900 focus:ring-4 focus:outline-none border-solid border-2 border-white font-medium rounded-lg text-sm w-full sm:w-auto px-6 py-1.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
