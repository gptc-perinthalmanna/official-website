import { NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";



const _details = [
  {
    title: "Internet Common Facility Centre",
    staffs: [
      {
        name: "Amjed Ali",
        designation: "Tradesman Electronics",
        avatar: "/avatars/amjed.jpeg",
        social: {
          facebook: "https://www.facebook.com/amjed.ali.9",
          instagram: "https://www.instagram.com/amjed_ali/",
          linkedIn: "https://www.linkedin.com/in/amjed-ali-b9a8b917b/",
        },
      },
      {
        name: "Atheek Rahman",
        designation: "Workshop Instructor",
      },
    ],
  },
  {
    title: "Exam Monitoring Cell",
    staffs: [
      {
        name: "Mohankumar P",
        designation: "Convener",
      },
      {
        name: "Mujeeb Rahman C H",
        designation: "Member",
      },
      {
        name: "Pradeep. M",
        designation: "Member",
      },
    ],
  },
  {
    title: "Anti Ragging Squad",
    staffs: [
      {
        name: "Mohankumar P",
        designation: "Convener",
      },
      {
        name: "Bindu.O.S",
        designation: "Member",
      },
      {
        name: "Kamalnath",
        designation: "Member",
      },
      {
        name: "Viswanathan. K",
        designation: "Member",
      },
      {
        name: "Jayachandran K",
        designation: "Member",
      },
    ],
  },
  {
    title: "National Service Scheme",
    staffs: [
      {
        name: "Anoop",
        designation: "Program Officer",
      },
    ],
  },
  {
    title: "Women Cell",
    staffs: [
      {
        name: "Bindu.O.S",
        designation: "Convener",
      },
      {
        name: "Sheeba MH",
        designation: "Member",
      },
      {
        name: "Muhsina T",
        designation: "Member",
      },
      {
        name: "Lathi K",
        designation: "Member",
      },
    ],
  },
  {
    title: "Scholar Support",
    staffs: [
      {
        name: "Dr. A. K. SIVADASAN",
        designation: "Coordinator",
      },
      {
        name: "Jamseer. N",
        designation: "Member",
      },
      {
        name: "Muhsina T",
        designation: "Member",
      },
      {
        name: "Danishmon N",
        designation: "Member",
      },
      {
        name: "Salih. P K",
        designation: "Member",
      },
    ],
  },
  {
    title: "Grievance cell",
    staffs: [
      {
        name: "Sheeba M H",
        designation: "Chairperson",
      },
      {
        name: "Pramodkumar K P",
        designation: "Member",
      },
      {
        name: "Seena N",
        designation: "Member",
      },
      {
        name: "Ali K",
        designation: "Member",
      },
      {
        name: "Ajithakumari",
        designation: "Member",
      },
    ],
  },
  {
    title: "Finishing School",
    staffs: [
      {
        name: "Sajeev P S",
        designation: "Convener",
      },
      {
        name: "Asokan. A. N.",
        designation: "Member",
      },
      {
        name: "Usman K",
        designation: "Member",
      },
      {
        name: "Prakash P",
        designation: "Member",
      },
    ],
  },
  {
    title: "Placement Cell",
    staffs: [
      {
        name: "Jamseer N",
        designation: "Convener",
      },
      {
        name: "Vivek K",
        designation: "Member",
      },
      {
        name: "Noushad C P",
        designation: "Member",
      },
      {
        name: "Sanal Kumar S",
        designation: "Member",
      },
      {
        name: "Madhusoodanan S",
        designation: "Member",
      },
    ],
  },
  {
    title: "Training Manager",
    staffs: [
      {
        name: "Viswanathan. K",
        designation: "Workshop Suprendent",
      },
    ],
  },
];

const CustomPage: NextPage = () => (
  <Page title="Who is who">
    <Container>
      <PageTitle>Whos Who</PageTitle>
      <Content>
        <Content.FullWidth>
            <div className="mb-5">
          {_details.map((detail) => (
            <div key={detail.title}>
              <h2 className="text-left mt-5 font-bold lg:text-3xl md:text-2xl text-xl  text-gray-700">
                {detail.title}
              </h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 mt-3">
               
               {detail.staffs.map((staff) => (
                   <UserProfileCard
                     key={staff.name}
                     fullName={staff.name}
                     image={staff.avatar}
                     designation={staff.designation}
                     socialLinks={staff.social}
                   />
               ))}

              </div>
            </div>
          ))}
          </div>
        </Content.FullWidth>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
