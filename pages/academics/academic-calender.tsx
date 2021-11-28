import { NextPage } from "next";
import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import PdfCard from "../../components/custom/PdfCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { FileType } from "../../server/db";
import { getFile } from "../../server/files";
import { getOther } from "../../server/other";

interface PageProps {
  description: string;
  files: string[];
  fileItems?: FileType[];
}


const CustomPage: NextPage<{ page: PageProps }> = ({ page }) => {
  return (
    <Page title="Academic Calender">
      <Container>
        <Content>
          <Content.FullWidth>
            <h1 className="my-5 text-3xl font-bold text-center">
              Academic Calender
            </h1>
            <p>{page.description}</p>
            <div className="my-5">
              <div className="flex p-5 border-blue-700 flex-warp rounder-lg">
                {page.fileItems?.map((ac) => (
                  <PdfCard {...ac} key={ac.key} />
                ))}
              </div>
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  );
};

export default CustomPage;

export async function getStaticProps() {
  const page = (await getOther("page-academic-calenders")) as PageProps;
  const files = page.files.map(async (file) => {
    return (await getFile(file)) as FileType;
  });
  page.fileItems = await Promise.all(files);

  return {
    props: {
      page,
    },
    revalidate: 600000,
  };
}
