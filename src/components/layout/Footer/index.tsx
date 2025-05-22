import Image from "next/image";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 px-4 py-8 mt-8 border-t border-elements font-archivo w-full">
      <div className="flex  flex-col md:flex-row justify-between">
        <div className="flex flex-col pb-5">
          <div className="w-full mb-4">
            <Image
              src="/images/logo/logo-elita2.png"
              alt="Elita Logo"
              width={128}
              height={32}
              className="w-[140px] h-auto"
            />
          </div>
        </div>

        {/* Fixed grid with equal column widths */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 flex-1 max-w-4xl">
          {/* Dizayn Column */}
          <div className="flex flex-col space-y-2 min-w-0">
            <h3 className="font-normal text-textBase text-base">Dizayn</h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#"
                  className="text-elementSecondary  hover:text-secondary text-sm transition-colors"
                >
                  Layihələr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Xidmətlər
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Temir ve tikinti Column */}
          <div className="flex flex-col space-y-2 min-w-0">
            <h3 className="font-normal text-textBase text-base">
              Temir ve tikinti
            </h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Layihələr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Xidmətlər
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Mebel Column */}
          <div className="flex flex-col space-y-2 min-w-0">
            <h3 className="font-normal text-textBase text-base">Mebel</h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Layihələr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Xidmətlər
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Hamam aksessuarları Column - with line break for better spacing */}
          <div className="flex flex-col space-y-2 min-w-0">
            <h3 className="font-normal text-textBase text-base">
              Hamam
              <br />
              aksessuarları
            </h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Layihələr
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Xidmətlər
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Elita Column */}
          <div className="flex flex-col space-y-2 min-w-0">
            <h3 className="font-normal text-textBase text-base">Elita</h3>
            <ul className="flex flex-col space-y-3">
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Haqqımızda
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-elementSecondary hover:text-secondary text-sm transition-colors"
                >
                  Bloq
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
