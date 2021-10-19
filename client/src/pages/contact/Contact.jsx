import React from "react";

export default function Contact() {
  return (
    <div>
      <div className="h-full flex justify-center flex-col">
        <div className=" w-2/3 m-auto p-8 shadow-lg">
          <h1 className="text-4xl font-bold flex items-center">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-4 h-12 transform rotate-45"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
              </svg>
            </span>
            <span>Contact us</span>
          </h1>
          )
          <form className="flex flex-col">
            <div className="my-2 flex flex-col">
              <label htmlFor="name">Name</label>
              <input className="border-2 p-2" type="text" id="name" />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="email">Email</label>
              <input className="border-2 p-2" type="email" id="email" />
            </div>
            <div className="my-2 flex flex-col">
              <label htmlFor="message">Message</label>
              <textarea className="border-2 p-2" id="message"></textarea>
            </div>

            <button className="mt-4 my-2 bg-blue-700 text-white w-full p-2 hover:bg-blue-900 transition-colors duration-200">
              submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
