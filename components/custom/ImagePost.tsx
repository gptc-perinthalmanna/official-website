import React from "react";
import Image from "next/image";

function ImagePost({
  image,
  date,
  title,
  subtitle,
  fullHeight = false,
}: {
  image: string;
  date: string;
  title: string;
  subtitle: string;
  fullHeight?: boolean;
}) {
  return (
    <div
      className={
        "relative w-full min-h-full cursor-pointer group " +
        (fullHeight ? "h-full" : "h-80")
      }
    >
      <Image src={image} alt="Image" layout="fill" objectFit="cover" />
      <div className="absolute p-1 text-xs text-white transition-opacity duration-500 ease-in-out bg-gray-700 rounded opacity-0 group-hover:opacity-100 top-2 left-2">
        {date}
      </div>
      <div className="absolute bottom-0 w-full px-3 py-2 text-xs transition-all duration-200 bg-gray-800 cursor-pointer group-hover:pb-4 opacity-90 text-gray-50 group-hover:bg-gray-700">
        <h2 className="text-sm font-bold">{title}</h2>
        <p className="font-serif">{subtitle}</p>
      </div>
    </div>
  );
}

export default ImagePost;
