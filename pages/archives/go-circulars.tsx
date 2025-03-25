import type { NextPage } from "next";
import useSWR from "swr";
import LinkCard from "../../components/custom/LinkCard";
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

const _links = [
    {
        title: "Department Circulars from DTE,Thiruvananthapuram",
        url: "http://www.dtekerala.gov.in/index.php/en/extensions/circulars",
    },
    {
        title: "Department Orders by DTE,Thiruvananthapuram",
        url: "http://www.dtekerala.gov.in/index.php/en/extensions/department-orders",
    },
    {
        title: "Transfer Orders-General Transfer",
        url: "http://www.dtekerala.gov.in/index.php/en/extensions/transfer-orders",
    },
    {
        title: "Govt. Orders through DTE",
        url: "http://www.dtekerala.gov.in/index.php/en/extensions/government-orders",
    },
    {
        title: "Govt.Order-delegation of financial power to various officers under T.Edn Dept",
        url: "https://www.gptcperinthalmanna.in/wp-content/gallery/Downloads/Announcement%20from%20DTE/Govt.Order-delegation%20of%20financial%20power%20to%20various%20officers%20under%20T.Edn%20Dept.pdf",
    },
    {
        title: "II-proceedings from DTE- REGARDING FINISHING SCHOOL PROGRAMME",
        url: "https://www.gptcperinthalmanna.in/wp-content/gallery/Downloads/Announcement%20from%20DTE/45.pdf",
    },
    {
        title: "Guidelines for appointment of Guest Trade Instructor and Tradesman. Date.02-06-2017",
        url: "https://www.gptcperinthalmanna.in/wp-content/gallery/Downloads/Announcement%20from%20DTE/Guidelines%20for%20appointment%20of%20Guest%20Trade%20Instructor%20and%20Tradesman%20in%20Government%20Polytechnics%20-%20Orders%2002-06-2017.pdf",
    },
    {
        title: "Appointment of Guest Faculty on Daily Wages as per the Workload – Permission Granted – Orders,",
        url: "https://www.gptcperinthalmanna.in/wp-content/gallery/Downloads/Announcement%20from%20DTE/45.pdf",
    },
]

const CustomPage: NextPage = () => (
  <Page title="Govt Orders and Circulars">
    <Container>
      <PageTitle>Important Links</PageTitle>
      <Content>
        <Content.FullWidth>
          <div className="flex flex-wrap">
            {_links.map((file) => (
              <LinkCard key={file.title} {...file} />
            ))}
          </div>
        </Content.FullWidth>
      </Content>
      <Content>
        <PageTitle>Govt Orders and Circulars</PageTitle>
        <Content.FullWidth>
          <div className="flex flex-wrap">
            <FileContainer />
          </div>
        </Content.FullWidth>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
