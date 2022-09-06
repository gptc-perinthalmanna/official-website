import ImageItem from "next/image";
import React from "react";
// import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Marquee from "react-fast-marquee";

const LogoItem = ({ url, alt }: { url: string; alt: string }) => {
  return (
    <div className="relative w-56 h-32">
      <ImageItem
        alt={alt}
        src={url}
        layout="fill"
        objectFit="contain"
        // width="120"
        // height="70"
        className="mx-3"
      />
    </div>
  );
};

const LogoCarousal = ({
  images,
}: {
  images: { url: string; alt: string }[];
}) => {
  // const items = images.map((img) => (
  //   <div key={img.alt} className="w-60 flex items-center justify-center">
  //     <div className="relative w-56 h-32">
  //       <ImageItem
  //         alt={img.alt}
  //         src={img.url}
  //         layout="fill"
  //         objectFit="contain"
  //         // width="120"
  //         // height="70"
  //         className="mx-3"
  //       />
  //     </div>
  //   </div>
  // ));

  return (
    <Marquee>
      {images.map((img) => (
        <LogoItem key={img.url} url={img.url} alt={img.alt} />
      ))}
    </Marquee>
  );
};

export default LogoCarousal;
