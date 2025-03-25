import type { NextPage } from "next";

import InstagramHeader from "../../components/custom/InstagramHeader";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import RibbonCard from "../../components/custom/RibbonCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";


const nodalOfficer = {
  name: "Anuroop P",
  image: "",
  id: "",
  email: "",
  designation: "Lecturer",
  department: "Electrical Engineering",
  address: "",
  phone: "+919400472882",
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    whatsapp: "+919400472882",
  },
};

const studentLead = {
  name: "Abhishek",
  image: "",
  id: "",
  email: "",
  designation: "Lecturer",
  department: "Electrical Engineering",
  address: "",
  phone: "+919400472882",
  social: {
    facebook: "",
    twitter: "",
    instagram: "",
    whatsapp: "+919400472882",
  },
};

const CustomPage: NextPage = () => {
  return (
    <Page title="Innovation & Entrepreneurship Development Club (IEDC)">
      <Container>
        <PageTitle>
          Innovation & Entrepreneurship Development Club (IEDC)
        </PageTitle>
        <Content>
          <Content.Left>
            <div className="mr-2">
              <LargeUserCardWithDetails
                subTitle={"Nodal Officer, IEDC"}
                {...nodalOfficer}
              />
            </div>
          </Content.Left>
          <Content.Right>
            <RibbonCard color="indigo">
              <h2 className="mb-2 text-2xl font-bold text-gray-100">Vision</h2>
              <p className="text-gray-100">
                To create an innovation culture among Innovators by introducing
                them the State-of-the-art technologies and positioning the
                Institution as a Learning and Innovation Platform by delivering
                technically competent and skilled Entrepreneurs.
              </p>
              <h2 className="my-2 text-2xl font-bold text-gray-100">Mission</h2>
              <p className="text-gray-100">
                To create IEDC as an Innovation Platform and to create future
                founders by promoting Innovation, Technology and Business
                Learning among student community
              </p>
            </RibbonCard>
          </Content.Right>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>About IEDC</PageTitle>
            <div className="my-3">
              <p>
                Innovation and startups are the talks of the town now. Fresh and
                innovative ideas have started flowing from the campuses all over
                India, ever since the governments have started supporting
                innovative ventures. The Innovation and Entrepreneurship
                Development Centre (IEDC) is being promoted in educational
                institutions to develop institutional mechanisms to create
                entrepreneurial culture in academic institutions and to foster
                techno-entrepreneurship for the generation of wealth and
                employment. The IEDC of GPC Perinthalmanna is an organisation
                that aims to promote the institutional vision of transforming
                youngsters into technological entrepreneurs and innovative
                leaders. The initiative is to address the rising trend of
                corporate job culture and establish a platform to pursue ideas
                and businesses at an early stage. We at IEDC host various
                workshops, speaker sessions, competitions to develop skill sets
                and provide essential resources to take up entrepreneurship as a
                career.
              </p>
            </div>
          </Content.FullWidth>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>IEDC on Instagram </PageTitle>
            <div className="mx-2 border-2 border-pink-700 rounded-lg">
              <InstagramHeader
                description={
                  <>
                    <span>
                      INNOVATION AND ENTREPRENEURSHIP DEVELOPMENT CENTRE
                    </span>
                    <p>Government Polytechnic College, Perinthalmanna</p>
                    <p>ɪᴅᴇᴀᴛᴇㅤ</p>
                    <p>ㅤㅤɪɴɴᴏᴠᴀᴛᴇㅤ</p>
                    <p>ㅤㅤㅤㅤɪɴɪᴛɪᴀᴛᴇ</p>
                  </>
                }
                followers={159}
                following={28}
                posts={22}
                title="IEDC GPC PMNA"
                image="https://i.ibb.co/dKm8tsP/bc11ef16fd88.jpg"
                name="iedc_gpc.pmna"
                link="https://www.instagram.com/iedc_gpc_pmna/"
              />
            </div>
          </Content.FullWidth>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>Previous Events</PageTitle>
            <div className="my-3">
              <EventCarousel id="iedc" />
            </div>
          </Content.FullWidth>
        </Content>
        <Content>
          <Content.Left>
            <PageTitle>Team</PageTitle>
            <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
              <UserProfileCard {...studentLead} designation="Student Lead" />
            </div>
          </Content.Left>
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;