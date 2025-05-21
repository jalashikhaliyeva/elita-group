import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[600px] flex items-center justify-start overflow-hidden">
      {/* Video element with loop and muted attributes for autoplay */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/images/intro/video/video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%)",
        }}
      />

      {/* Text content with proper contrast and spacing */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 max-w-3xl">
        <h1 className="text-5xl md:text-[96px] font-archivo font-normal text-white tracking-tight leading-tight">
          Design
        </h1>
        {/* <p className="mt-4 text-xl text-white opacity-90 max-w-lg">
          Creating meaningful experiences through thoughtful design principles
        </p> */}
      </div>
    </div>
  );
}

export default Hero;
