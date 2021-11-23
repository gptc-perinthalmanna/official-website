import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ImagePost from "../custom/ImagePost";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const events = [
  {
    title: "Event 1",
    subtitle: "Subtitle 1",
    image: "/images/library-1.jpg",
    date: "12 Oct 2021",
  },
  {
    title: "Event 1",
    subtitle: "Subtitle 1",
    image: "/images/library-2.jpg",
    date: "12 Oct 2021",
  },
  {
    title: "Event 1",
    subtitle: "Subtitle 1",
    image: "/images/library-3.jpg",
    date: "12 Oct 2021",
  },
  {
    title: "Event 1",
    subtitle: "Subtitle 1",
    image: "/images/library-4.jpg",
    date: "12 Oct 2021",
  },
];

const EventCarousel = ({ items = events }: { items?: typeof events }) => {
  const _items = items.map((event) => (
    <div key={event.title} className="pr-4">
      <ImagePost
        image={event.image}
        date={event.date}
        title={event.title}
        subtitle={event.subtitle}
      />
    </div>
  ));

  return (
    <AliceCarousel
      mouseTracking
      touchTracking
      keyboardNavigation
      items={_items}
      responsive={responsive}
      disableButtonsControls
      disableDotsControls
      disableSlideInfo
    />
  );
};

export default EventCarousel;
