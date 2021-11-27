import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import ImagePost from "../custom/ImagePost";
import useSWR from "swr";
import { fetcher } from "../../server/calls";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1028: { items: 3 },
  1280: { items: 4 },
};

interface Event {
  title: string;
  subtitle: string;
  image: string;
  date: string;
}

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

const EventCarousel = ({ id }: { id: string }) => {
  const { data, error } = useSWR<Event[]>("/api/events/" + id, fetcher);

  if (error)
    return (
      <div className="flex p-2 select-none sm:p-4 sm:h-64 rounded-2xl">
        <div className="flex items-center justify-center w-full text-xl font-bold text-center text-red-600 bg-gray-200 h-52 rounded-xl">
          <p>Data Failed to load</p>
        </div>
      </div>
    );

  if (!data)
    return (
      <div className="flex flex-col p-2 select-none sm:p-4 sm:h-64 rounded-2xl sm:flex-row">
        <div className="bg-gray-200 h-52 sm:h-full sm:w-full rounded-xl animate-pulse"></div>
      </div>
    );

  const _items = data?.map((event) => (
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
      autoPlay
      autoPlayInterval={5000}
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
