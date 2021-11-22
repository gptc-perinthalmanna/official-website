import { NextPage } from "next";
import PdfCard from "../../components/custom/PdfCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";

const _designFIles = [
  {
    title: "Rules and Regulations For Diploma programmes",
    description: "124KB | PDF",
    url: "https://www.gptcperinthalmanna.in/wp-content/gallery/Downloads/students%20downloads/academic/rules.pdf",
  },
  {
    title: "Semester Registration - tekerala.org",
    description: "143KB | PDF",
    url: "https://tekerala.org/student_detailss/index.php"
  },
  {
    title: "Academic Calender 2019-20 Even Semester",
    description: "143KB | PDF",
    url: "https://www.gptcperinthalmanna.in/wp-content/uploads/2019/12/Academic_Calender_2019even.pdf"
  },
  {
    title: "Exam Manual",
    description: "143KB | PDF",
    url: "https://tekerala.org/index.php"
  },
];

const CustomPage: NextPage = () => (
  <Page title="Design Files">
    <Container>
      <PageTitle>Design Files</PageTitle>
      <Content>
        <Content.FullWidth>
          <div className="flex flex-wrap">
            {_designFIles.map((file) => (
              <PdfCard key={file.title} {...file} />
            ))}
          </div>
        </Content.FullWidth>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
