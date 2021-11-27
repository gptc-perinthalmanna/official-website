import { NextPage } from "next";
import PostListItem from "../../components/custom/PostListItem";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";
import { NewsMediaType } from "../../server/db";
import { getAllNews } from "../../server/newsAndMedia";

const CustomPage: NextPage<{ page: NewsMediaType[] }> = ({ page }) => (
  <Page title="Press Releases">
    <Container>
      <H1>Press Releases</H1>
      <Content>
        <Content.Left>
          {page.map((post) => (
            <PostListItem {...post} key={post.title} />
          ))}
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;

export async function getStaticProps() {
  const page = (await getAllNews()) as NewsMediaType[];
  return { props: { page }, revalidate: 600000 };
}
