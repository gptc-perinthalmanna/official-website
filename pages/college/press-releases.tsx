import { NextPage } from "next";
import PostListItem from "../../components/custom/PostListItem";
import Container from "../../components/layout/Container";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";

const BreifHistory: NextPage = () => (
  <Page title="Press Releases">
    <Container>
      <H1>Press Releases</H1>

      <PostListItem
        title="D-Voc Admissions Started"
        date="21-Nov-2021"
        username="Principal"
      />
          <PostListItem
        title="D-Voc Admissions Started"
        date="21-Nov-2021"
        username="Principal"
      />
    </Container>
  </Page>
);

export default BreifHistory;
