import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../server/calls";
import { NotificationType } from "../server/db";
import Marquee from "react-fast-marquee";
import { GiSpotedFlower } from "react-icons/gi";

type NewsTypeProps = {
  title: string;
  date?: string;
  isNew?: boolean;
  link?: string;
};

function NewsTicker() {
  const { data, error } = useSWR<NotificationType[]>(
    "/api/notifications/all",
    fetcher
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data) setIndex((i) => (i + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (error) return <Wrapper title="Failed to load..." />;

  if (!data) return <Wrapper title="Loading..." />;
  const currentData = data[index];
  if (data.length === 0) return <Wrapper title="No notifications." />;

  const date = data[index]?.createdAt
    ? new Date(data[index]?.createdAt)
    : new Date();

  return (
    <Wrapper
      title={currentData.title}
      date={date.toISOString().substring(0, 10)}
      isNew={date.getTime() > Date.now() - 1000 * 60 * 60 * 24}
      link={currentData.link}
    />
  );
}

export default NewsTicker;

function Wrapper(props: NewsTypeProps) {
  return (
    <div className="flex items-center mx-auto mt-3 bg-gradient-to-r from-amber-200 to-yellow-100 lg:container">
      <div className="h-full px-3 py-3 text-sm font-bold uppercase bg-blue-800 text-gray-50">
        LATEST NEWS
      </div>
      <NewsItem {...props} />
    </div>
  );
}

const NewsItem = ({ title, date, isNew, link }: NewsTypeProps) => {
  return (
    <>
      {date && (
        <div
          onClick={() => window.open(link, "_blank")}
          className="flex-shrink-0 mx-1 text-xs bg-slate-50/60 leading-3 rounded-full px-3 py-0.5 font-bold text-gray-500"
        >
          {date}
        </div>
      )}
      <p
        onClick={() => window.open(link, "_blank")}
        className="h-full cursor-pointer px-1 text-sm font-bold "
      >
        {title}
      </p>
      {isNew && (
        <div
          onClick={() => window.open(link, "_blank")}
          className="mr-2 animate-pulse text-xs font-semibold text-red-600"
        >
          New!
        </div>
      )}
    </>
  );
};

export const NewsMarquee = () => {
  const { data, error } = useSWR<NotificationType[]>(
    "/api/notifications/all",
    fetcher
  );
  return (
    <div className="flex items-center mx-auto mt-3 bg-gradient-to-r from-amber-200 to-yellow-100 lg:container">
      <div className="h-full px-3 py-3 text-sm font-bold uppercase bg-blue-800 text-gray-50">
        LATEST NEWS
      </div>
      <div className="grow">
        {error && <div>Failed to load</div>}
        {data &&
          (data.length < 1 ? (
            <div>No Notifications</div>
          ) : (
            <Marquee gradient={false}>
              {data.map((e) => {
                const date = e.createdAt ? new Date(e.createdAt) : new Date();
                return (
                  <div
                    className="flex items-center mr-6 overflow-y-hidden"
                    key={e.title}
                  >
                    <p className="text-rose-700 animate-spin duration-75">
                      <GiSpotedFlower />
                    </p>
                    <NewsItem
                      title={e.title}
                      date={date.toISOString().substring(0, 10)}
                      isNew={date.getTime() > Date.now() - 1000 * 60 * 60 * 24}
                      link={e.link}
                    />
                  </div>
                );
              })}
            </Marquee>
          ))}
      </div>
    </div>
  );
};
