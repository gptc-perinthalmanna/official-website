import { NextPage } from "next";
import { BsFillCheckCircleFill } from "react-icons/bs";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";

const _courses = [
  {
    title:
      "Professional Diploma in Industrial Instrumentation & Fire and and Safety",
    duration: "1 Year",
    fee: "28000",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
    topics: [
      "Industrial Automation",
      "Pressure/Temperature/level/flow Measurements",
      "Instrument installation and Erection Hardware",
      "Fire & Safety",
    ],
  },
  {
    title: "Professional Diploma in Industrial  Electrical  Engineering (PDIE)",
    duration: "1 Year",
    fee: "28000",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
    topics: [
      "Electricity",
      "Power System",
      "Electrical Installation& Estimating",
      "Basic Electronics",
      "Digital Electronics",

      "Electrical Machine",
    ],
  },
  {
    title: "Professional Diploma in Shipping and Logistics (PDSL)",
    duration: "1 Year",
    fee: "28000",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
    topics: [
      "Transportation, Distribution Management",
      "Warehouse and Inventory Management",
      "Supply Chain Management",
      "Export Documentation",
    ],
  },
  {
    title:
      "Professional Diploma in Mechanical and Automobile Engineering (PDMAE)",
    duration: "1 Year",
    fee: "28000",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
    topics: [
      "Diesel Engine",
      "Petrol Engine",
      "Two Stroke & Four Stroke",
      "Comparison of Two Wheeler & Four Wheeler",
      "Study of Auto Electrical System",
      "Transmission System",
    ],
  },
  {
    title: "Certificate course in Auto CAD",
    duration: "3 Months",
    fee: "3000",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "ITI/Diploma",
  },
  {
    title: "Certificate course in Total Station Survey",
    duration: "3 Months",
    fee: "6000",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
  },
  {
    title: "Certificate course in Refrigeration and Air conditioning",
    duration: "6 Months",
    fee: "8500",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
  },
  {
    title: "Certificate course in Electrical Wiring",
    duration: "10 Months",
    fee: "8500",
    certification: "Center for continuing Education Kerala, Thiruvanathapuram",
    eligibility: "SSLC",
  },
];

const CustomPage: NextPage = () => (
  <Page title="Page Title">
    <CoverImage source="/images/cecell.jpg" title="Continuing Education Cell" />
    <Container>
      <Content>
        <Content.Half>
          <p className="my-2">
            <h2 className="mt-3 mb-2 text-xl font-bold">About</h2>
            Centre for Continuing Education Kerala is an autonomous body
            established by Govt.of Kerala under Higher Education Department
            promote Continuing Education programmes in Engineering colleges,
            Arts & Science Colleges and Polytechnic Colleges. This Sub centre
            provides skill training to enhance career opportunities of
            unemployed youth in India and abroad.
          </p>
        </Content.Half>
        <Content.Half>
          <h2 className="mt-3 mb-2 text-xl font-bold">Contact Details</h2>
          <p className="text-sm">
            CONTINUING EDUCATION SUB CENTRE (Reg.No: CE/P-128/2000 under CCEK,
            Thiruvananthapuram) <br />
            ANGADIPPURAM (PO), MALAPPURAM (DT)KERALA-679321
            <br />
            <strong>PHONE NO:</strong>
            04933 228045
            <br />
            <strong>Email:</strong> cecellpmna@gmail.com
          </p>
        </Content.Half>
        <Content.FullWidth>
          <PageTitle>Course Details</PageTitle>
          <div className="flex flex-wrap">
            {_courses.map((course) => (
              <div key={course.title} className="w-full h-full px-2 lg:w-1/2">
                <div className="p-3 my-2 border-2 rounded-md shadow-md ">
                  <h2 className="text-xl font-bold">{course.title}</h2>
                  <p className="font-bold text-gray-700">
                    Duration:
                    <span className="ml-1 font-normal text-gray-600">
                      {course.duration}
                    </span>
                  </p>
                  <p className="font-bold text-gray-700">
                    Eligibility:
                    <span className="ml-1 font-normal text-gray-600">
                      {course.eligibility}
                    </span>
                  </p>
                  <p className="font-bold text-gray-700">
                    Course Fee:
                    <span className="ml-1 font-normal text-gray-600">
                      {course.fee}
                    </span>
                  </p>
                  <p className="font-bold text-gray-700">
                    Certification:
                    <span className="ml-1 font-normal text-gray-600">
                      {course.certification}
                    </span>
                  </p>
                  {course.topics && (
                    <>
                      <h4 className="font-bold text-gray-600 ">
                        Topic Included:
                      </h4>
                      <ul className="pt-2 pl-4 space-y-2 list-disc">
                        {course.topics.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-start pt-0 mt-0"
                          >
                            <span className="flex items-center">
                              <BsFillCheckCircleFill
                                size={20}
                                className="flex-shrink-0 text-teal-500"
                              />
                            </span>
                            <p className="ml-2">{topic}</p>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
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
