import ImageItem from "next/image";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { ImageType } from "../../server/db";


const HeroCarousel = ({images}:{images: ImageType[]}) => {
  const [, setTimestamp] = useState(0);
  const onLoad = () => setTimestamp(Date.now());
  const items = images.map((img, i) => (
    <LazyLoader key={i} img={img} onLoad={onLoad} delay={i * 2000} />
  ));

  return (
    <AliceCarousel
      autoPlay
    //   autoPlayControls
      autoPlayStrategy="none"
      autoPlayInterval={5000}
      animationDuration={1000}
      animationType="fadeout"
      infinite
      touchTracking={false}
      disableDotsControls
      disableButtonsControls
      mouseTracking
      items={items}
      keyboardNavigation
    />
  );
};

export default HeroCarousel;

function LazyLoader({
  img,
  onLoad,
  delay,
}: {
  img: ImageType;
  onLoad: () => void;
  delay: number;
}) {
  let timerId: NodeJS.Timeout;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = img.url;
    image.onload = () => {
      setLoading(false);
      onLoad();
    };
    image.onerror = () => {
      setLoading(false);
    };
  }

  useEffect(() => {
    if (!isMounted) {
      setMounted(true);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      delay ? (timerId = setTimeout(loadImage, delay)) : loadImage();
    }
    return () => clearTimeout(timerId);
  }, []);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className="relative h-96">
      <ImageItem
      placeholder="blur"
        alt="Carousal Image"
        objectFit="cover"
        layout="fill"
        src={img.url}
        blurDataURL={img.thumb.url}
      />
    </div>
  );
}
