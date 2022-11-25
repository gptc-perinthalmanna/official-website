import { NextPage } from "next";

import InstagramHeader from "../../components/custom/InstagramHeader";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import RibbonCard from "../../components/custom/RibbonCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";
import { UserType } from "../../server/db";
import { getOther } from "../../server/other";
import { getUser } from "../../server/users";

interface PageType {
  nodalOfficer: UserType;
  mission: string;
  vision: string;
  about: string;
  nodalOfficer_Id: string;
  studentLead_id?: string;
  studentLead?: UserType;
}

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => {
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
                {...page.nodalOfficer}
              />
            </div>
          </Content.Left>
          <Content.Right>
            <RibbonCard color="indigo">
              <h2 className="mb-2 text-2xl font-bold text-gray-100">Vision</h2>
              <p className="text-gray-100">{page.vision}</p>
              <h2 className="my-2 text-2xl font-bold text-gray-100">Mission</h2>
              <p className="text-gray-100">{page.mission}</p>
            </RibbonCard>
          </Content.Right>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>About IEDC</PageTitle>
            <div className="my-3">
              <p>{page.about}</p>
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
                followers={47}
                following={10}
                posts={4}
                title="IEDC GPC PMNA"
                image="https://i.ibb.co/dKm8tsP/bc11ef16fd88.jpg"
                name="iedc_gpc.pmna"
                link="https://www.instagram.com/accounts/login/?next=%2Fiedc_gpc.pmna%2F&source=follow"
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
              {page.studentLead && (
                <UserProfileCard
                  {...page.studentLead}
                  designation="Student Lead"
                />
              )}
            </div>
          </Content.Left>
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;

export async function getStaticProps() {
  let page = (await getOther("page-iedc")) as PageType;
  console.log(page);
  page.nodalOfficer = (await getUser(page.nodalOfficer_Id)) as UserType;
  if (page.studentLead_id)
    page.studentLead = (await getUser(page.studentLead_id)) as UserType;
  return {
    props: {
      page: { ...page },
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600000, // In seconds
  };
}
