import type { NextPage } from "next";
import React from "react";
import PdfCard from "../../components/custom/PdfCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import type { FileType } from "../../server/db";




const CustomPage: NextPage = () => {
  return (
    <Page title="Academic Calender">
      <Container>
        <Content>
          <Content.FullWidth>
            <h1 className="my-5 text-3xl font-bold text-center">
              Academic Calender
            </h1>
            <p>Academic calendars are systems by which you define the landmark dates that drive much of the day-to-day business at the academic institution. Each academic calendar contains cancel, withdrawal, and drop deadlines along with other landmark dates that vary, depending on the academic calendar type.

</p>
            <div className="my-5">
              <div className="flex p-5 border-blue-700 flex-warp rounder-lg">
                {[].map((ac: FileType) => (
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

