import type { NextPage } from "next";
import Page from "../../components/layout/Page";
import Divider from "../../components/ui/Divider";
import { H1, H2 } from "../../components/ui/Heading";
import Paragraph from "../../components/ui/Paragraph";
import Table from "../../components/ui/Table";


const courses_offered = [
  {
    name: "Electronics Engineering",
    year: "1987",
    intake: "70",
    level: "Diploma",
    duration: "3 Years"
  },
  {
    name: "Mechanical Engineering",
    year: "1961",
    intake: "70",
    level: "Diploma",
    duration: "3 Years"
  },
  {
    name: "Civil Engineering",
    year: "1961",
    intake: "70",
    level: "Diploma",
    duration: "3 Years"
  },
  {
    name: "Electrical and Electronics Engineering",
    year: "1961",
    intake: "70",
    level: "Diploma",
    duration: "3 Years"
  },
 
]

const BreifHistory: NextPage = () => (
  <Page title="Breif History of Govt Polytechnic College, Perinthalmanna" desc="Breif history of the college since it is started on 1981." >
    <div className="container mx-auto">
      {/* TODO : Cover Image */}
      <H1>Breif History</H1>
      <Paragraph className="">
        Government Polytechnic College, Perinthalmanna was established in the
        year 1961 under the Directorate of Technical Education, Govt. of Kerala
        with a noble vision of empowering the people by offering good quality
        technical education. This Polytechnic College is approved by the AICTE,
        New Delhi and offers four diploma programs in engineering viz. Civil,
        Mechanical, Electrical and Electronics and Electronics engineering.
      </Paragraph>
      <Paragraph>
        This Polytechnic College is located at Angadippuram in Perinthalmanna
        Taluk, Malappuram District which is identified as one of the backward
        districts by the Govt. of Kerala. Situated near the Angadippuram railway
        station and by the National Highway 213, it is spread in 8.73 hectares
        (21.57 acres) of land of panoramic greenery. The Govt. Polytechnic
        College made a humble beginning in 1961 with three year diploma courses
        in Civil, Mechanical and Electrical engineering. The Electronics
        Engineering department was added later in 1987. In view of fifty seven
        years of exemplary performance, this college has become a centre of
        excellence and is one of the most reputed institutions in Kerala. Apart
        from the regular courses, add on courses and vocational courses are
        offered here. The CPS (Community Polytechnic Scheme), founded in 1978
        under the patronage of Ministry for Human Resource Development, which is
        renamed as CDTP (Community Development through Polytechnic) during
        2009-10 offers free vocational training and imparts technical knowhow to
        youngsters who are unable to enjoy the benefits of formal education
        through various sub centers. Our college was established as a sub centre
        of Kerala continuing Education in 2001. The Tuition Fee Waver Program of
        the AICTE has been implemented here which provides a reservation of ten
        percent of the total seats of every branch to female students, the
        financially backward whose annual income is below Rs 2,50,000 and the
        physically challenged. The TGMT Centre(Institute of Fashion Designing
        and Technology) at Mankada, a venture of the Technical Education
        Department, functioning under the guidance and control of this
        institution, offers two year free training programs to girl students and
        10% of the total seats is reserved for male students who have passed
        SSLC and provides certificates of KGT (Ten) Lower and KGT (Ten) Higher.
        The Lump sum Grant stipend of the SC/ST Development Department is
        offered for SC/ST candidates. An Institution Project Implementation Unit
        has been formed with a view of bringing all round development in the
        institution. An anti-ragging Committee has also been formed to control
        the menace of ragging and to reduce the grievances of students regarding
        it. Departmental committee is formed in each discipline for the benefit
        of the students. Evening Polytechnic scheme was started in all branches
        in 2012-13 academic year. Community College Education & Research Scheme
        was started in 2015 for awarding vocational diploma. A separate block
        for Electronics Department was inaugurated in 2015.The college library
        was shifted to a new well furnished and spacious building in 2016.For
        the convenience of female staff and students separate rest rooms have
        been constructed. The construction of a new civil block is under
        progress and is expected to be completed soon. Since 2017, a well
        equipped fitness centre has started functioning in the Department of
        Physical Education.
      </Paragraph>
      <Paragraph>
        The future is definitely foreseen by taking in to consideration the
        pitfalls and short comings of the present in order to avo id the same in
        the future. The needs of the present may be obsolete in the future. So
        only a vision that can inculcate the needs and aspiration of the future
        generation can help the polytechnic to have an abiding stance in the
        coming years in the realm of the technical know how of our country.
      </Paragraph>

          <Divider />
          <H2 className="mb-2"> Programs offered </H2>
      <Table>
        <Table.Header>
          <Table.HeadCol> Title of programs	 </Table.HeadCol>
          <Table.HeadCol> Level </Table.HeadCol>
          <Table.HeadCol> Duration </Table.HeadCol>
          <Table.HeadCol> Year of starting </Table.HeadCol>
          <Table.HeadCol> Sanctioned annual intake</Table.HeadCol>
        </Table.Header>
        <Table.Body>
          {courses_offered.map(course => (
            <Table.Row key={course.name}>
            <Table.Col>
                  <div className="flex items-center ml-4 text-sm font-medium text-gray-900">
                    {course.name}
                  </div>
            </Table.Col>
            <Table.Col>
              <div className="text-sm text-gray-500">Engineering</div>
              <div className="text-sm text-gray-900">{course.level}</div>
            </Table.Col>
            <Table.Col>{course.duration}</Table.Col>
            <Table.Col>{course.year}</Table.Col>
            <Table.Col>{course.intake}</Table.Col>
          </Table.Row>
          ))}
          
        </Table.Body>
      </Table>
      <Divider/>
    </div>
  </Page>
);

export default BreifHistory;
