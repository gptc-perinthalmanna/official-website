import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import PhotoGallery from "../../components/widgets/PhotoGallery";
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

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => (
  <Page title={page.title}>
    <CoverImage source={page.cover} title={page.title} />
    <Container>
      <PageTitle>{page.title}</PageTitle>
      <Content>
        <Content.Left>
          <div>
            <p>{page.about}</p>
          </div>
          {page.staffs && page.staffs.length > 0 && (
            <div>
              <PageTitle>Staffs</PageTitle>
              <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
                {page.staffs.map((staff) => (
                  <UserProfileCard
                    key={staff.name}
                    fullName={staff.name}
                    designation={staff.designation}
                  />
                ))}
              </div>
            </div>
          )}
        </Content.Left>
        <Content.Right>
          {page.photos && page.photos.length > 0 && (
            <div>
              <PhotoGallery images={page.photos} />
            </div>
          )}
        </Content.Right>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;

export const getStaticPaths: GetStaticPaths = () => {
  const paths = _paths.map((page) => ({
    params: { id: page },
  }));
  // TODO: Change Falllback to 'blocking'
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{}, { [key: string]: string }> = async ({
  params,
}) => {
  if (!params || !params.id) {
    return { props: { error: true } };
  }
  const page = await getFacilities(params.id);
  console.log("Done!")
  return {
    props: {
      page: page,
    },
    revalidate: 6000,
  };
};