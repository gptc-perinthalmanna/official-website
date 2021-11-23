import { NextPage } from "next";
import InstagramHeader from "../../components/custom/InstagramHeader";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import RibbonCard from "../../components/custom/RibbonCard";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import EventCarousel from "../../components/ui/EventCarousal";

const _vs = [
  {
    name: "Prakasan P",
    designation: "Head of Department",
  },
  {
    name: "Jamsheer",
    designation: "Lecturer in Electronics",
  },
];

const CustomPage: NextPage = () => (
  <Page title="National Service Scheme (NSS)">
    <Container>
      <PageTitle>National Service Scheme</PageTitle>
      <Content>
        <Content.Left>
          <div className="mr-2">
            <LargeUserCardWithDetails
              avatar={
                "http://uoce.chimpgroup.com/home-v4/wp-content/uploads/2015/07/UOCE-Team-Members-12.jpg"
              }
              fullName={"Anoop"}
              designation={"NSS Program Officer"}
              subtitle={"Tradesman, Mechanical Department"}
              email={"nss@gptcperinthalmanna.in"}
              phone={"+91 9745 814 814"}
              address={"Abc lkdi Angadipuram, Kerala, India"}
              socialLinks={{
                facebook: "https://www.facebook.com/gptcperinthalmanna",
                linkedin:
                  "https://www.linkedin.com/company/gptc-perinthalmanna/",
                whatsapp: "https://wa.me/919745814814",
                instagram: "https://www.instagram.com/gptcperinthalmanna/",
              }}
            />
          </div>
        </Content.Left>
        <Content.Right>
          <RibbonCard color="red">
            <h2 className="mb-2 text-2xl font-bold text-gray-100">Mission</h2>
            <p className="text-gray-100">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laudantium minima perspiciatis tenetur, modi aperiam distinctio
              necessitatibus officia, nostrum cupiditate animi voluptatum earum,
              est assumenda id iusto non quasi quia accusamus!
            </p>
            <h2 className="mb-2 text-2xl font-bold text-gray-100">Motto</h2>
            <p className="text-gray-100">Not me but You!</p>
          </RibbonCard>
        </Content.Right>
      </Content>
      <Content>
        <Content.FullWidth>
          <PageTitle>About NSS</PageTitle>
          <div className="my-3">
            <p>
              The National Service Scheme was started to establish a meaningful
              linkage between the campus and the community. Mahatma Gandhi, the
              Father of the Nation, had recognized that the country could not
              progress in a desired direction until the student youth were
              motivated to work for the upliftment of the community. For
              Gandhiji the villages, where majority of the population lived,
              represent the country i.e. India. Therefore, for the national
              reconstruction and national resurgence it was deemed fit that the
              students and teachers should be properly sensitized and utilized
              for strengthening the Indian society as a whole with particular
              emphasis on rural community. Therefore, student youth, teachers
              and the community are considered the three basic components of the
              National Service Scheme.
            </p>
          </div>
        </Content.FullWidth>
      </Content>
      <Content>
        <Content.FullWidth>
          <PageTitle>NSS on Instagram </PageTitle>
          <div className="mx-2 border-2 border-pink-700 rounded-lg">
            <InstagramHeader />
          </div>
        </Content.FullWidth>
      </Content>
      <Content>
        <Content.FullWidth>
          <PageTitle>Previous Events</PageTitle>
          <div className="my-3">
            <EventCarousel />
          </div>
        </Content.FullWidth>
      </Content>
      <Content>
        <Content.Left>
          <PageTitle>Volunteer secretaries</PageTitle>
          <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
            {_vs.map((vs) => (
              <UserProfileCard
                key={vs.name}
                fullName={vs.name}
                designation={vs.designation}
              />
            ))}
          </div>
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
