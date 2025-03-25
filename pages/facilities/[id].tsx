import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import PhotoGallery from "../../components/widgets/PhotoGallery";

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
  id: string;
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

const pages = [{
  id: "health-centre",
  title: "Health Centre",
  about: "Health Centre with motorised Tread mill, Manual Tread Mill, ElliptiKal Bike, Body Twister, Pec Dec machine, High lat pulley/Rowing pulley, Leg press heavy machine, Leg curl & eg extension machine, Weighing Machine, Gym ball, Facilities for free weight exercises have been attached to the Health Centre",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "finishing-school",
  title: "Finishing School",
  about: "A finishing school is defined as a private school for students that emphasizes training in all round personality development, cultural and social activities. Specific skill sets may be imparted as value addition. The name reflects that it follows a school or college education and is intended to complete the educational experience. It may consist of an intensive course, or a one-year program.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "language-lab",
  title: "Language Lab",
  about: "A language laboratory is a dedicated space for foreign language learning where students access audio or audio-visual materials. They allow a teacher to listen to and manage student audio, which is delivered to individual students through headsets or in isolated 'sound booths.' They have now largely been replaced by self access language learning centers, which may be called 'language labs.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "co-operative-society",
  title: "Co-Operative Society",
  about: "There is a co-operative society with all the stationary items for the students and staff like note books,text books,drawing equipments,laboratory records etc are available through the society.College uniform cloths are also available.Every items are sold for a reasonable rate . All the staff and students are enrolled their name in the Society.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "internet-common-facility-centre",
  title: "Internet Common Facility Centre",
  about: "This lab is equipped with High speed, broadband internet connection through OFC which is provided by BSNL under the scheme of NATIONAL MISSION FOR EDUCATION under Ministry for HRD. This will ensure ample net facilities in the campus. The net lab will be available to the students from 8.30am to 5.00pm.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "womens-hostel",
  title: "Womens Hostel",
  about: "The college provides residential facilities for up to 50 women students. Students wishing to avail the facilities should submit a request to the management at the beginning of the academic year.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "staff-quarters",
  title: "Staff quarters",
  about: "“Staff Quarters” means buildings/quarters constructed by the college for the purpose of allotment to eligible employees of the College for their residence and which are under the control of the College.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "auditorium",
  title: "Auditorium",
  about: "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "electronics-block",
  title: "Electronics Block",
  about: "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "civil-block",
  title: "Civil Block",
  about: "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
{
  id: "medical-facility",
  title: "Medical facility",
  about: "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
  cover: "https://i.ibb.co/FWZb0zQ/87f4a817cf90.jpg",
  staffs: [],
  events: [],
},
]

const CustomPage: NextPage<{ id: string }> = ({  id  }) => {
  
  const page =  pages.find((page) => page.id === id);
  if (!page) return <div />;
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
            {page?.staffs && page.staffs.length > 0 && (
              <div>
                <PageTitle>Staffs</PageTitle>
                <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
                  {page.staffs.map((staff: StaffType) => (
                    <UserProfileCard {...staff} key={staff.name} />
                  ))}
                </div>
              </div>
            )}
          </Content.Left>
          <Content.Right>
            {page?.events && page.events.length > 0 && (
              <div>
                <PhotoGallery images={page.events} />
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
  // biome-ignore lint/complexity/noBannedTypes: <explanation>
  {},
  { [key: string]: string }
> = async ({ params }) => {
  if (!params || !params.id) {
    return { props: { error: true } };
  }
  return {
    props: {
      id: params.id,
    },
  };
};