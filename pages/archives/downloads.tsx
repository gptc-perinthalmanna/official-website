import type { NextPage } from "next";
import useSWR from "swr";

import PdfCard from "../../components/custom/PdfCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import { fetcher } from "../../server/calls";
import type { FileType } from "../../server/db";

const FileContainer = () => {
  const { data, error } = useSWR<FileType[]>(
    "/api/files/tag/downloads",
    fetcher
  );

  if (!data) return <div />;
  if (error) return <div>failed to load</div>;

  return (
    <>
      {data.map((file) => (
        <PdfCard {...file} key={file.key} />
      ))}
    </>
  );
};

const CustomPage: NextPage = () => {
  return (
    <Page title="Downloads">
      <Container>
        <PageTitle>Downloads</PageTitle>
        <Content>
          <Content.FullWidth>
            <div className="min-h-[350px]">
              <div className="flex flex-wrap">
                <FileContainer />
              </div>
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;
