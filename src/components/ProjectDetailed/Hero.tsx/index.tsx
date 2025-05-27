import Image from "next/image";
import React from "react";
import { useRouter } from "next/router";

function Hero() {
  const router = useRouter();
  const currentPath = router.pathname;

  // Show button only when path is '/hamam'
  const showButton = currentPath === '/hamam';

  return (
    <div className="w-full flex flex-col md:flex-row ">
      <div className="w-full md:w-[65%] h-[360px]">
        <Image
          src="/images/intro/hero.png"
          alt="Hero image elita"
          width={600}
          height={360}
          className="w-full h-full object-cover"
        />
      </div>

      <div
        className="
      flex-none
     w-full md:w-[35%]
      h-[360px]
      bg-elementSecondaryBg
      p-8
      flex
      flex-col
      justify-center
    "
      >
        <div className="flex flex-col justify-center gap-7 my-auto">
          <h1 className="font-archivo font-medium text-5xl leading-11 text-textBase">
            Layihə adı
          </h1>
          <p className="text-textBase text-base">
            Lorem ipsum dolor sit amet consectetur. Ultrices adipiscing erat dui
            feugiat purus pellentesque egestas phasellus ac. Neque varius purus
            fusce habitasse.
          </p>

          {showButton && (
            <button className="bg-black py-2 px-4 text-white w-fit flex gap-2 items-center">
              Brendlərlə tanış ol
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="17"
                viewBox="0 0 16 17"
                fill="none"
              >
                <path
                  d="M11.9997 5.8335L14.6663 8.50016M14.6663 8.50016L11.9997 11.1668M14.6663 8.50016H1.33301"
                  stroke="#FAFAFA"
                  stroke-width="1.33"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Hero;