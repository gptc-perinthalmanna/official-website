import type { GetStaticPaths, GetStaticProps, NextPage } from "next";
import useSWRImmutable from "swr/immutable";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";
import { fetcher } from "../../server/calls";

interface StaffType {
  id: string;
  name: string;
  designation: string;
  social?: {
    facebook: string;
    twitter: string;
    instagram: string;
  };
}

const _paths = [
  "grievance-redressal-committee",
  "placement-cell",
  "parents-teachers-association",
  "staff-club",
  "anti-ragging-committe",
  "boomithrasena-club",
  // "innovation-entrepreneurship-development-club",
  "sholar-support-programme",
  "students-union",
  "alumini",
  "internal-complaint-committee",
  "student-grievance-redressal-committee",
];

const pages = [
  {
    id: "grievance-redressal-committee",
    title: "Grievance Redressal Committee",
    about: "",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "placement-cell",
    title: "Placement Cell",
    about:
      "Career guidance and placement cell have been assisting the students in paving the way to their careers. The cell conducts training programmes to prepare the students to face the recruitment process and to meet the needs of the industry. It also provides complete support to visiting companies at every stage of the placement process. Arrangements for pre-placement talks, written tests, interviews and group discussions are made as per the requirement of the visiting companies. It bridges the gap between the industry and the institution. We Receive and forwards the feedback pertinent to curriculum improvement from the visiting companies to the faculty, to ensure that the curriculum follows the latest industrial trends. We are confident that these young men and women would be an asset to your organization through their technical and managerial capabilities and their talent for innovation. GPTC Perinthalmanna works towards continuing education for the college employees over the years, the placement cell has maintained a symbiotic, vibrant and purposeful relationship with Industries and as a result, has built up an impressive placement record both in terms of percentage of registered students placed, as well as the number of companies visiting the campus.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "parents-teachers-association",
    title: "Parents Teachers Association",
    about:
      "The goal of setting up the Parent-Teacher Association (PTA) is to enable the students to derive maximum benefits from the learning process and ensure their all-around development. The PTA plays a id role in ensuring that quality education is provided to the students who have enrolled for the diploma courses. Parents and teachers meet on a regular basis and bring about improvements to the students' facilities through cooperation.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "staff-club",
    title: "Staff Club",
    about:
      "The Staff club facilitates social interaction among all the staff members of various departments of this college. All teaching, non-teaching and administrative staffs are members of this club by default. The club aims at the welfare of its members and family. The main activities of the staff club include organizing lectures, celebrating festivals, conducting family tours and get-togethers, participating in family events etc.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "anti-ragging-committe",
    title: "Anti Ragging Committee",
    about:
      "The Anti Ragging Committee is established as per All India Council for Technical Education notified Regulation for prevention and prohibition of ragging in AICTE approved Technical Institutions vide No. 37-3/ Legal/ AICTE / 2009 dated 01.07.2009. The Anti Ragging Committee is headed by the Head of the Institution and consists of representatives of Civil and Police Administration, Local Media, Non-Government Organizations involved in youth activities, representatives of Faculty members, representatives of parents, representatives of students belonging to the freshers’ category as well as senior students, non-teaching staff and shall have a diverse mix of membership in terms of Level as well as gender.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "boomithrasena-club",
    title: "Boomithrasena Club",
    about:
      "Climate change poses an emerging challenge to the sustainability of social and economic development, livelihoods, and environmental management across the globe. The rise in Green House Gases (GHGs) in the atmosphere causes a rise in temperature which in turn leads to unpredictable weather including flash floods and drought, and a rise in sea level. So far as India is considered, the country is highly vulnerable to climate change because of high physical exposure to climate-related disasters (65% is drought-prone, 12% is flood-prone, 8% susceptible to cyclones) and also India’ economy and population depend on climate-sensitive sectors like agriculture, forests, tourism and fisheries. The Kerala State Action Plan on Climate Change developed by the Department of Environment and Climate Change, the Government of Kerala aims to address the negative consequences of climate change and thus reduce the risk associated with it. It also envisaged climate change strategies need to be integrated development planning process in the state Vision Placing the climate change concerns at the forefront of sustainable development and for maintaining the quality of life of the people of the State Mission.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "sholar-support-programme",
    title: "Sholar Support Programme",
    about:
      "This programme conceived to aid the weaker students of the institution is named Scholar Support Programme. Under the project, various Training Programmes and Special Classes are proposed for the students who need special attention. The Scheme when implemented would be a great boost to the academic performance of the institution. The project is all the more important because it would be a helping hand to the economically and socially backward classes of the society as most of the students in this institution come from rural areas. Students who are backward in their academic activities are to be found out and they should be given special care and attention to achieve their goals. We have already made some efforts in helping the students who are backward in their studies. But we could not achieve the expected target. That is why it is essential to take some more pain and time for the same.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "students-union",
    title: "Students Union",
    about: "",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "alumini",
    title: "Alumini",
    about:
      "The Alumni Association has been set up to enable past students of the college to share their knowledge and experience effectively with one another as well as contribute to the fields of engineering and technology as a whole. The alumni association also helps to foster relationships in social, cultural and professional directions among its members and thus contribute positively to society. As far as the Alma Mater is concerned, a gathering of the old students on its premises from time to time helps to enhance the glory of the institution and also gives a chance for the old students to give back to their college..",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "internal-complaint-committee",
    title: "Internal Complaint Committee",
    about:
      "The internal complaint committee (ICC) has responsibilities of the technical institution as per gender sensitization, prevention and prohibition of sexual harassment of women employees and students and redressal of grievances in technical institutions. This committee organizes training programmes, workshops for the officers, functionaries, faculty and students, to sensitize them and ensure knowledge and awareness of the rights, entitlements and responsibilities enshrined in the act and under regulations. It also organises regular orientation and training programmes for the members of the ICC to deal with complaints, steer the process of settlement or conciliation, etc with sensitivity.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
  {
    id: "student-grievance-redressal-committee",
    title: "Student Grievance Redressal Committee",
    about:
      "In order to provide opportunities for redressal of certain grievances of students already enrolled in our institution, as well as for those seeking admission, AICTE has notified All India Council for Technical Education (Redressal of Grievance of Students) Regulations, 2019 vide F. No. 1-101/PGRC/AICTE/Regulation/2019 dated 07.11.2019 for the establishment of grievance redressal mechanism for all AICTE approved Technical Institutions. Non-compliance of the above Regulations shall call for punitive action. Thus Student Grievance Redressal Committee is established in our college to address genuine grievances in order to maintain a harmonious educational atmosphere in the institute.",
    cover: "https://i.ibb.co/ZWfQcvf/greivance-redressal-committee.jpg",
    staffs: [],
    events: [],
  },
];

const CustomPage: NextPage<{ id: string }> = ({ id }) => {
  const page = pages.find((page) => page.id === id);
  if (!page) return <div />;

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
            {/* {page?.staffs && page.staffs.length > 0 && (
              <div>
                <PageTitle>Staffs</PageTitle>
                <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
                  {page.staffs.map((staff) => (
                    <UserProfileCard {...staff} key={staff.key} />
                  ))}
                </div>
              </div>
            )} */}
          </Content.FullWidth>
        </Content>
        {page?.events && page.events.length > 0 && (
          <Content>
            <Content.FullWidth>
              <PageTitle>Events</PageTitle>
              <div className="mb-3">
                {/* biome-ignore lint/suspicious/noExplicitAny: <explanation> */}
                <EventCarousel id={page.id as any} />
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
