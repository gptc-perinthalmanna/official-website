import { NextPage } from "next";
import { useEffect, useState } from "react";
import useSWR from "swr";

import InstagramHeader from "../../components/custom/InstagramHeader";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import RibbonCard from "../../components/custom/RibbonCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";
import { fetcher } from "../../server/calls";
import { usersDb, UserType } from "../../server/db";
import { getOther } from "../../server/other";
import { getUser } from "../../server/users";

interface PageType {
  programOfficer: UserType;
  misssion: string;
  about: string;
  programOfficer_id: string;
  volenteerSecreteries_ids: string[];
  vss: UserType[];
}

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => {
  return (
    <Page title="National Service Scheme (NSS)">
      <Container>
        <PageTitle>National Service Scheme</PageTitle>
        <Content>
          <Content.Left>
            <div className="mr-2">
              <LargeUserCardWithDetails
                subTitle={"Program Officer, NSS"}
                {...page.programOfficer}
              />
            </div>
          </Content.Left>
          <Content.Right>
            <RibbonCard color="red">
              <h2 className="mb-2 text-2xl font-bold text-gray-100">Mission</h2>
              <p className="text-gray-100">{page.misssion}</p>
              <h2 className="mb-2 text-2xl font-bold text-gray-100">Motto</h2>
              <p className="text-gray-100">Not me but You!</p>
            </RibbonCard>
          </Content.Right>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>About NSS</PageTitle>
            <div className="my-3">
              <p>{page.about}</p>
            </div>
          </Content.FullWidth>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>NSS on Instagram </PageTitle>
            <div className="mx-2 border-2 border-pink-700 rounded-lg">
              <InstagramHeader
                description={
                  <>
                    <span>NATIONAL SERVICE SCHEME</span>
                    <p>G P T C P M N A</p>
                    <p>UNIT NO:132</p>
                    <p>NOT ME BUT YOU</p>
                    <p>
                      Volunteers do not necessarily have the time;they just have
                      the heart🍃
                    </p>
                    <p className="font-semibold text-blue-800">
                      instagram.com/nss_gpc_pmna?igshid=1xdrvyag0w0eo
                    </p>
                  </>
                }
                followers={311}
                following={21}
                posts={90}
                title="NSS GPC Pmna"
                image="https://i.ibb.co/gjQJmx9/7413ba8406f5.png"
                name="nss_gpc_pmna"
                link="https://www.instagram.com/accounts/login/?next=%2Fnss_gpc_pmna%2F&source=follow"
              />
            </div>
          </Content.FullWidth>
        </Content>
        <Content>
          <Content.FullWidth>
            <PageTitle>Previous Events</PageTitle>
            <div className="my-3">
              <EventCarousel id="nss" />
            </div>
          </Content.FullWidth>
        </Content>
        <Content>
          <Content.Left>
            <PageTitle>Volunteer secretaries</PageTitle>
            <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
              {page.vss.map((vs) => (
                <UserProfileCard {...vs} key={vs.name} />
              ))}
            </div>
          </Content.Left>
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;

export async function getStaticProps() {
  let page = (await getOther("page-national-service-scheme")) as PageType;
  page.programOfficer = (await getUser(page.programOfficer_id)) as UserType;
  let unresolvedpromises: any;
  let staffs: UserType[] = [];
  unresolvedpromises = page.volenteerSecreteries_ids?.map(async (element) => {
    const staff = await getUser(element);
    if (staff) {
      staffs.push(staff);
    }
    return staff;
  });
  if (unresolvedpromises) await Promise.all(unresolvedpromises);
  return {
    props: {
      page: { ...page, vss: staffs },
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600000, // In seconds
  };
}
