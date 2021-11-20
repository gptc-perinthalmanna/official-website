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
      },
      {
        name: "Principal's Desk",
        icon: GiDesk,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Placement Officer's Desk",
        icon: GiRoundTable,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Who's Who",
        icon: BsPatchQuestion,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Industrial Relationships",
        icon: FaHandshake,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Press and Media",
        icon: AiOutlineVideoCamera,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Right To Information",
        icon: HiInformationCircle,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
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
      },
      {
        name: "Civil Department",
        icon: BsBuilding,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Electrical Department",
        icon: RiWirelessChargingFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Mechanical Department",
        icon: GiGearHammer,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
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
      },
      {
        name: "Govt Institute for Fashion Designing",
        icon: GiAmpleDress,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
      },
      {
        name: "Community Development Through Polytechincs",
        icon: FaHandshake,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
      },
      {
        name: "Scholar Support Programme",
        icon: HiSupport,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
      },

      {
        name: "Academic Calendar",
        icon: BsFillCalendarMonthFill,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
      },

      {
        name: "Moodle LMS",
        icon: MdOutlineScreenSearchDesktop,
        description:
          "Govt Polytechnic College Perinthalmanna is one of the leading institutions of its kind in Kerala.",
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
      },
      {
        name: "Health Centre",
        icon: MdHealthAndSafety,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Finishing School",
        icon: GiFinishLine,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Language Lab",
        icon: HiOutlineSpeakerphone,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Co-operative Society",
        icon: SiHandshake,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Internet Common Facility Centre",
        icon: MdSignalWifiStatusbarConnectedNoInternet4,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Womens Hostel",
        icon: GrRestroomWomen,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Staff Quaters",
        icon: FaChalkboardTeacher,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Auditorium",
        icon: SiGoogleclassroom,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Electronics Block",
        icon: HiOutlineOfficeBuilding,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Civil Block",
        icon: RiBuilding2Line,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Medical Facility",
        icon: FaClinicMedical,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
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
      },
      {
        name: "National Service Scheme",
        icon: RiServiceFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Industrial Enterpernership Develepment Centre",
        icon: FaIndustry,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Boomithrasena Club",
        icon: GiGroundSprout,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Staff Club",
        icon: GrUserWorker,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Parents Teachers Association",
        icon: RiParentFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Greivence Redressal Committee",
        icon: GrCompliance,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Alumini",
        icon: GiSchoolOfFish,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Placement Cell",
        icon: MdWork,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Continuing Education Cell",
        icon: GrWorkshop,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Enterpenership Development Club",
        icon: FaUserTie,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Anti Ragging Committee",
        icon: HiBan,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
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
      },

      {
        name: "Important GOs and Circulars",
        icon: BsFillFileMedicalFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "College Archives",
        icon: FaArchive,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Previous Question Papers",
        icon: BsFillPatchQuestionFill,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
      {
        name: "Design Files",
        icon: SiAdobeindesign,
        description:
          "Here we teaches and manages about the fastest growing techs in the world",
      },
    ],
  },
];

function NavBar() {
  const [selectedMenu, setSelectedMenu] = useState<MenuSubItem[] | null>(null);

  return (
    <div>
      <nav className="bg-gradient-to-r from-pink-700 to-pink-500 shadow-md dark:bg-gray-800">
        <div className="container lg:px-6 sm:px-0 mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex flex-row flex-wrap items-center mx-8">
              {_menu.map((item, index) => (
                <NavItem
                  key={item.name}
                  icon={item.icon}
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
          className="absolute container z-50 py-2 px-3 transition-all duration-700  border-2 rounded-b-2xl border-red-100 bg-red-50"
        >
          <div className="flex flex-wrap justify-start">
            {selectedMenu &&
              selectedMenu.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.name}
                    className="max-w-xs p-2 cursor-pointer ring-pink-100 hover:ring-2 transition-all ease-in-out duration-300 hover:bg-white flex items-center rounded-lg"
                  >
                    <div className="text-gray-700 mr-2">
                      <Icon size={40} />
                    </div>
                    <div>
                      <div className="text-md font-bold text-gray-700">
                        {item.name}
                      </div>
                      <p className="text-xs text-gray-600">
                        {item.description}
                      </p>
                    </div>
                  </a>
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
  ...props
}: {
  children: React.ReactNode;
  icon: IconType;
  onMouseEnter?: () => void;
}): React.ReactElement<HTMLDivElement> {
  const Icon = icon;
  return (
    <div
      className="px-2 py-5 flex items-center cursor-pointer justify-around mx-2 text-sm font-medium text-gray-100 hover:text-gray-200 transition-colors duration-200 transform dark:text-gray-200 hover:bg-pink-800"
      {...props}
    >
      <Icon /> <p className="ml-2">{children}</p>
    </div>
  );
}
