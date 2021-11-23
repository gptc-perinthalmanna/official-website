/* eslint-disable @next/next/no-page-custom-font */
import React from "react";
import Head from "next/head";
import { useColor } from "../../common/hooks";


function BoldTitle({
  children,
  className,
  color = "green",
}: {
  children: React.ReactNode;
  className?: string;
  color?: string;
}) {
  className = useColor(color, className);

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
          "lg:text-3xl md:text-2xl sm:text-xl text-lg font-bold text-transparent font-poppins bg-gradient-to-r bg-clip-text " +
          className
        }
      >
        {children}
      </span>
    </>
  );
}

export default BoldTitle;
