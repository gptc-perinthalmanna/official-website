import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";
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
  events?: PhotoType[];
}

interface PhotoType {
  title: string;
  subtitle: string;
  image: string;
  date: string;
}

const _pages: { [key: string]: PageType } = {
  "greivance-redressal-committee": {
    title: "Greivance Redressal Committee | Internal Complaints Cell",
    about:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic neque eum necessitatibus maiores, quae nam a harum ducimus, vel dignissimos ullam. Explicabo cupiditate, nihil debitis autem itaque quisquam earum atque!",
    cover: "/images/campus/greivance-redressal-committee.jpg",
    staffs: _staffs,
    events: [
      {
        title: "Event 1",
        subtitle: "Subtitle 1",
        image: "/images/library-1.jpg",
        date: "12 Oct 2021",
      },
      {
        title: "Event 1",
        subtitle: "Subtitle 1",
        image: "/images/library-2.jpg",
        date: "12 Oct 2021",
      },
      {
        title: "Event 1",
        subtitle: "Subtitle 1",
        image: "/images/library-3.jpg",
        date: "12 Oct 2021",
      },
      {
        title: "Event 1",
        subtitle: "Subtitle 1",
        image: "/images/library-4.jpg",
        date: "12 Oct 2021",
      },
    ],
  },

  "placement-cell": {
    title: "Placement Cell",
    about:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt tempora ratione nisi, consequuntur autem dolorum, animi nostrum accusantium nesciunt deserunt voluptatibus adipisci sint error consequatur aperiam nihil enim doloremque eius?",
    cover: "/images/campus/finishing-school.jpg",
    staffs: _staffs,
  },
  "parents-teachers-association": {
    title: "Parents Teachers Association",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta explicabo aliquid quaerat assumenda accusamus maxime autem cum, eos hic perferendis? Ipsum molestias blanditiis magni delectus sapiente dolor earum sequi.",
    cover: "/images/campus/language-lab.jpg",
    staffs: _staffs,
  },
  "staff-club": {
    title: "Staff Club",
    about:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis dicta explicabo aliquid quaerat assumenda accusamus maxime autem cum, eos hic perferendis? Ipsum molestias blanditiis magni delectus sapiente dolor earum sequi.",
    cover: "/images/campus/co-operative-society.jpg",
    staffs: _staffs,
  },
  "anti-ragging-committe": {
    title: "Anti Ragging Committe",
    about:
      "This lab is equipped with High speed, broadband internet connection through OFC which is provided by BSNL under the scheme of NATIONAL MISSION FOR EDUCATION under Ministry for HRD. This will ensure ample net campus in the campus. The net lab will be available to the students from 8.30am to 5.00pm.",
    cover: "/images/campus/internet-common-facility-centre.jpg",
    staffs: _staffs,
  },
  "boomithrasena-club": {
    title: "Boomithraseena Club",
    about:
      "Indian women, who have to stay away from their homes for job purpose or do not have anyone to house them, often suffer from insecurities related to safety. The central government has passed a new scheme that is designed for meeting the housing requirements of working or helpless women. The name of the program is Working Women Hostel Scheme and will include children under special circumstances only.",
    cover: "/images/campus/womens-hostel",
    staffs: _staffs,
  },
  "innovation-entrepreneurship-development-club": {
    title: "Innovation Entrepreneurship Development Club",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/campus/library/cover.jpg",
    staffs: _staffs,
  },
  "sholar-support-programme": {
    title: "Scholar Support Programme",
    about:
      "The library is a collection of books, periodicals, manuscripts, etc. that are available for reference and lending.",
    cover: "/images/campus/library/cover.jpg",
    staffs: _staffs,
  },
};

const _paths = [
  "greivance-redressal-committee",
  "placement-cell",
  "parents-teachers-association",
  "staff-club",
  "anti-ragging-committe",
  "boomithrasena-club",
  "innovation-entrepreneurship-development-club",
  "sholar-support-programme",
];

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => (
  <Page title={page.title}>
    <CoverImage source={page.cover} title={page.title} />
    <Container>
      <PageTitle>{page.title}</PageTitle>
      <Content>
        <Content.FullWidth>
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
        </Content.FullWidth>
      </Content>
      {page.events && (
        <Content>
          <Content.FullWidth>
            <PageTitle>Events</PageTitle>
            <div className="mb-3">

            <EventCarousel items={page.events} />
            </div>
          </Content.FullWidth>
        </Content>
      )}
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
