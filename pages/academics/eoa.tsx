import React from "react";
import { AiOutlineFilePdf } from "react-icons/ai";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import Link from "next/link";
import PdfCard from "../../components/custom/PdfCard";
import { PageTitle } from "../../components/layout/PageTitle";

const _eoa = [
  {
    title: "EOA 2021-22",
    url: "/pdf/EOA-Report-21-22.pdf",
    description:
      "Extention of Approval of AICTE for the extension of the duration of the programme from 2020-2021 to 2021-2022.",
  },
  {
    title: "EOA 2020-21",
    url: "/pdf/EOA-Report-20-21.pdf",
    description:
      "Extention of Approval of AICTE for the extension of the duration of the programme from 2020-2021 to 2021-2022.",
  },
];

export default function NextPage() {
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
                {_eoa.map((eoa) => (
                  <PdfCard key={eoa.title} {...eoa} />
                ))}
              </div>
            </div>
          </Content.FullWidth>
        </Content>
      </Container>
    </Page>
  );
}
