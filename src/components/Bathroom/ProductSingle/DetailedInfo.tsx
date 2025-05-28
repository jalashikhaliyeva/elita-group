import React from "react";

function DetailedInfo() {
  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6">
      <h1 className="text-textBase text-3xl font-semibold font-archivo pb-5 md:pb-10">
        Title
      </h1>
      <div className="flex flex-col gap-4">
        <p className="text-xl text-textBase font-medium font-archivo leading-5">
          Ümumi məlumat
        </p>
        <p className="text-base text-elementSecondary font-manrope">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A pariatur
          sapiente veniam doloremque similique, et ut ipsa, consectetur non
          voluptatibus dolores aliquam cumque iure nulla adipisci incidunt earum
          natus. Error.
        </p>
      </div>

      <div className="flex flex-col gap-4">
        <p className="text-textBase font-archivo text-xl leading-5 font-medium">
          Detallı
        </p>

        <div className="flex justify-between items-center">
          <p className="text-elementSecondary  text-base font-medium font-manrope leading-6">
            Qiymət:
          </p>
          <p className="text-textBase font-manrope font-semibold leading-6 text-base">
            600$
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-elementSecondary  text-base font-medium font-manrope leading-6">
            Seriya:
          </p>
          <p className="text-textBase font-manrope font-semibold leading-6 text-base">
            Ambition
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-elementSecondary  text-base font-medium font-manrope leading-6">
            Məhsul nömrəsi:
          </p>
          <p className="text-textBase font-manrope font-semibold leading-6 text-base">
            A803CA165SGPM12
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-elementSecondary  text-base font-medium font-manrope leading-6">
            Rəng mövcudluğu:
          </p>
          <p className="text-textBase font-manrope font-semibold leading-6 text-base">
            Yoxdur
          </p>
        </div>
      </div>

     
    </div>
     <div className="mt-20">
        <button className="text-textBase border border-textBase py-2 font-archivo font-base w-full flex items-center justify-center leading-5">
            Bizimlə əlaqə
        </button>

      </div>
    </div>
  
  );
}

export default DetailedInfo;
