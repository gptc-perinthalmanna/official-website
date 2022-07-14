import ImageItem from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const LogoCarousal = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const items = images.map((img) => (
    <div key={img.alt} className="w-60 flex items-center justify-center">
      <div className="relative w-56 h-32">
        <ImageItem
          alt={img.alt}
          src={img.url}
          layout="fill"
          objectFit="contain"
          // width="120"
          // height="70"
          className="mx-3"
        />
      </div>
    </div>
  ));

  return (
    <AliceCarousel
      autoPlay
      //   autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={5000}
      animationDuration={1000}
      infinite
      autoWidth
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      mouseTracking
      items={items}
    />
  );
};

export default LogoCarousal;
