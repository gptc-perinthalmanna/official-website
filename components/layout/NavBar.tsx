import React, { useState } from "react";
import { BiHomeSmile, BiGitBranch } from "react-icons/bi";
import {
  FaHandshake,
  FaArchive,
  FaIndustry,
  FaUsers,
  FaUserTie,
  FaUniversity,
  FaChalkboardTeacher,
  FaClinicMedical,
} from "react-icons/fa";
import {
  MdOutlineScreenSearchDesktop,
  MdWork,
  MdOutlineGppGood,
  MdHealthAndSafety,
  MdHistoryEdu,
  MdSignalWifiStatusbarConnectedNoInternet4,
} from "react-icons/md";
import {
  RiDownloadCloud2Line,
  RiServiceFill,
  RiParentFill,
  RiBuildingLine,
  RiWirelessChargingFill,
  RiBuilding2Line,
} from "react-icons/ri";
import {
  GiAmpleDress,
  GiCircuitry,
  GiGroundSprout,
  GiSchoolOfFish,
  GiArchiveResearch,
  GiGearHammer,
  GiFinishLine,
  GiDesk,
  GiRoundTable,
} from "react-icons/gi";
import {
  SiAdobeindesign,
  SiHandshake,
  SiGoogleclassroom,
} from "react-icons/si";
import {
  BsFillCalendarMonthFill,
  BsFillPatchQuestionFill,
  BsFillFileMedicalFill,
  BsBuilding,
  BsPatchQuestion,
} from "react-icons/bs";
import {
  HiSupport,
  HiBan,
  HiOutlineSpeakerphone,
  HiOutlineOfficeBuilding,
  HiInformationCircle,
} from "react-icons/hi";
import {
  GrUserWorker,
  GrWorkshop,
  GrCompliance,
  GrRestroomWomen,
} from "react-icons/gr";
import { IoDocumentAttach } from "react-icons/io5";
import { AiOutlineVideoCamera } from "react-icons/ai";
import Link from 'next/link'
import { IconType } from "react-icons";

type MenuItem = {
  name: string;
  icon: IconType;
  link?: string;
  children?: MenuSubItem[];
};

type MenuSubItem = {
  name: string;
  icon: IconType;
  description: string;
  link: string;
};

const _menu: MenuItem[] = [
  {
    name: "Home",
    icon: BiHomeSmile,
    link: "/",
  },
  {
    name: "College",
    icon: FaUniversity,
    children: [
      {
        name: "Breif History",
        icon: MdHistoryEdu,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Principal's Desk",
        icon: GiDesk,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Placement Officer's Desk",
        icon: GiRoundTable,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/placement-officers-desk"
      },
      {
        name: "Who's Who",
        icon: BsPatchQuestion,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/whos-who"
      },
      {
        name: "Industrial Relationships",
        icon: FaHandshake,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Press and Media",
        icon: AiOutlineVideoCamera,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/press-releases"
      },
      {
        name: "Right To Information",
        icon: HiInformationCircle,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/right-to-information"
      },
    ],
  },
  {
    name: "Departments",
    icon: BiGitBranch,
    children: [
      {
        name: "Electronics Department",
        icon: GiCircuitry,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/departments/electronics"
      },
      {
        name: "Civil Department",
        icon: BsBuilding,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Electrical Department",
        icon: RiWirelessChargingFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Mechanical Department",
        icon: GiGearHammer,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
    ],
  },
  {
    name: "Academics",
    icon: FaChalkboardTeacher,
    children: [
      {
        name: "Prospectus",
        icon: IoDocumentAttach,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
          link: "/college/breif-history"
      },
      {
        name: "Govt Institute for Fashion Designing",
        icon: GiAmpleDress,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
          link: "/college/breif-history"
      },
      {
        name: "Community Development Through Polytechincs",
        icon: FaHandshake,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
          link: "/college/breif-history"
      },
      {
        name: "Scholar Support Programme",
        icon: HiSupport,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
          link: "/college/breif-history"
      },

      {
        name: "Academic Calendar",
        icon: BsFillCalendarMonthFill,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
          link: "/college/breif-history"
      },

      {
        name: "Moodle LMS",
        icon: MdOutlineScreenSearchDesktop,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
          link: "/academics/moodle"
      },
    ],
  },
  {
    name: "Facilities",
    icon: MdOutlineGppGood,
    children: [
      {
        name: "Library",
        icon: GiArchiveResearch,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Health Centre",
        icon: MdHealthAndSafety,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Finishing School",
        icon: GiFinishLine,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Language Lab",
        icon: HiOutlineSpeakerphone,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Co-operative Society",
        icon: SiHandshake,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Internet Common Facility Centre",
        icon: MdSignalWifiStatusbarConnectedNoInternet4,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Womens Hostel",
        icon: GrRestroomWomen,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Staff Quaters",
        icon: FaChalkboardTeacher,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Auditorium",
        icon: SiGoogleclassroom,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Electronics Block",
        icon: HiOutlineOfficeBuilding,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Civil Block",
        icon: RiBuilding2Line,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Medical Facility",
        icon: FaClinicMedical,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
    ],
  },
  {
    name: "Campus",
    icon: RiBuildingLine,
    children: [
      {
        name: "Students Union",
        icon: FaUsers,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "National Service Scheme",
        icon: RiServiceFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Industrial Enterpernership Develepment Centre",
        icon: FaIndustry,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Boomithrasena Club",
        icon: GiGroundSprout,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Staff Club",
        icon: GrUserWorker,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Parents Teachers Association",
        icon: RiParentFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Greivence Redressal Committee",
        icon: GrCompliance,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Alumini",
        icon: GiSchoolOfFish,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Placement Cell",
        icon: MdWork,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Continuing Education Cell",
        icon: GrWorkshop,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Enterpenership Development Club",
        icon: FaUserTie,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Anti Ragging Committee",
        icon: HiBan,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
    ],
  },
  {
    name: "Archives",
    icon: GiArchiveResearch,
    children: [
      {
        name: "Downloads",
        icon: RiDownloadCloud2Line,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },

      {
        name: "Important GOs and Circulars",
        icon: BsFillFileMedicalFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "College Archives",
        icon: FaArchive,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Previous Question Papers",
        icon: BsFillPatchQuestionFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
      {
        name: "Design Files",
        icon: SiAdobeindesign,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
          link: "/college/breif-history"
      },
    ],
  },
];

function NavBar() {
  const [selectedMenu, setSelectedMenu] = useState<MenuSubItem[] | null>(null);

  return (
    <div>
      <nav className="shadow-md bg-gradient-to-r from-pink-700 to-pink-500 dark:bg-gray-800">
        <div className="px-0 mx-auto xl:container xl:px-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-row flex-wrap items-center lg:mx-8">
              {_menu.map((item, index) => (
                
                <NavItem
                  key={item.name}
                  icon={item.icon}
                  link={item.link}
                  onMouseEnter={() => {
                    if (item.children) {
                      setSelectedMenu(item.children);
                    } else {
                      setSelectedMenu(null);
                    }
                  }}
                >
                  {item.name}
                </NavItem>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`container mx-auto transition-all duration-700 ${
          selectedMenu ? "opacity-100" : "opacity-0"
        }`}
        onMouseLeave={() => {
          setSelectedMenu(null);
        }}
      >
        <div
          id="nav-menu-item-content"
          className="container absolute z-50 px-3 py-2 transition-all duration-700 border-2 border-red-100 rounded-b-2xl bg-red-50"
        >
          <div className="flex flex-wrap justify-start">
            {selectedMenu &&
              selectedMenu.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link href={item.link} key={item.name}>
                  <a
                   
                    className="flex items-center max-w-xs p-2 transition-all duration-300 ease-in-out rounded-lg cursor-pointer ring-pink-100 hover:ring-2 hover:bg-white"
                  >
                    <div className="mr-2 text-gray-700">
                      <Icon size={40} />
                    </div>
                    <div>
                      <div className="font-bold text-gray-700 text-md">
                        {item.name}
                      </div>
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </a>
                  </Link>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;

function NavItem({
  children,
  icon,
  link,
  ...props
}: {
  children: React.ReactNode;
  icon: IconType;
  link?: string;
  onMouseEnter?: () => void;
}): React.ReactElement<HTMLDivElement> {
  const Icon = icon;


  return (
    <Linked link={link}>
    <a
      className="flex items-center justify-around px-2 py-5 mx-2 text-sm font-medium text-gray-100 transition-colors duration-200 transform cursor-pointer hover:text-gray-200 dark:text-gray-200 hover:bg-pink-800"
      {...props}
    >
      <Icon /> <p className="ml-2">{children}</p>
    </a>
    </Linked>
  );
}


function Linked({children, link}: {children: React.ReactNode; link?: string}){
  if (link) {
    return (<Link href={link}>{children}</Link>)
  } 
  return <>{children}</>
}
