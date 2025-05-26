import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { RxDotFilled } from "react-icons/rx";
import LanguageSwitcher from "./LanguageSwitcher";

function Header({ activeItem = "dizayn" }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuIconRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: "dizayn", label: "Dizayn" },
    { id: "temir", label: "Təmir və tikinti" },
    { id: "mebel", label: "Mebel" },
    { id: "hamam", label: "Hamam aksessuarları" },
  ];

  const dropdownItems = [
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
    { id: "faq", label: "FAQ" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        menuIconRef.current &&
        !menuIconRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }

      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        !(event.target as Element).closest(".mobile-menu-button")
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex flex-col w-full font-archivo">
      {/* Desktop Header */}
      <div className="hidden md:flex justify-between w-full py-3 px-4">
        <div>
          <Image
            src="/images/logo/logo-elita2.png"
            width={90}
            height={20}
            quality={100}
            alt="Elita Logo"
          />
        </div>

        <div className="flex gap-4 lg:gap-8 font-archivo">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center">
              {activeItem === item.id ? (
                <div className="flex items-center gap-1 underline decoration-[1px] underline-offset-8 decoration-amber-700">
                  <RxDotFilled className="text-amber-700 text-2xl" />
                  <span className="text-textBase text-lg">{item.label}</span>
                </div>
              ) : (
                <span className="text-textBase text-lg transition-colors duration-300 cursor-pointer hover:text-amber-700">
                  {item.label}
                </span>
              )}
            </div>
          ))}

          <div className="flex items-center">
            <span className="text-textBase text-lg cursor-pointer transition-colors duration-300 hover:text-amber-700">
              <LanguageSwitcher />
            </span>
          </div>

          <div className="relative group">
            <div
              ref={menuIconRef}
              className="flex items-center h-full cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onMouseEnter={() => setIsMenuOpen(true)}
            >
              <AiOutlineMenu className="text-textBase text-lg transition-colors duration-300 hover:text-amber-700" />
            </div>
            {isMenuOpen && (
              <div
                className="absolute right-0 h-4 w-48 bg-transparent"
                onMouseEnter={() => setIsMenuOpen(true)}
              />
            )}

            <div
              ref={dropdownRef}
              className={`absolute right-0 mt-4 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200 transition-all duration-200 ease-in-out ${
                isMenuOpen
                  ? "opacity-100 visible"
                  : "opacity-0 invisible pointer-events-none"
              }`}
              onMouseEnter={() => setIsMenuOpen(true)}
              onMouseLeave={() => setIsMenuOpen(false)}
            >
              {dropdownItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="block px-4 py-2 text-textBase text-lg hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="flex md:hidden justify-between items-center w-full py-3 px-4">
        <div>
          <Image
            src="/images/logo/logo-elita2.png"
            width={70}
            height={15}
            quality={100}
            alt="Elita Logo"
          />
        </div>

        <div className="flex gap-4">
          <div className="flex ">
            <span className="text-textBase text-xl cursor-pointer transition-colors duration-300 hover:text-amber-700">
              <LanguageSwitcher />
            </span>
          </div>
          <button
            className="mobile-menu-button focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <AiOutlineClose className="text-textBase text-2xl" />
            ) : (
              <AiOutlineMenu className="text-textBase text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`md:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <div>
            <Image
              src="/images/logo/logo-elita2.png"
              width={90}
              height={20}
              quality={100}
              alt="Elita Logo"
            />
          </div>
          <button
            className="focus:outline-none"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <AiOutlineClose className="text-textBase text-2xl" />
          </button>
        </div>

        <div className="flex flex-col items-center gap-6 mt-10">
          {menuItems.map((item) => (
            <div key={item.id} className="flex items-center">
              {activeItem === item.id ? (
                <div className="flex items-center gap-1 underline decoration-[1px] underline-offset-8 decoration-amber-700">
                  <RxDotFilled className="text-amber-700 text-2xl" />
                  <span className="text-textBase text-xl">{item.label}</span>
                </div>
              ) : (
                <span className="text-textBase text-xl transition-colors duration-300 cursor-pointer hover:text-amber-700">
                  {item.label}
                </span>
              )}
            </div>
          ))}

          <div className="border-t border-gray-200 w-4/5 pt-6 mt-6">
            <div className="flex flex-col items-center gap-6">
              {dropdownItems.map((item) => (
                <a
                  key={item.id}
                  href="#"
                  className="text-textBase text-xl hover:text-amber-700 transition-colors duration-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
