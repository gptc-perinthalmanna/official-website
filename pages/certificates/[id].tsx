import { GetStaticProps, NextPage } from "next";
import Container from "../../components/layout/Container";
import Page from "../../components/layout/Page";
import logoImage from "../../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "next/head";
import { TbFileDownload } from "react-icons/tb";
import { useRef, useState } from "react";

interface StaffType {
  name: string;
  designation: string;
  social?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

interface PageType {
  key: string;
  title: string;
  about: string;
  cover: string;
  staffs?: StaffType[];
  photos?: PhotoType[];
}

interface PhotoType {
  src: string;
  alt: string;
}

const _certificate = {
  id: "3aa9d27c-d46a-4fac-9780-745a1265f19e",
  referance: "0003",
  title: "Orientation programme from of IEDC",
  instructors: [
    {
      name: "Sanjay V",
      designation: "Lecturer in Electrical and Electronics Engineering",
      institution: "GPTC Perinthalmanna",
    },
    {
      name: "Danishmon",
      designation: "Lecturer in Electrical and Electronics Engineering",
      institution: "GPTC Perinthalmanna",
    },
  ],
  holder: {
    name: "Amjed Ali K",
    avatar: "https://img-c.udemycdn.com/user/100x100/48241786_cc5a.jpg",
    designation: "Tradesman in Electronics",
  },
  date: "2 Dec 2021",
  duration: "1 day",
};

const CustomPage: NextPage<{ page: PageType }> = () => {
  const router = useRouter();
  const certElm = useRef(null);
  const { id } = router.query;
  const certificate = _certificate;

  const handleDownloadCert = async () => {
    const elm = certElm.current;
    if (!elm) return;
    const html2canvas = (await import("html2canvas")).default;

    const canvas = await html2canvas(elm, {
      windowWidth: 1920,
      windowHeight: 1080,
    });
    const data = canvas.toDataURL("image/jpg");
    const link = document.createElement("a");

    if (typeof link.download === "string") {
      link.href = data;
      link.download = "certificate.jpg";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      window.open(data);
    }
  };

  return (
    <div title={"Certificate"}>
      <Head>
        <title>{`Certificate of ${certificate.holder.name} - ${certificate.title}`}</title>
        {/* <meta name="description" content={desc} /> */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <div className="flex lg:flex-row flex-col my-5 print:m-0 print:w-[1024px]">
          <div
            id="certificate-container"
            className="grow select-none overflow-y-auto "
          >
            <div ref={certElm} className="border p-3 min-w-[1024px]">
              <div className="bg-gradient-to-br from-slate-100  to-indigo-200/20 aspect-video p-8 flex flex-col">
                <div id="header" className="flex items-center justify-between">
                  <div id="logos" className="flex gap-4">
                    <div id="poly-logo" className="text-center">
                      <Image
                        className="w-20 h-20 mb-0 max-w-lg"
                        src={logoImage}
                        placeholder="blur"
                        width={100}
                        height={100}
                        alt="Gptc Pmna Logo"
                      />
                      <p className="text-center mt-0 leading-3 font-bold">
                        GPC Perinthalmanna
                      </p>
                    </div>
                  </div>
                  <div
                    id="certificate-details"
                    className="text-xs text-gray-400 text-right"
                  >
                    <p>Certificate no: {certificate.id}</p>
                    <p>
                      <p>
                        Certificate url: gptcperinthalmanna.in/certificates/
                        {certificate.id}
                      </p>
                      Referance Number: {certificate.referance}
                    </p>
                  </div>
                </div>
                <div id="content" className="grow flex flex-col justify-center">
                  <div className="">
                    <p className="text-gray-500 text-lg font-bold">
                      CERTIFICATE OF COMPLETION
                    </p>
                    <h3 className="text-4xl font-bold ">{certificate.title}</h3>
                  </div>
                  <div className="my-5">
                    <p className="text-lg">Instructors</p>
                    <div className="flex gap-4">
                      {certificate.instructors.map((e) => (
                        <div key={e.name}>
                          <p className="text-xl font-bold">{e.name}</p>
                          <p className="text-sm text-gray-500">
                            {e.designation}
                          </p>
                          <p className="text-sm text-gray-500">
                            {e.institution}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div id="footer">
                  <div>
                    <div className="my-4">
                      <p className="text-5xl mb-2 font-bold text-rose-900">
                        {certificate.holder.name}
                      </p>
                      <span className="text-sm pt-2">
                        ({certificate.holder.designation})
                      </span>
                    </div>
                    <p className="font-bold">
                      <span className="font-medium mr-3">Date: </span>{" "}
                      {certificate.date}
                    </p>
                    <p className="font-bold">
                      <span className="font-medium mr-3">Duration: </span>{" "}
                      {certificate.duration}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            id="details-container"
            className="lg:w-[300px] w-full p-4 print:hidden"
          >
            <h3 className="font-bold text-lg">Certificate Recipient</h3>
            <div className="flex gap-2 m-4">
              <img
                src={certificate.holder.avatar}
                alt=""
                className="rounded-full w-16"
              />
              <div>
                <p className="font-bold">{certificate.holder.name}</p>
                <p className="text-sm text-gray-500">
                  {certificate.holder.designation}
                </p>
              </div>
            </div>
            <button
              onClick={handleDownloadCert}
              className="w-full mt-6 flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white font-semibold p-3"
            >
              <TbFileDownload className="w-8 h-8 inline-block" />{" "}
              <span>Download</span>
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomPage;
