import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import useSWRImmutable from "swr/immutable";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";
import { fetcher } from "../../server/calls";
import { getCampus } from "../../server/pages";

interface StaffType {
  key: string;
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
  events?: PhotoType[];
}

interface PhotoType {
  title: string;
  subtitle: string;
  image: string;
  date: string;
}

const _paths = [
  "grievance-redressal-committee",
  "placement-cell",
  "parents-teachers-association",
  "staff-club",
  "anti-ragging-committe",
  "boomithrasena-club",
  "innovation-entrepreneurship-development-club",
  "sholar-support-programme",
  "students-union",
  "alumini",
  "internal-complaint-committee",
  "student-grievance-redressal-committee",
];

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => {
  const { data } = useSWRImmutable<PageType>(
    `/api/pages/campus/${page.key}`,
    fetcher
  );

  return (
    <Page title={page.title}>
      <CoverImage source={page.cover} title={page.title} />
      <Container>
        <PageTitle>{page.title}</PageTitle>
        <Content>
          <Content.FullWidth>
            <div>
              <p>{page.about}</p>
            </div>
            {data && data.staffs && data.staffs.length > 0 && (
              <div>
                <PageTitle>Staffs</PageTitle>
                <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
                  {data.staffs.map((staff) => (
                    <UserProfileCard {...staff} key={staff.key} />
                  ))}
                </div>
              </div>
            )}
          </Content.FullWidth>
        </Content>
        {data && data.events && data.events.length > 0 && (
          <Content>
            <Content.FullWidth>
              <PageTitle>Events</PageTitle>
              <div className="mb-3">
                <EventCarousel id={page.key} />
              </div>
            </Content.FullWidth>
          </Content>
        )}
      </Container>
    </Page>
  );
};

export default CustomPage;

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = () => {
  // Get the paths we want to pre-render based on posts
  const paths = _paths.map((page) => ({
    params: { id: page },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // TODO: Change Falllback to 'blocking'
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<
  {},
  { [key: string]: string }
> = async ({ params }) => {
  if (!params || !params.id) {
    return { props: { error: true } };
  }

  return {
    props: {
      page: await getCampus(params.id),
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    // revalidate: 600000, // In seconds
  };
};
