import Image from "next/image";
import React from "react";

interface InformationItem {
  title: string;
  description: string;
  image_1: string;
  image_2: string;
  image_3: string;
  thumb_image_1: string;
  thumb_image_2: string;
  thumb_image_3: string;
}

interface AboutSectionProps {
  information: InformationItem[];
}

function AboutSection({ information }: AboutSectionProps) {
  return (
    <div>
      {information.map((item, index) => (
        <div
          key={index}
          className="w-full flex flex-col lg:flex-row justify-between py-8 lg:py-14"
        >
          {/* Left Column */}
          <div className="flex flex-col w-full lg:w-auto">
            <div className="mb-[60px] lg:mb-[100px]">
              <div className="flex gap-3 lg:gap-5 items-center">
                <span className="text-elements text-lg lg:text-xl font-medium font-Moneta">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <span className="h-[1px] w-full bg-elements"></span>
              </div>
              <h2 className="text-textBase text-right pt-6 lg:pt-8 font-archivo text-2xl md:text-3xl lg:text-4xl font-medium leading-9">
                {item.title}
              </h2>
            </div>
            <div className="hidden lg:flex flex-col gap-6 pt-8 lg:pt-14">
              <div className="flex justify-center lg:block">
                <Image
                  width={400}
                  height={400}
                  src={item.image_1}
                  alt={`${item.title} - Image 1`}
                  className="h-[200px] lg:h-[300px] w-[150px] lg:w-[200px] object-cover"
                />
              </div>
              <div className="flex justify-center lg:block">
                <Image
                  width={400}
                  height={400}
                  src={item.image_2}
                  alt={`${item.title} - Image 2`}
                  className="h-[200px] lg:h-[300px] w-[150px] lg:w-[200px] lg:ml-[160px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col lg:mt-0">
            <div className="hidden lg:flex items-center h-[21px]">
              <span className="h-[1px] w-full bg-elements"></span>
            </div>
            <div className="flex flex-col gap-6 lg:gap-8">
              <p className="text-secondary pt-6 lg:pt-8 text-left flex items-start text-sm lg:text-base font-manrope max-w-full lg:max-w-[805px]">
                {item.description}
              </p>
              <div className="pt-8 lg:pt-12">
                <Image
                  width={800}
                  height={500}
                  src={item.image_3}
                  alt={`${item.title} - Main Image`}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[628px]"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AboutSection;
