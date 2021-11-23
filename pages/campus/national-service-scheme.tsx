import { NextPage } from "next";
import LargeUserCardWithDetails from "../../components/custom/LargeUserCardWithDetails";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";

const CustomPage: NextPage = () => (
  <Page title="National Service Scheme (NSS)">
    <Container>
      <PageTitle>National Service Scheme</PageTitle>
      <Content>
        <Content.Left>
          <div>
            
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
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
