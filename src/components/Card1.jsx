import React from 'react';

const Card1 = ({ imageSrc, title, description }) => {
  return (
    <div className="max-w-xs bg-white shadow-lg rounded-lg overflow-hidden mx-2 my-1 transform transition duration-500 hover:rotate-y-180 cursor-pointer">
      <div className="grid grid-cols-1 gap-4">
      <div className="avatar">
  <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1" style={{margin:' 2px auto', padding:'auto'}}>
    <img src={imageSrc} alt="name" />
  </div>
</div>
        <div className="py-4 px-6">
          <h1 className="text-xl font-semibold text-gray-800">{title}</h1>
          <p className="py-2 text-gray-700">{description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out transform hover:scale-105">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card1;
