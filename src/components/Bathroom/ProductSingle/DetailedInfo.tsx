// src/components/Bathroom/DetailedInfo.tsx
import React from "react";
import { Product, ImageVariant, Attribute } from "@/src/types";
import Link from "next/link";
import { SiWhatsapp } from "react-icons/si";

interface DetailedInfoProps {
  product: Product;
  phone: string; // e.g. "+994 (70)-370-10-60"
}

function DetailedInfo({ product, phone }: DetailedInfoProps) {
  // Remove all non-digit characters (including "+"), e.g. "+994 (70)-370-10-60" → "994703701060"
  const sanitizedPhone = phone.replace(/\D/g, "");

  return (
    <div className="flex flex-col justify-between">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h1 className="text-textBase text-3xl font-semibold font-archivo pb-5 md:pb-10">
          {product.title}
        </h1>

        {/* Description */}
        <div className="flex flex-col gap-4">
          <p className="text-xl text-textBase font-medium font-archivo leading-5">
            Ümumi məlumat
          </p>
          <p className="text-base text-elementSecondary font-manrope">
            {product.description}
          </p>
        </div>

        {/* Detailed attributes */}
        <div className="flex flex-col gap-4">
          <p className="text-textBase font-archivo text-xl leading-5 font-medium">
            Detallı
          </p>

          <div className="flex flex-col gap-3">
            {/* Category */}
            <div className="flex justify-between items-center">
              <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                Kateqoriya:
              </p>
              <p className="text-textBase font-manrope font-semibold leading-6 text-base">
                {product.category}
              </p>
            </div>

            {/* Brand */}
            <div className="flex justify-between items-center">
              <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                Brend:
              </p>
              <p className="text-textBase font-manrope font-semibold leading-6 text-base">
                {product.brand}
              </p>
            </div>

            {/* Attributes (array of key/value) */}
            {product.attribute.length > 0 && (
              <div className="flex flex-col gap-1">
                {product.attribute.map((attr: Attribute, idx: number) => (
                  <div key={idx} className="flex justify-between items-center">
                    <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                      {attr.key}:
                    </p>
                    <p className="text-textBase font-manrope font-semibold leading-6 text-base">
                      {attr.value}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Color Availability */}
            <div className="flex justify-between items-center">
              <p className="text-elementSecondary text-base font-medium font-manrope leading-6">
                Rəng mövcudluğu:
              </p>
              <div className="flex gap-2">
                {[
                  // Deduplicate by `hex` to only show one swatch per color
                  ...new Map(
                    product.images.map((img: ImageVariant) => [img.hex, img.hex])
                  ).values(),
                ].map((hexValue) => (
                  <span
                    key={hexValue}
                    className="w-5 h-5 rounded-full border"
                    style={{ backgroundColor: hexValue }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* "Contact Us" buttons */}
      <div className="flex flex-col gap-4 pt-20">
        {/* Internal "Bizimlə əlaqə" */}
        <div>
          <Link
            href="/elaqe"
            className="text-textBase border border-textBase py-2 font-archivo font-base w-full flex items-center justify-center leading-5
                      transition-all duration-300 ease-in-out
                      hover:bg-textBase hover:text-white
                      focus:outline-none focus:ring-2 focus:ring-textBase focus:ring-opacity-50
                      active:bg-textBase/90 active:scale-95"
          >
            Bizimlə əlaqə
          </Link>
        </div>

        {/* WhatsApp button opens wa.me link in a new tab */}
        <div>
          <a
            href={`https://wa.me/${sanitizedPhone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-textBase border border-textBase py-2 font-archivo font-base w-full flex items-center gap-5 justify-center leading-5
                      transition-all duration-300 ease-in-out
                      hover:bg-emerald-50 hover:border-emerald-800
                      focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-opacity-50
                      active:bg-emerald-100 active:scale-95"
          >
            <SiWhatsapp className="text-emerald-400 text-2xl" />
            Whatsappla əlaqə
          </a>
        </div>
      </div>
    </div>
  );
}

export default DetailedInfo;