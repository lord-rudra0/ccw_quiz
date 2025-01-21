import React from "react";

const Home = ({ onStart }) => (
  <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center p-6">
    <div className="max-w-3xl w-full bg-white rounded-3xl shadow-lg p-10 border-4 border-indigo-200">
      <div className="flex justify-center mb-6">
        {/* Placeholder for icon or logo, can be added here if needed */}
      </div>
      <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600">
        COA Module 5 Quiz
      </h1>
      {/* Uncomment below paragraph if needed */}
      {/* <p className="text-lg text-gray-800 mb-10 leading-relaxed">
        Dive into Computer Organization and Architecture with this engaging
        Module 5 quiz. Test your knowledge and enhance your skills!
      </p> */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Feature components can go here */}
      </div>
      <button
        onClick={onStart}
        className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full shadow-md hover:from-purple-700 hover:to-pink-700 hover:shadow-lg transition-all duration-300"
      >
        Start Quiz
      </button>
    </div>
  </div>
);

export default Home;
