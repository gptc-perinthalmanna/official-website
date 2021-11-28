import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { RiAlarmWarningFill } from "react-icons/ri";
import ImagePost from "../../components/custom/ImagePost";
import UserProfileCard from "../../components/custom/UserProfileCard";
import Container from "../../components/layout/Container";
import Content from "../../components/layout/Content";
import CoverImage from "../../components/layout/CoverImage";
import Page from "../../components/layout/Page";
import { PageTitle } from "../../components/layout/PageTitle";
import PhotoGallery from "../../components/widgets/PhotoGallery";
import { UserType } from "../../server/db";
import { getFacilities } from "../../server/pages";

interface PageType {
  title: string;
  about: string;
  cover: string;
  staffs?: UserType[];
  photos?: PhotoType[];
}


interface PhotoType {
  src: string;
  alt: string;
}

const CustomPage: NextPage<{ page: PageType }> = ({ page }) => (
  <Page title="Advanced Library">
    <CoverImage source={page.cover} title="Advanced College Library" />
    <Container>
      <PageTitle>The Library</PageTitle>
      <Content>
        <Content.Left>
          <div>
            <p> {page.about}  </p>
          </div>
          <div>
            <PageTitle>Staffs</PageTitle>
            <div className="grid grid-cols-2 gap-4 my-3 lg:grid-cols-2 2xl:grid-cols-3">
              {page.staffs?.map((staff) => (
                <UserProfileCard {...staff} key={staff.key} />
              ))}
            </div>
          </div>
          <div>
            <div className="p-5 my-3 border-2 border-teal-500">
                <PageTitle>Library Rules</PageTitle>
              <ul>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  A student can borrow a book for the duration of 7 days and a
                  staff member for 30 days. The books may be reissued to the
                  bearer after their surrender of the books on the due date.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  Every book borrowed from the library should be returned on the
                  date marked on the date slip. It will be reissued to the same
                  student for a further period of 7 days if it has not been
                  applied for by other students in the mean time. The book
                  should be shown to the Librarian at the time of renewable.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  Students are prohibited from sub-lending the books.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  The librarian may recall any book at any time even before the
                  expiry of the normal period of lending.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  Absence from the college will not be ordinarily admitted as an
                  excuse for delay in returning the books on the due date.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  If a student fails to return a book on the due date, a fine
                  Rs.10/- for the first day and Rs.2/- for each day will be
                  levied. Sundays and holidays are excluded.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  A student, who fails to return the borrowed library book or to
                  pay the fine in due time, will be liable to disciplinary
                  action.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  Books will be issued only on presentation of the identity card
                  and library card bearing the name, class, departmental number
                  and signature of the student. In case the card is lost the
                  Librarian should be informed at once. No one is allowed to
                  borrow books by producing other’s library card. A lost card
                  may be replaced by a duplicate card after one month on payment
                  of Rs.100/-
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  A Student who wishes to borrow a book shall fill in an
                  application from and present it at the counter between
                  12.15p.m and 1.45p.m Reference books or journals will not be
                  lent out. Books can be returned between 9.00am to 5.00pm.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  A Student on receiving the book must examine it and report to
                  the Librarian if any damage is found therein. Otherwise he
                  will be held responsible for any damage that may afterwards be
                  detected.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  Students are required to use all library books with care.
                  Disciplinary action will be taken against the students
                  damaging the books in any manner.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  A book returned to the library should contain return slip
                  showing the roll number of the student and the catalogue
                  number of the book.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  Application must be made in the prescribed form for borrowing
                  of reference books, journals etc.
               </p> </li>
                 <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
                <p>  A student who has lost a book shall make a written report of
                  it to the Librarian immediately. The lost book must be
                  replaced by a new one before the date specified by the
                  Librarian. Besides, any fine imposed by the Principal should
                  be paid by the student who has lost the book.
               </p> </li>
                <li className="flex leading-6 text-gray-700 font-sm"><RiAlarmWarningFill size={20} className="flex-none mr-2" />
               <p>   We are subscribing several scientific journals National and
                  International.
               </p> </li>
              </ul>
            </div>
          </div>
        </Content.Left>
        <Content.Right>
          <div>
            <PhotoGallery />
          </div>

        </Content.Right>
      </Content>
    </Container>
  </Page>
);

export default CustomPage;



export const getStaticProps: GetStaticProps<{}, { [key: string]: string }> =
  async () => {
    const page = await getFacilities('library');
    console.log("Done!");
    return {
      props: {
        page: page,
      },
      revalidate: 6000,
    };
  };

