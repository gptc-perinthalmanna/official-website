import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import PageP from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";

const url = "/pdf/prospectus-2021-en.pdf";

export default function NextPage() {
  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
  const [numPages, setNumPages] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState(1);

  /*To Prevent right click on screen*/
  //   document.addEventListener("contextmenu", (event) => {
  //     event.preventDefault();
  //   });

  /*When document gets loaded successfully*/
  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <PageP title="Admission Prospectus">
      <Container>
        <Content>
          <Content.Half>
            <PageTitle className="text-center">
              Admission Prospectus
            </PageTitle>
            <p>
              The file below includes all details including Fees Charged,
              Reservation Policy, Admission Policy, Document Retention Policy
              published by State Board of Technical Education. Further details
              can be obtained from https://polyadmission.org
            </p>
            <div className="main">
              <Document
                className="w-full"
                file={url}
                onLoadSuccess={onDocumentLoadSuccess}
              >
                <Page pageNumber={pageNumber} />
              </Document>
              <nav
                aria-label="Pagination"
                className="flex items-center justify-center mb-4 text-gray-600"
              >
                <button
                  type="button"
                  disabled={pageNumber <= 1}
                  onClick={previousPage}
                  className="p-2 mr-4 rounded hover:bg-gray-100"
                >
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                Page {pageNumber || (numPages ? 1 : "--")} of {numPages || "--"}
                <button
                  type="button"
                  disabled={pageNumber >= numPages}
                  onClick={nextPage}
                  className="p-2 ml-4 rounded hover:bg-gray-100"
                >
                  {/* biome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </button>
              </nav>
            </div>
          </Content.Half>
          <Content.Half>
            <PageTitle className="text-center">Admission Process</PageTitle>
            <p>
              Polytechnic Admission process is automated and conducted through a
              web based single window system. Application, design, development
              and implementation of the admission process are handled by
              Curriculum Development Centre by the in-house development team.
              The Centre has coordinated the admission process since 2008-2009.
              Initially a Desktop application was developed and installed in all
              the Nodal Polytechnic Colleges. Later the admission software was
              upgraded into a fully web based software in 2010-2011. The
              software is refined every year with new features and modules. This
              year we have incorporated the SSLC database with the admission
              software for getting SSLC marks and student details automatically.
              The software interfaces are user-friendly and simple, for ease of
              access to candidates. The continuous support, feedback and
              encouragement received from all stakeholders have helped us to
              improve the system tremendously. The software was designed by the
              Project Officer, SITTTR.
            </p>
            <div className="my-4" />
            <a className="font-bold hover:text-blue-800" href="https://polyadmission.org" > Visit the Single Window admission portal </a>
          </Content.Half>
        </Content>
      </Container>
    </PageP>
  );
}
