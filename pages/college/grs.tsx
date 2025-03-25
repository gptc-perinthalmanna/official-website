import type { NextPage } from "next";
import { BiLoader } from "react-icons/bi";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import redirect from "nextjs-redirect";
const Redirect = redirect("https://grs.gptcperinthalmanna.in");

const CustomPage: NextPage = () => (
  <Redirect>
    <Page title="Grievance Redressal System">
      <Container>
        <Content>
          <Content.FullWidth>
            <div className="flex flex-col items-center justify-center my-8 pb-60 pt-14">
              <BiLoader size={40} className="text-center animate-spin" />
              <p className="text-3xl font-bold text-center text-gray-700 ">
                Redirecting to GRS Login Page
              </p>
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  </Redirect>
);

export default CustomPage;
