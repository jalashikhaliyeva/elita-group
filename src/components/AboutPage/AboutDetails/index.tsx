import React from "react";

function AboutDetails() {
  return (
    <div className="w-full flex flex-col lg:flex-row justify-between py-8 lg:my-14 pb-14 md:pb-20 border-b border-elements">
      {/* Left Column */}
      <div className="flex flex-col w-full lg:w-auto">
        <div className="mb-[60px] lg:mb-[100px]">
          <div className="flex gap-3 lg:gap-5 items-center">
            <span className="text-elements text-lg lg:text-xl font-medium font-Moneta">
              (01)
            </span>
            <span className="h-[1px] w-full bg-elements"></span>
          </div>
          <h2 className="text-textBase  pt-6 lg:pt-8 font-archivo text-2xl md:text-3xl lg:text-4xl font-medium leading-9">
            Nə edirik?
          </h2>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col  lg:mt-0">
        <div className="hidden lg:flex items-center h-[21px]">
          <span className="h-[1px] w-full bg-elements"></span>
        </div>
        <div className="flex flex-col gap-6 lg:gap-8">
          <p className="text-secondary  lg:pt-8 text-left flex items-start text-sm lg:text-base font-manrope max-w-full lg:max-w-[805px]">
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
        </div>
      </div>
      
    </div>
  );
}

export default AboutDetails;
