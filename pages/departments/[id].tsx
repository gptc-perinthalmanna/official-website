import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import FeatureCard from "../../components/custom/FeatureCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";
import { DepartmentFacilityType, UserType } from "../../server/db";
import { getDepartments } from "../../server/departments";

interface DeptPageType {
  key: string;
  title: string;
  cover: string;
  about: string;
  staffs?: UserType[];
  facilities?: DepartmentFacilityType[];
}

const CustomPage: NextPage<{ page: DeptPageType }> = ({ page }) => (
  <Page title={page.title}>
    <CoverImage source={page.cover} title={page.title} />
    <Container>
      <Content>
        <Content.Left>
          <div>
            <PageTitle>About {page.title}</PageTitle>
            <p>{page.about}</p>
          </div>
          {page.staffs && page.staffs.length > 0 && (
            <div>
              <PageTitle>Department Staff</PageTitle>
              <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
                {page.staffs.map((staff) => (
                  <UserProfileCard {...staff} key={staff.name} />
                ))}
              </div>
            </div>
          )}
          {page.facilities && page.facilities.length > 0 && (
            <div>
              <PageTitle>Department Facilities</PageTitle>
              {page.facilities.map((facility) => (
                <FeatureCard
                  key={facility.title}
                  color={facility.color}
                  image={facility.image}
                  title={facility.title}
                  description={facility.description}
                />
              ))}
            </div>
          )}
        </Content.Left>
        <Content.FullWidth>
          <PageTitle> Previous Events </PageTitle>
          <EventCarousel id={page.key} />
        </Content.FullWidth>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;

const _paths = [
  "electronics-engineering",
  "mechanical-engineering",
  "civil-engineering",
  "electrical-and-electronics-engineering",
];

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = () => {
  const paths = _paths.map((page) => ({
    params: { id: page },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // TODO: Change Falllback to 'blocking'
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{}, { [key: string]: string }> =
  async ({ params }) => {
    if (!params || !params.id) {
      return { props: { error: true } };
    }
    const key = params.id;

    const page = await getDepartments(key);

    return {
      props: {
        page: page,
      },
      // Next.js will attempt to re-generate the page:
      // - When a request comes in
      // - At most once every 10 seconds
      revalidate: 600000, // In seconds
    };
  };
