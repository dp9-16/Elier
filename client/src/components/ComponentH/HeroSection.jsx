import React from 'react';
import { AiFillShopping } from 'react-icons/ai';

const HeroSection = () => {
  return (
    <section className="h-[90vh] bg-gray-100 relative">
      <img
        src="/assets/img/model.jpg"
        alt="hero Section"
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <div className="text-2xl text-center">
          <p>Quality. Style. Atelier</p>
          <p className='text-xl'>Crafting Elegance & Wearing Dreams</p>
        </div>
        <a
          href="#"
          className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-[#27272A] hover:bg-[#78716C] focus:outline-none focus:border-gray-500 focus:shadow-outline-gray active:bg-gray-500 transition ease-in-out duration-150"
        >
          Shop Now
          <AiFillShopping className="ml-2" size={20} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;