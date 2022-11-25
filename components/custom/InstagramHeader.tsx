import Image from "next/image";
import React from "react";

function InstagramHeader({
  image,
  name,
  title,
  followers,
  following,
  posts,
  link,
  description,
}: {
  image: string;
  name: string;
  followers: number;
  following: number;
  posts: number;
  title: string;
  description: React.ReactNode;
  link: string;
}) {
  return (
    <main className="bg-gray-100 bg-opacity-25">
      <div className="mb-8 lg:w-8/12 lg:mx-auto">
        <header className="flex flex-wrap items-center p-4 md:py-8">
          <div className=" md:w-3/12 md:ml-16">
            {/* profile image */}
            <div className="flex">
              <div className="flex items-center justify-center p-1 mx-auto border-2 border-pink-600 rounded-full ">
                <div className="relative overflow-hidden w-20 h-20 rounded-full md:w-40 md:h-40">
                  <Image
                    className=" md:w-40 md:h-40"
                    src={image}
                    layout="fill"
                    objectFit="cover"
                    alt="profile"
                    sizes="100%"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* profile meta */}
          <div className="w-8/12 ml-4 md:w-7/12">
            <div className="mb-4 md:flex md:flex-wrap md:items-center">
              <h2 className="inline-block mb-2 text-3xl font-light md:mr-2 sm:mb-0">
                {name}
              </h2>
              {/* follow button */}
              <a
                href={link}
                className="block px-2 py-1 text-sm font-semibold text-center text-white bg-blue-500 rounded sm:inline-block"
              >
                Follow
              </a>
            </div>
            {/* post, following, followers list for medium screens */}
            <ul className="hidden mb-4 space-x-8 md:flex">
              <li>
                <span className="pr-1 font-semibold">{posts}</span>
                posts
              </li>
              <li>
                <span className="pr-1 font-semibold">{followers}</span>
                followers
              </li>
              <li>
                <span className="pr-1 font-semibold">{following}</span>
                following
              </li>
            </ul>
            {/* user meta form medium screens */}
            <div className="hidden md:block">
              <h1 className="font-semibold">{title}</h1>
              {description}
            </div>
          </div>
          {/* user meta form small screens */}
          <div className="my-2 text-sm md:hidden">
            <h1 className="font-semibold">{title}</h1>
            <span>G P T C P M N A</span>
            {/* <p>UNIT NO:132</p> */}
          </div>
        </header>
        {/* posts */}
      </div>
    </main>
  );
}

export default InstagramHeader;
