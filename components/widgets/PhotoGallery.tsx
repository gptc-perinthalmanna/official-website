import React from "react";
import Image from "next/image";

const _images = [
  {
    src: "/images/library-1.jpg",
    alt: "Photo Libray",
  },
  {
    src: "/images/library-2.jpg",
    alt: "Photo Libray",
  },
  {
    src: "/images/library-3.jpg",
    alt: "Photo Libray",
  },
  {
    src: "/images/library-4.jpg",
    alt: "Photo Libray",
  },
];

function PhotoGallery({ images = _images }) {
  return (
    <>
      <h2 className="mx-2 mb-3 text-2xl font-bold text-teal-700">Photos</h2>
      {_images.map((image) => (
        <div
          key={image.src}
          className="p-1 m-2 border-2 border-teal-500 rounded-lg hover:border-teal-300"
        >
          <div className="relative w-full p-4 overflow-hidden rounded-lg h-60">
            <Image
              src={image.src}
              alt="Photo Libray"
              layout="fill"
              objectFit="cover"
              placeholder="blur"
            />
          </div>
        </div>
      ))}
    </>
  );
}

export default PhotoGallery;
