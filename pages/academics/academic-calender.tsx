import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import PdfCard from "../../components/custom/PdfCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";

const _ac = [
  {
    title: "Academic Calender S2",
    url: "/pdf/Academic-Calendar-2021-S2.pdf",
    description:
      "Academic Calender for S2 students - 2021",
  },
  {
    title: "Academic Calender S3",
    url: "/pdf/Academic-Calendar-2021-S3.pdf",
    description:
      "Academic Calender for S3 students - 2021",
  },
  {
    title: "Academic Calender S5",
    url: "/pdf/Academic-Calendar-2021-S5.pdf",
    description:
      "Academic Calender for S5 students - 2021",
  },
];

export default function NextPage() {
  return (
    <Page title="Academic Calender">
      <Container>
        <Content>
          <Content.FullWidth>
            <h1 className="my-5 text-3xl font-bold text-center">
              Academic Calender
            </h1>
            <p>
              
Academic calendars are systems by which you define the landmark dates that drive much of the day-to-day business at the academic institution. Each academic calendar contains cancel, withdrawal, and drop deadlines along with other landmark dates that vary, depending on the academic calendar type. 
            </p>
            <div className="my-5">
              <div className="flex p-5 border-blue-700 flex-warp rounder-lg">
                {_ac.map((ac) => (
                 <PdfCard key={ac.title} {...ac} />
                ))}
              </div>
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  );
}
