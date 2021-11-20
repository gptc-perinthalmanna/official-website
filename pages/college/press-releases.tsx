import { NextPage } from "next";
import PostListItem from "../../components/custom/PostListItem";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";

const BreifHistory: NextPage = () => (
  <Page title="Press Releases">
    <Container>
      <H1>Press Releases</H1>
      <Content>
        <Content.Left>
          <PostListItem
            title="D-Voc Admissions Started"
            date="21-Nov-2021"
            username="Principal"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem quia numquam commodi minima doloremque inventore saepe aut amet maiores voluptates eum repudiandae laboriosam molestiae nobis, nam cupiditate quod mollitia?"
          />
          <PostListItem
            title="Poly Admisson Spot Allotment III is scheduled."
            date="21-Nov-2021"
            description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit voluptatem quia numquam commodi minima doloremque inventore saepe aut amet maiores voluptates eum repudiandae laboriosam molestiae nobis, nam cupiditate quod mollitia?"
            username="Principal"
          />
          
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default BreifHistory;
