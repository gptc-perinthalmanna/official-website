import { NextPage } from "next";
import { BiHistory, BiMapPin } from "react-icons/bi";
import { BsFacebook, BsLinkedin, BsTelegram } from "react-icons/bs";
import { FaAward, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { GiTreasureMap } from "react-icons/gi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { RiBuilding2Line } from "react-icons/ri";
import { SiGofundme } from "react-icons/si";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";
import logoImage from "../../public/logo.png";
import Image from "next/image";
import ContactForm from "../../components/custom/ContactForm";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";

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
    <div className="container flex flex-wrap mx-auto mt-4">
      <div className="w-full mb-2 lg:w-2/3 lg:mb-0 lg:px-3">
        <LargeUserCardWithDetails
          avatar={
            "http://uoce.chimpgroup.com/home-v4/wp-content/uploads/2015/07/UOCE-Team-Members-12.jpg"
          }
          fullName={"Deepak"}
          designation={"Placement Officer"}
          subtitle={"Demonstrator, Mechanical Department"}
          email={"placement@gptcperinthalmanna.in"}
          phone={"+91 93924 92492"}
          address={"23 Stronke, Ndoeoidk ldasfk, London, N13 OLU"}
          socialLinks={{
            facebook: "https://www.facebook.com/gptcperinthalmanna/",
            linkedin: "https://www.linkedin.com/company/gptc-perinthalmanna/",
            telegram: "https://t.me/gptcperinthalmanna",
            whatsapp: "https://wa.me/919392492492",
            instagram: "https://www.instagram.com/gptcperinthalmanna/",
          }}
        />

      </div>
      <div className="h-auto lg:w-1/3">
        <div className="flex h-full border-2 border-t-0 border-b-0 border-l-8 border-r-0 border-pink-600 rounded-lg bg-gradient-to-r from-pink-700 to-pink-600">
          <div className="p-3">
            <h2 className="mb-2 text-2xl font-bold text-gray-100">Mission</h2>
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
    <div className="px-4 py-5 mx-auto mt-5 bg-gradient-to-r from-purple-800 to-blue-600">
      <div className="container py-16 mx-auto">
        <h1 className="mt-3 text-center mb-9">
          <span className="text-4xl font-bold text-gray-100">Why us?</span>
          <p className="text-center text-white">
            Here are a few reasons that we are the top choosen college for
            several campus recruitments
          </p>
        </h1>

        <div className="flex flex-wrap justify-center">
          {_features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="flex flex-col items-center px-3 my-4 w-80"
              >
                <Icon size={90} color="#fff" />
                <h2 className="pt-2 text-xl font-bold text-gray-100">
                  {feature.title}
                </h2>
                <p className="text-sm text-gray-200">{feature.des}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
    <div className="px-4 py-5 mx-auto bg-gradient-to-r from-pink-600 to-pink-700">
      <div className="container mx-auto text-center text-white py-7">
        <Image src={logoImage} className="filter grayscale invert" alt="Logo" />
        <h2 className="pb-5 text-3xl font-bold ">
          Career Guidance and Placement Cell
        </h2>
        <p className="p-3 text-xl font-thin leading-9">
          Career guidance and placement cell has been assisting the students in
          paving a way to their careers. The cell conducts training programmes
          to prepare the students to face the recruitment process and to meet
          the needs of the industry. It also provides complete support to
          visiting companies at every stage of placement process.{" "}
          <strong>
            {" "}
            Arrangements for pre placement talks, written tests, interviews and
            group discussions are made as per the requirement of the visiting
            companies.
          </strong>{" "}
          It bridges the gap between the industry and the institution. We
          Receives and forwards the feedback pertinent to curriculum improvement
          from the visiting companies to the faculty, to ensure that the
          curriculum follows the latest industrial trends. We are confident that
          these young men and women would be an asset to your organization
          through their technical and managerial capabilities and their talent
          for innovation. We, works towards continuing education for the college
          employees over the years, the placement cell has maintained symbiotic,
          vibrant and purposeful relationship with Industries and as a result,
          has built up an impressive placement record both in terms of
          percentage of registered students placed, as well as the number of
          companies visiting the campus.
        </p>
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
