import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import PhotoGallery from "../../components/widgets/PhotoGallery";

const _staffs = [
  {
    name: "Prakasan P",
    designation: "Head of Department",
  },
  {
    name: "Jamsheer",
    designation: "Lecturer in Electronics",
  },
  {
    name: "Sheeba MH",
    designation: "Lecturer in Electronics",
  },
];

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

const _pages: { [key: string]: PageType } = {
  "health-centre": {
    title: "Health Centre",
    about:
      "HEALTH CENTRE with motorised Tread mill, Manual Tread Mill, ElliptiKal Bike, Body Twister, Pec Dec machine, High lat pulley/Rowing pulley , Leg press heavy machine, Leg curl & leg extension machine, Weighing Machine, Gym ball, Facilities for free weight exercises has been attached to the Health Centre",
    cover: "/images/facilities/health-centre.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "finishing-school": {
    title: "Finishing School",
    about:
      "A finishing school is defined as a private school for students that emphasizes training in all round personality development, cultural and social activities. Specific skill sets may be imparted as value addition. The name reflects that it follows a school or college education and is intended to complete the educational experience. It may consist of an intensive course, or a one-year program.",
    cover: "/images/facilities/finishing-school.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
 
    ],
  },
  "language-lab": {
    title: "Language Lab",
    about:
      "A language laboratory is a dedicated space for foreign language learning where students access audio or audio-visual materials. They allow a teacher to listen to and manage student audio, which is delivered to individual students through headsets or in isolated 'sound booths.' They have now largely been replaced by self access language learning centers, which may be called 'language labs.",
    cover: "/images/facilities/language-lab.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
 
    ],
  },
  "co-operative-society": {
    title: "Co-Operative Society",
    about:
      "There is a co-operative society with all the stationary items for the students and staff like note books,text books,drawing equipments,laboratory records etc are available through the society.College uniform cloths are also available.Every items are sold for a reasonable rate . All the staff and students are enrolled their name in the Society.",
    cover: "/images/facilities/co-operative-society.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "internet-common-facility-centre": {
    title: "Internet Common Facility Centre",
    about:
      "This lab is equipped with High speed, broadband internet connection through OFC which is provided by BSNL under the scheme of NATIONAL MISSION FOR EDUCATION under Ministry for HRD. This will ensure ample net facilities in the campus. The net lab will be available to the students from 8.30am to 5.00pm.",
    cover: "/images/facilities/internet-common-facility-centre.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "womens-hostel": {
    title: "Womens Hostel",
    about:
      "Indian women, who have to stay away from their homes for job purpose or do not have anyone to house them, often suffer from insecurities related to safety. The central government has passed a new scheme that is designed for meeting the housing requirements of working or helpless women. The name of the program is Working Women Hostel Scheme and will include children under special circumstances only.",
    cover: "/images/facilities/womens-hostel",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "staff-quarters": {
    title: "Staff quarters",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/facilities/library/cover.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "auditorium": {
    title: "Auditorium",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/facilities/library/cover.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "electronics-block": {
    title: "Electronics Block",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/facilities/library/cover.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "civil-block": {
    title: "Civil Block",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/facilities/library/cover.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
  "medical-facility": {
    title: "Medical-facility",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/facilities/library/cover.jpg",
    staffs: _staffs,
    photos: [
      {
        src: "/images/library-1.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-2.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-3.jpg",
        alt: "Photo Libray",
      },
      {
        src: "/images/library-4.jpg",
        alt: "Photo Libray",
      },
    ],
  },
};

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
          {page.staffs && (
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
          {page.photos && (
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

// This function gets called at build time
export const getStaticPaths: GetStaticPaths = () => {
  // Call an external API endpoint to get posts
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  // Get the paths we want to pre-render based on posts
  const paths = _paths.map((page) => ({
    params: { id: page },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  // TODO: Change Falllback to 'blocking'
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<{}, { [key: string]: string }> = ({
  params,
}) => {
  // const res = await fetch('https://.../posts')
  // const posts = await res.json()

  if (!params || !params.id) {
    return { props: { error: true } };
  }
  const key = params.id;

  return {
    props: {
      page: _pages[key],
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 6000, // In seconds
  };
};
