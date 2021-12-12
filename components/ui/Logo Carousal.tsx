import ImageItem from "next/image";
import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const LogoCarousal = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  const items = images.map((img, i) => (
    <div key={img.alt} className="relative w-32 h-32 px-3">
      <ImageItem
        alt={img.alt}
        objectFit="contain"
        layout="fill"
        src={img.url}
      />
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
