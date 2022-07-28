import Image from "next/image";
import Link from "next/link";
import React from "react";

export function Footer() {
  return (
    <footer className="py-3 bg-blue-900">
      <div className="container mx-auto">
        <div className="flex flex-wrap pt-8 pb-6">
          <Box title="Contact Details">
            <div>
              <div className="flex text-white">
                <h4 className="font-bold">Address</h4>
              </div>

              <p className="text-sm ">
                Near Railway Gate, Angadipuram. Malappuram Dist - 679321,
                Kerala, India
              </p>
              <div className="mt-3">
                <h4 className="font-bold">Contact</h4>
                <p className="text-sm">Office: 04933227253</p>
                <p className="text-sm">Email: polypmna@gmail.com</p>
                <p className="text-sm">Principal: 98439849384</p>
                <p className="text-sm" />
              </div>
            </div>
          </Box>
          <Box title="Important Links">
            <div>
              <ul>
                <li className={liClasses}>
                  <a
                    href="https://www.aicte-india.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">AICTE</span> - All india council
                    for Technical Education
                  </a>
                </li>
                <li className={liClasses}>
                  <a
                    href="https://www.sbte.kerala.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">SBTE</span> - State Board of
                    Technical Education
                  </a>
                </li>
                <li className={liClasses}>
                  <a
                    href="https://www.aicte-india.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">SITTR</span> - State Institute
                    of Technical Teachers Training &amp; Research
                  </a>
                </li>
                <li className={liClasses}>
                  <a
                    href="https://www.sbte.kerala.gov.in/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">DTE Kerala</span> - Department
                    of Technical Education Kerala
                  </a>
                </li>
                <li className={liClasses}>
                  <a
                    href="https://polyadmission.org/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">Poly Admision</span> - Single
                    window Polytechnic admission portal
                  </a>
                </li>
                <li className={liClasses}>
                  <a
                    href="https://ddfs.in/ddfs/login.do"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="font-bold">DDFS</span> - Digital Document
                    Filing System
                  </a>
                </li>
              </ul>
            </div>
          </Box>
          <Box title="Departments/Sections">
            <div>
              <ul>
                <li className={liClasses}>
                  <Link href={"/departments/electronics-engineering"}>
                    <a>
                      Department of{" "}
                      <span className="font-bold">Electroncis</span> Engineering
                    </a>
                  </Link>
                </li>
                <li className={liClasses}>
                  <Link href={"/departments/mechanical-engineering"}>
                    <a>
                      Department of{" "}
                      <span className="font-bold">Mechanical</span> Engineering{" "}
                    </a>
                  </Link>
                </li>
                <li className={liClasses}>
                  <Link
                    href={"/departments/electrical-and-electronics-engineering"}
                  >
                    <a>
                      Department of{" "}
                      <span className="font-bold">
                        Electrical and Electronics
                      </span>{" "}
                      Engineering{" "}
                    </a>
                  </Link>
                </li>
                <li className={liClasses}>
                  <Link href={"/departments/civil-engineering"}>
                    <a>
                      Department of <span className="font-bold">Civil</span>{" "}
                      Engineering{" "}
                    </a>
                  </Link>
                </li>
                <li className={liClasses}>
                  <Link href={"/departments/electronics-engineering"}>
                    <a>
                      <span className="font-bold">General</span> Department{" "}
                    </a>
                  </Link>
                </li>
                <li className={liClasses}>
                  <Link href={"/departments/electronics-engineering"}>
                    <a>
                      <span className="font-bold">General</span> Workshop{" "}
                    </a>
                  </Link>
                </li>
                <li className={liClasses}>
                  <Link href={"/departments/electronics-engineering"}>
                    <a>
                      <span className="font-bold">Office</span> Section{" "}
                    </a>
                  </Link>
                </li>
              </ul>
            </div>
          </Box>
          <Box title="Magazine / Publications">
            <div className="relative w-full">
              <Image
                src="https://i.ibb.co/hLW4Wr1/7b6bfee1923979593c6b19a5c71b2f18.jpg"
                alt="Magazine Image"
                width={200}
                height={260}
              />
            </div>
          </Box>
        </div>
      </div>
      <div className="container flex flex-wrap items-center justify-between px-3 mx-auto text-sm bg-blue">
        <div className="w-full text-white md:w-1/2">
          Copyright © 2021 Government Polytechnic College Perinthalmanna.
        </div>
        <div className="text-white">
          <div>
            Website Designed and Developed by{" "}
            <span className="font-bold">Amjed Ali K.</span>
          </div>
          <div className="text-xs cursor-pointer hover:text-green-400">
            Click here Know more about Technologies used.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function Box({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <div className="w-full px-2 pb-10 text-white lg:w-1/4 md:w-2/4">
      <h3 className="mb-3 text-xl font-bold">{title}</h3>
      {children}
    </div>
  );
}

const liClasses = "text-sm cursor-pointer hover:text-gray-300";
