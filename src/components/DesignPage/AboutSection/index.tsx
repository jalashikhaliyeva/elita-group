import Image from "next/image";
import React from "react";

function AboutSection() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between py-8 lg:py-14">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-auto">
        <div className="mb-[60px] lg:mb-[100px]">
          <div className="flex gap-3 lg:gap-5 items-center">
            <span className="text-elements text-lg lg:text-xl font-medium font-Moneta">
              (01)
            </span>
            <span className="h-[1px] w-full bg-elements"></span>
          </div>
          <h2 className="text-textBase text-right pt-6 lg:pt-8 font-archivo text-2xl md:text-3xl lg:text-4xl font-medium leading-9">
            Məlumat
          </h2>
        </div>
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
      <div className="flex flex-col  lg:mt-0">
        <div className="hidden lg:flex items-center h-[21px]">
          <span className="h-[1px] w-full bg-elements"></span>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-secondary pt-6 lg:pt-8 text-left flex items-start text-sm lg:text-base font-manrope max-w-full lg:max-w-[805px]">
            Lorem ipsum dolor sit amet consectetur. Eu risus pretium sapien nisl
            etiam aliquet. Egestas neque nullam id nisi cras lorem id ac quis.
            Tortor placerat vel sed augue in blandit cursus vel. Turpis aliquet
            magna pulvinar dignissim urna ut. Amet ut turpis sit risus sed eu a
            curabitur consectetur. Amet risus duis ultrices felis aliquam vel
            feugiat eu cursus. A convallis eu platea urna arcu integer.Egestas
            neque nullam id nisi cras lorem id ac quis. Tortor placerat vel sed
            augue in blandit cursus vel. Turpis aliquet magna pulvinar dignissim
            urna ut.
          </p>
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

export default AboutSection;
