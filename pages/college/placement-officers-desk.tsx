import { NextPage } from "next";
import { BiHistory, BiMapPin } from "react-icons/bi";
import {
  BsFacebook,
  BsLinkedin,
  BsTelegram,
} from "react-icons/bs";
import { FaAward, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { GiTreasureMap } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { SiGofundme } from "react-icons/si";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";
import logoImage from '../../public/logo.png'
import Image from "next/image";
import ContactForm from "../../components/custom/ContactForm";

const _features = [
  {
    title: "Infrastructure",
    icon: RiBuilding2Line,
    des: "State of art infrastructure is one of our major features",
  },
  {
    title: "Qualified Faculties",
    icon: FaUserTie,
    des: "All our faculties are well trained and have years of experience.",
  },
  {
    title: "Intership rich",
    icon: GiTreasureMap,
    des: "Our students frequently participate in several interships with special guidances.",
  },
  {
    title: "Best in Malabar",
    icon: BiMapPin,
    des: "We are the one of best polytechnic college in malabar. Our faculties and staffs thrives to stay in top always",
  },
  {
    title: "Clubs and Activites",
    icon: SiGofundme,
    des: "Most percentage of our students are active in multiple club activites where they gain leadership and inter personal skills",
  },
  {
    title: "NSS Award Winner",
    icon: FaAward,
    des: "We won the National Service Scheme National award serveral times.",
  },
  {
    title: "Better History",
    icon: BiHistory,
    des: "Students from our college is working in serveral companies in india and abroad.",
  },
  {
    title: "Meritorious Students",
    icon: FaUserGraduate,
    des: "Our college is first option to major students in the district",
  },
];

const CustomPage: NextPage = () => (
  <Page title="Placement Officers Desk in GPC Perinthalmanna">
      <div className="container mx-auto">
    <H1>Placement Officers Desk</H1>
    </div>
    <div className="container mx-auto flex flex-wrap mt-4">
      <div className="lg:w-2/3 w-full mb-2 lg:mb-0 lg:px-3">
        <div className="flex bg-gray-100 rounded-lg border-2">
          <div className="p-3 max-w-full">
            <Image
              className="rounded-lg"
              src="http://uoce.chimpgroup.com/home-v4/wp-content/uploads/2015/07/UOCE-Team-Members-12.jpg"
              alt="Placement Officer in Charge"
              height={250}
              width={250}
            />
          </div>
          <div className="p-3">
            <h2 className="text-3xl font-light">Vivek C</h2>
            <h3 className="text-lg font-bold uppercase text-gray-800 ">
              Placement Officer
            </h3>
            <p className="text-xs mb-3 text-gray-700">
              Demonstrator, Mechanical Department
            </p>
            <div className="text-gray-500 mb-1 text-sm flex">
              Email:
              <span className="ml-2 text-gray-600">
                placement@gptcperinthalmanna.in
              </span>
            </div>
            <div className="text-gray-500 mb-1 text-sm flex">
              Phone: <span className="ml-2 text-gray-600">+91 93924 92492</span>
            </div>
            <div className="text-gray-500 mb-1 text-sm flex">
              Address:
              <span className="ml-2 text-gray-600">
                23 Stronke, Ndoeoidk ldasfk, London, N13 OLU
              </span>
            </div>
            <div className="flex mt-3">
              <BsFacebook className="mr-2" size={25} color="#1778F2" />
              <BsLinkedin className="mr-2" size={25} color="#006192" />
              <BsTelegram className="mr-2" size={25} color="#0088CC" />
              <IoLogoWhatsapp className="mr-2" size={25} color="#4FCE5D" />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 h-auto">
        <div className="flex border-l-8 border-pink-600 border-t-0 border-r-0 border-b-0 h-full bg-gradient-to-r from-pink-700 to-pink-600 rounded-lg border-2">
          <div className="p-3">
            <h2 className="text-2xl mb-2 font-bold text-gray-100">Mission</h2>
            <p className="text-gray-100">
              Develop the personality of every student by imparting training in
              soft skills, communication skills, group discussion, interview
              techniques, leadership qualities and team work. Empower the
              students to face life confidently and to enable every one of them
              to leave the campus with a coveted job in reputed establishment.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto mt-5 py-5 px-4 bg-gradient-to-r from-purple-800 to-blue-600">
      <div className="container mx-auto py-16">
        <h1 className="text-center mb-9 mt-3">
          <span className="text-4xl font-bold text-gray-100">Why us?</span>
          <p className="text-white text-center">
            Here are a few reasons that we are the top choosen college for
            several campus recruitments
          </p>
        </h1>

        <div className="flex justify-center flex-wrap">
          {_features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col w-80 my-4 px-3 items-center"
              >
                <Icon size={90} color="#fff" />
                <h2 className="text-gray-100 pt-2 font-bold text-xl">
                  {feature.title}
                </h2>
                <p className="text-sm text-gray-200">{feature.des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="mx-auto py-5 px-4 bg-gradient-to-r from-pink-600 to-pink-700">
        <div className="container text-center py-7 mx-auto text-white">
            <Image src={logoImage} className="filter grayscale invert" alt="Logo" />
            <h2 className="text-3xl font-bold pb-5 ">Career Guidance and Placement Cell</h2>
        <p className="font-thin leading-9 text-xl p-3">
Career guidance and placement cell has been assisting the students in paving a way to their careers. The cell conducts training programmes to prepare the students to face the recruitment process and to meet the needs of the industry. It also provides complete support to visiting companies at every stage of placement process. <strong> Arrangements for pre placement talks, written tests, interviews and group discussions are made as per the requirement of the visiting companies.</strong> It bridges the gap between the industry and the institution.

We Receives and forwards the feedback pertinent to curriculum improvement from the visiting companies to the faculty, to ensure that the curriculum follows the latest industrial trends. We are confident that these young men and women would be an asset to your organization through their technical and managerial capabilities and their talent for innovation.

We, works towards continuing education for the college employees over the years, the placement cell has maintained symbiotic, vibrant and purposeful relationship with Industries and as a result, has built up an impressive placement record both in terms of percentage of registered students placed, as well as the number of companies visiting the campus.</p>
   
        </div>
         </div>

         <div className="container mx-auto">
             <div className="max-w-xl mx-auto">
             <ContactForm />
             </div>
         </div>
  </Page>
);

export default CustomPage;
