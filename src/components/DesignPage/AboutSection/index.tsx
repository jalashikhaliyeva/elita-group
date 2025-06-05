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
          className="w-full flex flex-col xl:flex-row gap-[100px] justify-between py-8 xl:py-14"
        >
          {/* Left Column */}
          <div className="flex flex-col w-full xl:w-auto">
            <div className="mb-[60px] xl:mb-[100px]">
              <div className="flex gap-3 xl:gap-5 items-center">
                <span className="text-elements text-lg xl:text-xl font-medium font-Moneta">
                  ({String(index + 1).padStart(2, "0")})
                </span>
                <span className="h-[1px] w-full bg-elements"></span>
              </div>
              <h2 className="text-textBase text-right pt-6 xl:pt-8 font-archivo text-2xl md:text-3xl xl:text-4xl font-medium leading-9">
                {item.title}
              </h2>
            </div>
            <div className="hidden xl:flex flex-col gap-6 pt-8 xl:pt-14">
              <div className="flex justify-center xl:block">
                <Image
                  width={400}
                  height={400}
                  src={item.image_1}
                  alt={`${item.title} - Image 1`}
                  className="h-[200px] xl:h-[300px] w-[150px] xl:w-[200px] object-cover"
                />
              </div>
              <div className="flex justify-center xl:block">
                <Image
                  width={400}
                  height={400}
                  src={item.image_2}
                  alt={`${item.title} - Image 2`}
                  className="h-[200px] xl:h-[300px] w-[150px] xl:w-[200px] xl:ml-[160px] object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col xl:mt-0">
            <div className="hidden xl:flex items-center h-[21px]">
              <span className="h-[1px] w-full bg-elements"></span>
            </div>
            <div className="flex flex-col gap-6 xl:gap-8">
              <p className="text-secondary pt-6 xl:pt-8 text-left flex items-start text-sm xl:text-base font-manrope max-w-full xl:max-w-[805px]">
                {item.description}
              </p>
              <div className="pt-8 xl:pt-12">
                <Image
                  width={800}
                  height={500}
                  src={item.image_3}
                  alt={`${item.title} - Main Image`}
                  className="object-cover w-full h-[300px] sm:h-[400px] md:h-[500px] xl:h-[628px]"
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
