import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../server/calls";
import { NotificationType } from "../server/db";

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

function Wrapper({
  title,
  date,
  isNew,
  link,
}: {
  title: string;
  date?: string;
  isNew?: boolean;
  link?: string;
}) {
  return (
    <div className="flex items-center mx-auto mt-3 bg-yellow-200 lg:container">
      <div className="h-full px-3 py-3 text-sm font-bold uppercase bg-blue-800 text-gray-50">
        LATEST NEWS
      </div>
      <p
        onClick={() => window.open(link, "_blank")}
        className="h-full cursor-pointer px-3 text-sm font-bold bg-yellow-200"
      >
        {title}
      </p>
      {date && (
        <div
          onClick={() => window.open(link, "_blank")}
          className="flex-shrink-0 mx-1 text-xs font-bold text-gray-500"
        >
          {date}
        </div>
      )}
      {isNew && (
        <div
          onClick={() => window.open(link, "_blank")}
          className="mr-2 text-xs font-semibold text-red-600"
        >
          New!
        </div>
      )}
    </div>
  );
}
