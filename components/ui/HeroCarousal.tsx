import ImageItem from "next/image";
import React, { useState, useEffect } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const _images = [
  "/images/hero/1.jpg",
  "/images/hero/2.jpg",
  "/images/hero/3.jpg",
  "/images/hero/4.jpg",
];

const HeroCarousel = () => {
  const [, setTimestamp] = useState(0);
  const onLoad = () => setTimestamp(Date.now());
  const items = _images.map((img, i) => (
    <LazyLoader key={i} src={img} onLoad={onLoad} delay={i * 2000} />
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
  src,
  onLoad,
  delay,
}: {
  src: string;
  onLoad: () => void;
  delay: number;
}) {
  let timerId: NodeJS.Timeout;
  const [isMounted, setMounted] = useState(false);
  const [isLoading, setLoading] = useState(true);

  function loadImage() {
    const image = new Image();

    image.src = src;
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
        alt="Carousal Image"
        objectFit="cover"
        layout="fill"
        src={src}
      />
    </div>
  );
}
