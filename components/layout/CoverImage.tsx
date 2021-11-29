import React from "react";
import Image from "next/image";

function CoverImage({
  source,
  alt = "Cover Image",
  title,
}: {
  source: string;
  alt?: string;
  title?: string;
}) {
  return (
    <div className="relative w-full h-80">
      <Image
        src={source}
        className="inset-full"
        layout="fill"
        sizes="100%"
        alt={alt}
        objectFit="cover"
        blurDataURL={process.env.NODE_ENV === "development" ? source : undefined}
      />

      {title && (
        <div className="absolute bottom-0 w-full flexjustify-center ">
          <div className="relative text-center filter grayscale invert">
          <Image src="/logo.png" className="filter grayscale invert" alt="logo" width={100} height={100} placeholder="blur" blurDataURL={process.env.NODE_ENV === "development" ? source : undefined} />
          </div>
          <div className="flex justify-center w-full py-3 font-bold text-white bg-gray-900 bg-opacity-50 ">
            <p className="text-xl xl:text-4xl lg:text-3xl md:text-2xl">
              {title}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default CoverImage;
