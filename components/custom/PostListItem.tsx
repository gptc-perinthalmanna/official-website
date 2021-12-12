import React from "react";

function PostListItem({
  date,
  title,
  description,
  link,
  username,
  tag,
}: {
  date: string;
  title: string;
  description?: string;
  link?: string;
  username?: string;
  tag?: string;
}) {
  return (
    <a href={link} target={"_blank"} rel={"noreferrer"} className="max-w-4xl px-10 py-6 my-4 bg-white border-2 rounded-lg shadow-md cursor-pointer">
      <div className="flex items-center justify-between">
        <span className="font-light text-gray-600">{date}</span>
        {tag && (
          <a
            className="px-2 py-1 font-bold text-gray-100 bg-gray-600 rounded hover:bg-gray-500"
            href={link}
          >
            {tag}
          </a>
        )}
      </div>
      <div className="mt-2">
        <a
          className="text-2xl font-bold text-gray-700 hover:text-gray-600"
          href={link}
        >
          {title}
        </a>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
      <div className="flex items-center justify-between mt-4">
        <div>
          {link && (
            <a className="text-blue-600 hover:underline" href={link}>
              View
            </a>
          )}
        </div>
        {username && (
          <div>
            <a className="flex items-center" href={link}>
              <h1 className="text-sm font-bold text-gray-700">{username}</h1>
            </a>
          </div>
        )}
      </div>
    </a>
  );
}

export default PostListItem;
