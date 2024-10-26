import React from 'react';

const About = () => {
  return (
    <div className = "main shadow-md m-4">
      <div className="bg-customimage  h-screen bg-cover bg-center w-full">
        <div>
          <div className= "border-2">
            <p className="mt-36 border-4  bg-slate-300 w-98 mx-20 p-8 font-serif shadow-2xl  shadow-black font-semibold hover:bg-blue-600">
              At Foodizo, we're passionate about connecting you with the best flavors around. 
              Whether you're craving a quick bite or planning a gourmet meal. With Foodizo, 
              enjoying great food has never been simpler.
            </p>
          </div>
          <div className= "my-8">
            <p className="mt-30 border-transparent bg-teal-800 w-72  mx-auto p-4 shadow-lg text-white shadow-white font-semibold hover:bg-red-600">
              — BROWSE, ORDER, and SAVOR! 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About



