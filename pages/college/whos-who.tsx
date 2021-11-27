import { NextPage } from "next";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import { UserType } from "../../server/db";
import { getOther } from "../../server/other";
import { getUser } from "../../server/users";

interface Committee {
  title: string;
  staffs_ids: string[];
}

interface PageType {
  committees: Committee[];
  staffs: { [key: string]: UserType };
}

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => (
  <Page title="Who is who">
    <Container>
      <PageTitle>Whos Who</PageTitle>
      <Content>
        <Content.FullWidth>
          <div className="mb-5">
            {page.committees.map((detail) => (
              <div key={detail.title}>
                <h2 className="mt-5 text-xl font-bold text-left text-gray-700 lg:text-3xl md:text-2xl">
                  {detail.title}
                </h2>
                <div className="grid grid-cols-2 gap-4 mt-3 lg:grid-cols-3 2xl:grid-cols-4">
                  {detail.staffs_ids.map((staff) => (
                    <UserProfileCard  {...page.staffs[staff]} key={page.staffs[staff].key} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Content.FullWidth>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;

export async function getStaticProps() {
  const page = (await getOther("who-is-who")) as PageType;
  let unresolvedpromises: any;
  let staffs: { [key: string]: UserType } = {};
  page.committees.forEach((committee) => {
    unresolvedpromises = committee.staffs_ids.map(async (staff_id) => {
      if (staffs[staff_id]) return null;
      const user = await getUser(staff_id);
      if (user) {
        staffs[user.key] = user;
      }
      return user;
    });
  });

  if (unresolvedpromises) await Promise.all(unresolvedpromises);
  
  return {
    props: {
      page: { ...page, staffs },
    },
    // Next.js will attempt to re-generate the page:
    // - When a request comes in
    // - At most once every 10 seconds
    revalidate: 600000, // In seconds
  };
}
