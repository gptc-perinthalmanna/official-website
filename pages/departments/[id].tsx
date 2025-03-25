import type { GetStaticPaths, GetStaticProps, NextPage } from "next";

import FeatureCard from "../../components/custom/FeatureCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import type { DepartmentFacilityType, UserType } from "../../server/db";

interface DeptPageType {
  id: string;
  title: string;
  cover: string;
  about: string;
  staffs?: UserType[];
  facilities?: DepartmentFacilityType[];
}
const pages: DeptPageType[] = [
  {
    id: "electronics-engineering",
    title: "Electronics Engineering",
    about:
      "Electronic engineering, or electronics engineering is a form of engineering associated with electronic circuits, devices and the equipment and systems that use them.Electronic engineering utilises a variety of different types of electronic components from the more traditional analogue components through to digital electronic components, microprocessors and microcontrollers as well as programmable logic devices. This means that electronic engineering can incorporate a large variety of different areas.The field of electronic engineering includes a variety more specific electronic engineering fields including: analogue electronics, digital electronics, consumer electronics, embedded systems and power electronics.",
    cover: "https://i.ibb.co/WnjfPWf/electronics.jpg",
    staffs: [],
    facilities: [
      {
        title: "Embedded System Lab",
        description:
          "An embedded system is a microprocessor-based computer hardware system with software that is designed to perform a dedicated function, either as an independent system or as a part of a large system. At the core is an integrated circuit designed to carry out computation for real-time operations.",
        color: "blue",
        id: "embedded-system-lab",
        image: "https://i.ibb.co/WBXfsyF/library-1.jpg",
        tags: ["lab", "embedded", "system"],
      },
    ],
  },
  {
    id: "mechanical-engineering",
    title: "Mechanical Engineering",
    about:
      "Mechanical engineering is a branch of engineering that deals with the design, production, and maintenance of mechanical systems. It is a broad field that includes a wide range of sub-disciplines, such as mechanical design, manufacturing, and maintenance. Mechanical engineers use a variety of tools and techniques to design and build mechanical systems, including mechanical parts, assemblies, and machines. They also use a variety of materials and processes to create mechanical systems, such as metals, plastics, and composites. Mechanical engineers also use a variety of software and tools to simulate and analyze mechanical systems, such as CAD and FEA. They also use a variety of testing and measurement equipment to test and validate mechanical systems. They also use a variety of tools and techniques to maintain and repair mechanical systems, such as lubrication, inspection, and maintenance.",
    cover: "https://i.ibb.co/0ZbmTCB/68d1a1536147.jpg",
    staffs: [],
    facilities: [],
  },
  {
    id: "civil-engineering",
    title: "Civil Engineering",
    about:
      "Civil engineering is a branch of engineering that deals with the design, production, and maintenance of civil systems. It is a broad field that includes a wide range of sub-disciplines, such as civil design, manufacturing, and maintenance. Civil engineers use a variety of tools and techniques to design and build civil systems, including civil parts, assemblies, and machines. They also use a variety of materials and processes to create civil systems, such as metals, plastics, and composites. Civil engineers also use a variety of software and tools to simulate and analyze civil systems, such as CAD and FEA. They also use a variety of testing and measurement equipment to test and validate civil systems. They also use a variety of tools and techniques to maintain and repair civil systems, such as lubrication, inspection, and maintenance.",
    cover: "https://i.ibb.co/7zH7XSx/e7087edb6df0.jpg",
    staffs: [],
    facilities: [],
  },
  {
    id: "electrical-and-electronics-engineering",
    title: "Electrical and Electronics Engineering",
    about:
      "Electrical and Electronics Engineering is a branch of engineering that deals with the design, production, and maintenance of electrical and electronic systems. It is a broad field that includes a wide range of sub-disciplines, such as electrical design, manufacturing, and maintenance. Electrical and Electronics Engineers use a variety of tools and techniques to design and build electrical and electronic systems, including electrical parts, assemblies, and machines. They also use a variety of materials and processes to create electrical and electronic systems, such as metals, plastics, and composites. Electrical and Electronics Engineers also use a variety of software and tools to simulate and analyze electrical and electronic systems, such as CAD and FEA. They also use a variety of testing and measurement equipment to test and validate electrical and electronic systems. They also use a variety of tools and techniques to maintain and repair electrical and electronic systems, such as lubrication, inspection, and maintenance.",
    cover: "https://i.ibb.co/HKJSjRH/a550743e72fa.jpg",
    staffs: [],
    facilities: [],
  },
];

const _paths = [
  "electronics-engineering",
  "mechanical-engineering",
  "civil-engineering",
  "electrical-and-electronics-engineering",
];

const CustomPage: NextPage<{ id: string }> = ({ id }) => {
  const page = pages.find((page) => page.id === id);
  if (!page) return <div />;

  return (
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
                  {page.staffs.map((staff: UserType) => (
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
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;

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
