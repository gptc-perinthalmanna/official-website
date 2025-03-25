import Head from "next/head";
import type React from "react";
import Footer from "./Footer";
import LogoBanner from "./LogoBanner";
import NavBar from "./NavBar";
import TopBanner from "./TopBanner";

const _desc =
  "Government Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala. Academically and otherwise its position in the state is unchallenged. Activities focusing on the result enhancement and the overall development of the students to make them excel in their respective fields are remarkable.";
const _title = "Govt Polytechnic College Perinthalmanna";

function Page({
  children,
  title = _title,
  desc = _desc,
}: {
  children: React.ReactNode;
  title?: string;
  desc?: string;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>{title}</title>
        <meta name="description" content={desc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopBanner />
      <LogoBanner />
      <NavBar />
      <div className="grow">{children}</div>
      <Footer />
    </div>
  );
}

export default Page;
