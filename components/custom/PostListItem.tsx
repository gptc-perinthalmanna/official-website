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
    <div className="max-w-4xl cursor-pointer px-10 my-4 py-6 border-2 bg-white rounded-lg shadow-md">
      <div className="flex justify-between items-center">
        <span className="font-light text-gray-600">{date}</span>
        {tag && (
          <a
            className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
            href={link}
          >
            {tag}
          </a>
        )}
      </div>
      <div className="mt-2">
        <a
          className="text-2xl text-gray-700 font-bold hover:text-gray-600"
          href={link}
        >
          {title}
        </a>
        {description && <p className="mt-2 text-gray-600">{description}</p>}
      </div>
      <div className="flex justify-between items-center mt-4">
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
              <h1 className="text-gray-700 text-sm font-bold">{username}</h1>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export default PostListItem;
