import { NextPage } from "next";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import RibbonCard from "../../components/custom/RibbonCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import Carousel from "../../components/ui/Carousal";

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
          <div>
              <Carousel />
          </div>
        </Content.Left>
        <Content.Right>
          <RibbonCard color="red">
            <h2 className="mb-2 text-2xl font-bold text-gray-100">Mission</h2>
            <p className="text-gray-100">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium minima perspiciatis tenetur, modi aperiam distinctio necessitatibus officia, nostrum cupiditate animi voluptatum earum, est assumenda id iusto non quasi quia accusamus!</p>
          </RibbonCard>
        </Content.Right>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
