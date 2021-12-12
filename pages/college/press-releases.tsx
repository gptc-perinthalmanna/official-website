import { NextPage } from "next";
import useSWR from "swr";
import PostListItem from "../../components/custom/PostListItem";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { H1 } from "../../components/ui/Heading";
import { fetcher } from "../../server/calls";
import { NewsMediaType } from "../../server/db";

const CustomPage: NextPage = () => {
  return (
    <Page title="Press Releases">
      <Container>
        <H1>Press Releases</H1>
        <Content>
          <Content.Left><NewsList /></Content.Left>
        </Content>
      </Container>
    </Page>
  );
};

function NewsList() {
  const { data, error } = useSWR<NewsMediaType[]>(
    process.env.NEXT_PUBLIC_WEB_ADMIN_URL + "/news-and-media/all",
    fetcher
  );

  if (error) return <div className="text-2xl font-bold text-center text-red-500 my-7">failed to load</div>;
  if (!data)
    return (
      <div className="h-40 max-w-4xl px-10 py-6 my-4 bg-gray-200 border-2 rounded-lg shadow-md cursor-pointer animate-pulse">
        <div className="flex items-center justify-between"></div>
      </div>
    );

  return (
    <>
      {data && data.map((post) => <PostListItem {...post} key={post.title} />)}
    </>
  );
}

export default CustomPage;
