import { NextPage } from "next";
import { RiAlarmWarningFill } from "react-icons/ri";
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

const CustomPage: NextPage = () => (
  <Page title="Health Centre">
    <CoverImage source="/images/health-centre.jpg" title="Modern Health Centre" />
    <Container>
      <PageTitle>Health Centre</PageTitle>
      <Content>
        <Content.Left>
          <div>
            <p>
              HEALTH CENTRE with motorised Tread mill, Manual Tread Mill,
              ElliptiKal Bike, Body Twister, Pec Dec machine, High lat
              pulley/Rowing pulley , Leg press heavy machine, Leg curl & leg
              extension machine, Weighing Machine, Gym ball, Facilities for free
              weight exercises has been attached to the Health Centre
            </p>
          </div>
          <div>
            <PageTitle>Staffs</PageTitle>
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
      
        </Content.Left>
        <Content.Right>
          <div>
            <PhotoGallery />
          </div>
        </Content.Right>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
