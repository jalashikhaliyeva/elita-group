import Image from "next/image";
import React from "react";

function ContactBanner() {
  return (
    <div className="bg-elements px-8 py-12 relative">
  
      <div className="absolute top-0 left-8 hidden md:block">
        <Image
        width={250}
        height={190}
          src="/images/icons/lamp.png"
          alt="Lamp"
          className="w-[250px] h-[190px] object-contain"
        />
      </div>


      <div className="flex flex-col md:flex-row items-center justify-between pt-8">

        <div className="text-white md:ml-10 pb-5 font-archivo">
          <h2 className="text-4xl font-light mb-6">Bizimlə əlaqə</h2>
          <div className="space-y-2">
            <p className="text-xl">+994 (70)-370-10-60</p>
            <p className="text-xl">Y.V.Çəmənzəminli 21</p>
          </div>
        </div>

        {/* Right side with contact form */}
        <div className="flex-shrink-0 w-80 md:mr-[100px]">
          <div className="space-y-4">
            <div>
              <label className="block text-white text-sm mb-2">Adınız</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">Soyadınız</label>
              <input
                type="text"
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="block text-white text-sm mb-2">
                Telefon nömrəniz
              </label>
              <input
                type="tel"
                placeholder="Placeholder"
                className="w-full px-4 py-3 bg-transparent border border-gray-400 text-white placeholder-gray-400 focus:outline-none focus:border-white"
              />
            </div>

            <button
              type="submit"
              className="w-full cursor-pointer bg-black text-white py-3 px-6 mt-6 hover:bg-gray-900 transition-colors duration-200 flex items-center justify-center space-x-2"
            >
              <span>Göndər</span>
              <svg
                width="17"
                height="16"
                viewBox="0 0 17 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15.1668 1.3335L10.5002 14.6668L7.8335 8.66683M15.1668 1.3335L1.8335 6.00016L7.8335 8.66683M15.1668 1.3335L7.8335 8.66683"
                  stroke="#FAFAFA"
                  stroke-width="1.33"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactBanner;
