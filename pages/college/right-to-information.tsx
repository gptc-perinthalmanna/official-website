import { NextPage } from "next";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import { H2 } from "../../components/ui/Heading";
import Table from "../../components/ui/Table";

const _staffs = [
  {
    name: "Vinod K",
    designation: "Senior Suprentedent",
    authority: "Public Information Officer",
    mobile: "9446321059",
    email: "vinodkorambayil@gmail.com",
  },
  {
    name: "C.T. SREEDEVI",
    designation: "Head accountant",
    authority: "Assistant information officer",
    mobile: "9446531847",
    email: "ctsreedevi@gmail.com",
  },
  {
    name: "Pradeep K",
    designation: "Principal",
    authority: "Appelate Author",
    mobile: "9446321059",
    email: "vinodkorambayil@gmail.com",
  },
];

const CustomPage: NextPage = () => (
  <Page title="Right to Information">
    <Container>
      <PageTitle>Right to Information Act, 2005</PageTitle>
      <Content>
        <Content.FullWidth>
          <div className="border-2 border-gray-900 rounded-xl text-lg leading-8 my-4 p-6 bg-indigo-200">
            <H2>Know the Act</H2>
            <p>
              An Act to provide for setting out the practical regime of right to
              information for citizens to secure access to information under the
              control of public authorities, in order to promote transparency
              and accountability in the working of every public authority, the
              constitution of a Central Information Commission and State
              Information Commissions and for matters connected therewith or
              incidental thereto. WHEREAS the Constitutions of India has
              established democratic Republic; AND WHEREAS democracy requires an
              informed citizenry and transparence of information which are vital
              to its functioning and also to contain corruption and to hold
              Governments and their instrumentalities accountable to the
              governed; AND WHEREAS revelation of information in actual practice
              is likely to conflict with other public interests including
              efficient operations of the Governments, optimum use of limited
              Fiscal resources and the Preservation of confidentiality of
              sensitive information; AND WHEREAS it is necessary to harmonies
              these conflicting interests while preserving the paramountcy of
              the democratic ideal; Now, THEREFORE, it is expedient to provide
              for furnishing certain information to citizens who desire to have
              it.
            </p>
          </div>
          <div>
          <H2>Staffs in Charge</H2>
            <p>
              Three staff members are appointed for executing the Right to
              Information Act,2005 in this institution. The Head of Section in
              Mechanical Engg. sri. Asok Kumar P. is the Public Information
              Officer.Senior clerk is the Asst. Information Officer and the
              Moderator handling the inward section.
            </p>
          </div>
          <div className="py-3 mb-6">
              
            <Table>
              <Table.Header>
                <Table.HeadCol> Authority </Table.HeadCol>
                <Table.HeadCol> Name </Table.HeadCol>
                <Table.HeadCol> Designation </Table.HeadCol>
                <Table.HeadCol> Mobile </Table.HeadCol>
                <Table.HeadCol> Email</Table.HeadCol>
              </Table.Header>
              <Table.Body>
                {_staffs.map((staff) => (
                  <Table.Row key={staff.name}>
                    <Table.Col>
                      <div className="flex items-center ml-4 text-sm font-medium text-gray-900">
                        {staff.authority}
                      </div>
                    </Table.Col>
                    <Table.Col>{staff.name}</Table.Col>
                    <Table.Col>{staff.designation}</Table.Col>
                    <Table.Col>{staff.mobile}</Table.Col>
                    <Table.Col>{staff.email}</Table.Col>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table>
          </div>
        </Content.FullWidth>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;
