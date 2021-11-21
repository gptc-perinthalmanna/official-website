import { NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import BoldTitle from "../../components/ui/BoldTitle";

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
    designation: "Tradesman"
  },
  {
    name: "Amjed Ali K",
    designation: "Tradesman"
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
                <UserProfileCard key={staff.name} fullName={staff.name} designation={staff.designation} />
              ))}
            </div>
          </div>
          <div>
            <PageTitle>Department Facilities</PageTitle>
            <div className="p-5 my-2 border-2 rounded-lg border-violet-500 ">
                 <BoldTitle>Embedded System Lab</BoldTitle>
                  <p>skajl</p>
            </div>
          </div>
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
