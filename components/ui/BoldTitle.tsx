/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";

const _color: {
  [key: string]: string;
} = {
  gray: "from-gray-800 to-gray-500",
  red: "from-red-500 to-red-500",
  blue: "from-blue-500 to-blue-500",
  yellow: "from-yellow-500 to-yellow-500",
  green: "from-green-500 to-green-500",
  pink: "from-pink-500 to-pink-500",
  purple: "from-purple-500 to-purple-500",
  orange: "from-orange-500 to-orange-500",
  lime: "from-lime-500 to-lime-500",
  teal: "from-teal-500 to-teal-500",
  indigo: "from-indigo-500 to-indigo-500",
  violet: "from-violet-500 to-violet-500",
  fuchsia: "from-fuchsia-500 to-fuchsia-500",
  rose: "from-rose-500 to-rose-500",
};

function BoldTitle({
  children,
  className,
  color = "green",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  className = className ? className : "";
  className = color ? `${className} ${_color[color]}` : className;

  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <span
        className={
          "text-3xl font-bold text-transparent font-poppins bg-gradient-to-r bg-clip-text " +
          className
        }
      >
        {children}
      </span>
    </>
  );
}

export default BoldTitle;
