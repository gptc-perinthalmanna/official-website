import { NextPage } from "next";
import { BiHistory, BiMapPin } from "react-icons/bi";
import { FaAward, FaUserGraduate, FaUserTie } from "react-icons/fa";
import { GiTreasureMap } from "react-icons/gi";
import { RiBuilding2Line } from "react-icons/ri";
import { SiGofundme } from "react-icons/si";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";
import logoImage from "../../public/logo.png";
import Image from "next/image";
import ContactForm from "../../components/custom/ContactForm";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import RibbonCard from "../../components/custom/RibbonCard";
import { getOther } from "../../server/other";
import { UserType } from "../../server/db";
import { getUser } from "../../server/users";
import Content from "../../components/layout/Content";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";

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

interface PageType {
  placementOfficer: UserType;
  placementOfficer_id: string;
  misssion: string;
  description: string;
}

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => (
  <Page title="Placement Officers Desk in GPC Perinthalmanna">
    <div className="container mx-auto">
      <H1>Placement Officers Desk</H1>
    </div>
    <div className="container flex flex-wrap mx-auto mt-4">
      <div className="w-full mb-2 lg:w-2/3 lg:mb-0 lg:px-3">
        <LargeUserCardWithDetails
          {...page.placementOfficer}
          socialLinks={undefined}
          email={`cgpcpmna@gmail.com,  ${page.placementOfficer.email}`}
          subTitle={"Placement Officer"}
        />
      </div>
      <div className="h-auto lg:w-1/3">
        <RibbonCard>
          <h2 className="mb-2 text-2xl font-bold text-gray-100">Mission</h2>
          <p className="text-gray-100">{page.misssion}</p>
        </RibbonCard>
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
        <div className="filter grayscale invert">
          <Image
            src={logoImage}
            className="filter grayscale invert"
            alt="Logo"
            placeholder="blur"
          />
        </div>
        <h2 className="pb-5 text-3xl font-bold ">
          Career Guidance and Placement Cell
        </h2>
        <p className="p-3 text-xl font-medium leading-9">{page.description}</p>
      </div>
    </div>

    <div className="container mx-auto">
      <div className="max-w-xl mx-auto">
        <ContactForm />
      </div>
    </div>
    <div className="container mx-auto">
      <Content>
        <Content.FullWidth>
          <PageTitle>Previous Events</PageTitle>
          <div className="my-3">
            <EventCarousel id="placement-cell" />
          </div>
        </Content.FullWidth>
      </Content>
    </div>
  </Page>
);

export default CustomPage;

export async function getStaticProps() {
  let page = (await getOther("page-placement-officer-desk")) as PageType;
  page.placementOfficer = (await getUser(page.placementOfficer_id)) as UserType;
  return {
    props: {
      page,
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600000, // In seconds
  };
}
