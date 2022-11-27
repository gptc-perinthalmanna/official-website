import React, { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

function ImagePost({
  image,
  date,
  images,
  title,
  subtitle,
  fullHeight = false,
  onClick,
}: {
  image: string;
  date: string;
  images?: string[];
  title: string;
  subtitle: string;
  fullHeight?: boolean;
  onClick?: () => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div
        onClick={() => images && setIsOpen(true)}
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
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        {/* The backdrop, rendered as a fixed sibling to the panel container */}
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

        {/* Full-screen container to center the panel */}
        <div className="fixed inset-0 flex items-center justify-center p-4">
          {/* The actual dialog panel  */}
          <Dialog.Panel className="mx-auto w-full max-w-xl p-5 rounded bg-white">
            <Dialog.Title className="text-lg font-semibold">
              {title}
            </Dialog.Title>
            {images && (
              <Carousel
                items={images.map((e) => (
                  <img
                    key={e}
                    className="item rounded-md"
                    src={e}
                    data-value="1"
                  />
                ))}
              />
            )}
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
}

export default ImagePost;

const thumbItems = (
  items: JSX.Element[],
  [setThumbIndex, setThumbAnimation]: [
    (i: number) => void,
    (i: boolean) => void
  ]
) => {
  return items.map((item, i) => (
    <div
      key={i}
      className="thumb"
      onClick={() => {
        setThumbIndex(i);
        setThumbAnimation(true);
      }}
    >
      {item}
    </div>
  ));
};

const Carousel = ({ items }: { items: JSX.Element[] }) => {
  const [mainIndex, setMainIndex] = useState(0);
  const [mainAnimation, setMainAnimation] = useState(false);
  const [thumbIndex, setThumbIndex] = useState(0);
  const [thumbAnimation, setThumbAnimation] = useState(false);
  const [thumbs] = useState(
    thumbItems(items, [setThumbIndex, setThumbAnimation])
  );

  const slideNext = () => {
    if (!thumbAnimation && thumbIndex < thumbs.length - 1) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex + 1);
    }
  };

  const slidePrev = () => {
    if (!thumbAnimation && thumbIndex > 0) {
      setThumbAnimation(true);
      setThumbIndex(thumbIndex - 1);
    }
  };

  const syncMainBeforeChange = () => {
    setMainAnimation(true);
  };

  const syncMainAfterChange = (e: any) => {
    setMainAnimation(false);

    if (e.type === "action") {
      setThumbIndex(e.item);
      setThumbAnimation(false);
    } else {
      setMainIndex(thumbIndex);
    }
  };

  const syncThumbs = (e: any) => {
    setThumbIndex(e.item);
    setThumbAnimation(false);

    if (!mainAnimation) {
      setMainIndex(e.item);
    }
  };

  return (
    <>
      <AliceCarousel
        activeIndex={mainIndex}
        animationType="fadeout"
        animationDuration={800}
        disableDotsControls
        disableButtonsControls
        items={items}
        mouseTracking={!thumbAnimation}
        onSlideChange={syncMainBeforeChange}
        onSlideChanged={syncMainAfterChange}
        touchTracking={!thumbAnimation}
      />

      <div className="flex items-center gap-4 my-2 max-w-lg">
        <div
          className=" top-6 text-5xl cursor-pointer left-6"
          onClick={slidePrev}
        >
          &lang;
        </div>
        <AliceCarousel
          activeIndex={thumbIndex}
          autoWidth
          disableDotsControls
          disableButtonsControls
          items={thumbs}
          mouseTracking={false}
          onSlideChanged={syncThumbs}
          touchTracking={!mainAnimation}
        />
        <div
          className=" top-6 text-5xl cursor-pointer right-6"
          onClick={slideNext}
        >
          &rang;
        </div>
      </div>
    </>
  );
};
