
// components/AboutSection.jsx
import React from 'react';

const AboutSection = () => {
  return (
    <section className="container mx-auto px-6 mb-24">
      <div className="flex items-center justify-between">
        <div className="max-w-lg">
          <h2 className="text-[40px] font-bold leading-[44px] tracking-[1.5px] mb-8 uppercase">
            BRINGING YOU THE <span className="text-[#D0BDA4]">BEST</span> AUDIO GEAR
          </h2>
          <p className="text-black/50">
            Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div className="w-[540px] h-[588px] bg-[#F1F1F1] rounded-lg"></div>
      </div>
    </section>
  );
};

export default AboutSection;
