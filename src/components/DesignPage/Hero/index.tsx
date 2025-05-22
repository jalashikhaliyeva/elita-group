import React from "react";
import Container from "../../layout/Container";

function Hero() {
  return (
    <div className="relative w-full h-[300px] md:h-[620px] flex items-center justify-start overflow-hidden">
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

      <div className="flex flex-col md:flex-row md:justify-between md:items-start">
        <Container>
        

          <p className="text-5xl md:text-[96px] text-white font-archivo opacity-90 ">
            Dizayn
          </p>
        </Container>
      </div>
    </div>
  );
}

export default Hero;
