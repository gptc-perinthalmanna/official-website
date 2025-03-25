import type { NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import type { UserType } from "../../server/db";
import useSWRImmutable from "swr/immutable";
import { fetcher } from "../../server/calls";

interface Committee {
  title: string;
  staffs_ids: { key: string; position: string }[];
}

interface PageType {
  committees: Committee[];
  staffs: UserType[];
}

const CustomPage: NextPage = () => {
  const { data } = useSWRImmutable<PageType>(
    "/api/pages/others/whos-who",
    fetcher
  );

  return (
    <Page title="Who is who">
      <Container>
        <PageTitle>Whos Who</PageTitle>
        <Content>
          <Content.FullWidth>
            <div className="mb-5">
              {data?.committees.map((detail) => (
                <div key={detail.title}>
                  <h2 className="mt-5 text-xl font-bold text-left text-gray-700 lg:text-3xl md:text-2xl">
                    {detail.title}
                  </h2>
                  <div className="grid grid-cols-2 gap-4 mt-3 lg:grid-cols-3 2xl:grid-cols-4">
                    {detail.staffs_ids.map((staff) => {
                      const s = data.staffs.find((s) => s.key === staff.key);

                      if (!s) {
                        return null;
                      }
                      return <UserProfileCard {...s} key={s.key} />;
                    })}
                  </div>
                </div>
              ))}
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;
