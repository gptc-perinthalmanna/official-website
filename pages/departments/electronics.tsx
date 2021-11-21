import { NextPage } from "next";

import FeatureCard from "../../components/custom/FeatureCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";

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
  {
    name: "Vilsy Jomon",
    designation: "Lecturer in Electronics",
  },
  {
    name: "Bhavya",
    designation: "Lecturer in Electronics",
  },
  {
    name: "Manjusree",
    designation: "Demonstrator",
  },
  {
    name: "Aiswarya",
    designation: "Demonstrator",
  },
  {
    name: "Mohammed Ali M",
    designation: "Trade Instructor",
  },
  {
    name: "Asker Ali",
    designation: "Trade Instructor",
  },
  {
    name: "Abdul Aziz M",
    designation: "Tradesman",
  },
  {
    name: "Amjed Ali K",
    designation: "Tradesman",
  },
];


const _facilities = [
  {
    title: "Embedded System Lab",
    description: "An embedded system is a microprocessor-based computer hardware system with software that is designed to perform a dedicated function, either as an independent system or as a part of a large system. At the core is an integrated circuit designed to carry out computation for real-time operations.",
    image: "/images/embedded-lab.jpeg",
    color: "green"
  },
  {
    title: "Digital Lab",
    description: "Digital lab is a laboratory where students can learn about digital electronics and microprocessors. The lab is equipped with a wide range of digital electronics and microprocessor kits.",
    image: "/images/computer-lab.jpg",
    color: "blue"
  }
]


const CustomPage: NextPage = () => (
  <Page title="Electronics Department">
    <CoverImage
      source="/images/electronics.jpg"
      title="Electronics Engineering Department"
    />
    <Container>
      <Content>
        <Content.Left>
          <div>
            <PageTitle>About Electronics Engineering</PageTitle>
            <p>
              Electronic engineering, or electronics engineering is a form of
              engineering associated with electronic circuits, devices and the
              equipment and systems that use them.Electronic engineering
              utilises a variety of different types of electronic components
              from the more traditional analogue components through to digital
              electronic components, microprocessors and microcontrollers as
              well as programmable logic devices. This means that electronic
              engineering can incorporate a large variety of different areas.The
              field of electronic engineering includes a variety more specific
              electronic engineering fields including: analogue electronics,
              digital electronics, consumer electronics, embedded systems and
              power electronics.
            </p>
          </div>
          <div>
            <PageTitle>Department Staff</PageTitle>
            <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
              {_staffs.map((staff) => (
                <UserProfileCard
                  key={staff.name}
                  fullName={staff.name}
                  designation={staff.designation}
                />
              ))}
            </div>
          </div>
          <div>
            <PageTitle>Department Facilities</PageTitle>
            {_facilities.map((facility) => (
              <FeatureCard
              key={facility.title}
              color={facility.color}
              image={facility.image}
              title={facility.title}
              description={facility.description}
            />
            ))}
          </div>
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
