import { NextPage } from "next";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";


const CustomPage: NextPage = () => (
  <Page title="Electronics Block">
    <Container>
      <PageTitle>Electronics Block0</PageTitle>
      <Content>
        <Content.Left>
            <div></div>
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;