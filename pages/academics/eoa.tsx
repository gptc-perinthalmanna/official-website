import React from "react";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import PdfCard from "../../components/custom/PdfCard";
import { PageTitle } from "../../components/layout/PageTitle";
import type { NextPage } from "next";
import type { FileType } from "../../server/db";
import useSWR from "swr";
import { fetcher } from "../../server/calls";

const CustomPage: NextPage = () => {
  const { data } = useSWR<FileType[]>(
    "/api/files/tag/extension-of-approval",
    fetcher
  );
  return (
    <Page title="AICTE Extention of Approval">
      <Container>
        <Content>
          <Content.FullWidth>
            <PageTitle className="text-center">
              AICTE Extention of Approval
            </PageTitle>
            <p>
              “EoA” means Extension of Approval granted by AICTE for the conduct
              of Technical Programme(s)/ Course(s) to an Institution for that
              Academic Year. “Extended EoA” means Extension of Approval granted
              by AICTE for the conduct of Technical Programme(s)/ Course(s) to
              an Institution for more than one Academic Year. As defined in the
              AICTE act 1987, Technical Education means programs, of Education,
              Research, and training in Engineering and Technology,
              Architecture, Town Planning, Management, Pharmacy, and Applied
              Arts and Crafts, and such other programs or areas as the Central
              Government may in consultation with the Council, by notification
              in the official gazette declare.{" "}
            </p>
            <div className="my-5">
              <div className="flex p-5 border-blue-700 flex-warp rounder-lg">
                {data?.map((eoa) => <PdfCard {...eoa} key={eoa.key} />)}
              </div>
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  );
};
export default CustomPage;
