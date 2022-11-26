import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import useSWRImmutable from "swr/immutable";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import PhotoGallery from "../../components/widgets/PhotoGallery";
import { fetcher } from "../../server/calls";
import { getFacilities } from "../../server/pages";

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

const _paths = [
  "health-centre",
  "finishing-school",
  "language-lab",
  "co-operative-society",
  "internet-common-facility-centre",
  "womens-hostel",
  "staff-quarters",
  "auditorium",
  "electronics-block",
  "civil-block",
  "medical-facility",
];

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => {
  const { data } = useSWRImmutable<PageType>(
    `/api/pages/facilities/${page.key}`,
    fetcher
  );
  return (
    <Page title={page.title}>
      <CoverImage source={page.cover} title={page.title} />
      <Container>
        <PageTitle>{page.title}</PageTitle>
        <Content>
          <Content.Left>
            <div>
              <p>{page.about}</p>
            </div>
            {data && data.staffs && data.staffs.length > 0 && (
              <div>
                <PageTitle>Staffs</PageTitle>
                <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
                  {data.staffs.map((staff) => (
                    <UserProfileCard {...staff} key={staff.name} />
                  ))}
                </div>
              </div>
            )}
          </Content.Left>
          <Content.Right>
            {data && data.photos && data.photos.length > 0 && (
              <div>
                <PhotoGallery images={data.photos} />
              </div>
            )}
          </Content.Right>
        </Content>
        <div className="my-4 py-4" />
      </Container>
    </Page>
  );
};

export default CustomPage;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = _paths.map((page) => ({
    params: { id: page },
  }));
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
  const page = await getFacilities(params.id);
  return {
    props: {
      page: page,
    },
  };
};
