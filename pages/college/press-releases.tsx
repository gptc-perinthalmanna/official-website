import { NextPage } from "next";
import PostListItem from "../../components/custom/PostListItem";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";

const _press = [
  {
    title: "D-Voc Admissions Started",
    date: "2020-01-01",
    author: {
      name: "Principal",
    },
    author_id: "2klj3-23lk3j2-2jlkjoii-32liop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, necessitatibus saepe tenetur alias repudiandae maiores. Ullam temporibus itaque ipsum, cupiditate officiis, sapiente neque mollitia unde, vitae aperiam quo adipisci repellendus!",
  },
  {
    title: "Poly Admisson Spot Allotment III is scheduled.",
    date: "21-Nov-2021",
    author: {
      name: "Principal",
    },
    author_id: "2klj3-23lk3j2-2jlkjoii-32liop",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam, necessitatibus saepe tenetur alias repudiandae maiores. Ullam temporibus itaque ipsum, cupiditate officiis, sapiente neque mollitia unde, vitae aperiam quo adipisci repellendus!",
  },
];

const BreifHistory: NextPage = () => (
  <Page title="Press Releases">
    <Container>
      <H1>Press Releases</H1>
      <Content>
        <Content.Left>
          {_press.map((post) => (
            <PostListItem
              key={post.title}
              title={post.title}
              date={post.date}
              username={post.author.name}
              description={post.description}
            />
          ))}
        </Content.Left>
      </Content>
    </Container>
  </Page>
);

export default BreifHistory;
