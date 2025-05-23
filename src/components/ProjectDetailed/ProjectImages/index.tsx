import Image from "next/image";
import React from "react";

function ProjectImages() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between py-8 lg:py-14">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-1/3">
        <div className=" hidden lg:flex flex-col gap-6 pt-8 lg:pt-14">
          <div className="flex justify-center lg:block">
            <Image
              width={400}
              height={400}
              src="/images/intro/img2.png"
              alt="Modern kitchen and dining area with minimalist design"
              className="h-[200px] lg:h-[300px] w-[150px] lg:w-[200px] object-cover"
            />
          </div>
          <div className="flex justify-center lg:block">
            <Image
              width={400}
              height={400}
              src="/images/intro/img4.png"
              alt="Cozy dining room with wooden table and modern lighting"
              className="h-[200px] lg:h-[300px] w-[150px] lg:w-[200px] lg:ml-[160px] object-cover"
            />
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col w-full lg:w-2/3 lg:mt-0">
        <div className="flex flex-col gap-6 lg:gap-8">
          <div className="pt-8 lg:pt-12">
            <Image
              width={800}
              height={500}
              src="/images/intro/img1.png"
              alt="Luxurious dark-themed lounge with fireplace, elegant seating, and sophisticated lighting"
              className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[628px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectImages;
