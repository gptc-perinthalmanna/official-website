import React, { useState, useEffect } from "react";
import useSWR from "swr";
import { fetcher } from "../server/calls";
import { NotificationType } from "../server/db";


function NewsTicker() {
  const { data, error } = useSWR<NotificationType[]>(
    process.env.NEXT_PUBLIC_WEB_ADMIN_URL + "/notifications/all",
    fetcher
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (data) setIndex((index) => (index + 1) % data.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data]);

  if (error) return <Wrapper title="Failed to load..." />;

  if (!data) return <Wrapper title="Loading..." />;

  const date = new Date(data[index]?.createdAt);

  return (
    <Wrapper
      title={data[index]?.title}
      date={date && date.toISOString().substring(0, 10)}
      isNew={date.getTime() > Date.now() - 1000 * 60 * 60 * 24} 
    />
  );
}

export default NewsTicker;

function Wrapper({
  title,
  date,
  isNew,
}: {
  title: string;
  date?: string;
  isNew?: boolean;
}) {
  return (
    <div className="flex items-center mx-auto mt-3 bg-gray-200 lg:container">
      <div className="h-full px-3 py-3 text-sm font-bold uppercase bg-blue-800 text-gray-50">
        LATEST NEWS
      </div>
      <p className="h-full px-3 text-xs bg-gray-200">{title}</p>
      {date && (
        <div className="flex-shrink-0 mx-1 text-xs font-bold text-gray-500">
          {date}
        </div>
      )}
      {isNew && (
        <div className="mr-2 text-xs font-semibold text-red-600">New!</div>
      )}
    </div>
  );
}
