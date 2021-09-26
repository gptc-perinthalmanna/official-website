import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  IconPhone,
  IconAward,
  IconHome,
  IconAffiliate,
  IconDownload,
  IconBuildingFortress,
  IconBook,
} from "@tabler/icons"

import { Nav, Navbar, NavDropdown } from "react-bootstrap"

type SubMenuType = {
  title: string
  link: string
}

type MenuType = {
  title: string
  link?: string | undefined
  dropdown: boolean
  icon: JSX.Element
  child?: SubMenuType[]
}

const DATA: MenuType[] = [
  {
    title: "home",
    link: "/",
    dropdown: false,
    icon: <IconHome />,
  },
  {
    title: "Departments",
    dropdown: true,
    icon: <IconAffiliate />,
    child: [
      {
        title: "Civil Engineering",
        link: "/departments/civil-engineering",
      },
      {
        title: "Mechanical Engineering",
        link: "/departments/Mechanical-engineering",
      },
      {
        title: "Electrical and Electronics Engineering",
        link: "/departments/electrical-and-electronics-engineering",
      },
      {
        title: "Electronics Engineering",
        link: "/departments/electronics-engineering",
      },
      { title: "General Department", link: "/general-department" },
      { title: "Office", link: "/departments/office-section" },
    ],
  },
  {
    title: "Academics",
    dropdown: true,
    icon: <IconBook />,
    child: [
      {
        title: "Faculty and Staffs",
        link: "/faculty",
      },
      {
        title: "Academic Calendar",
        link: "/calendar",
      },
      {
        title: "Prospectus",
        link: "/prospectus",
      },
    ],
  },
  {
    title: "Facilites",
    dropdown: true,
    icon: <IconBuildingFortress />,
    child: [
      {
        title: "Advanced Library",
        link: "/to-be-done",
      },
      {
        title: "Health Centre",
        link: "/to-be-done",
      },
      {
        title: "Finishing School",
        link: "/to-be-done",
      },
      {
        title: "Co-operative Society",
        link: "/to-be-done",
      },
      {
        title: "Internet Common Facility Centre",
        link: "/to-be-done",
      },
      {
        title: "Womens Hostel",
        link: "/to-be-done",
      },
      {
        title: "Staff Quaters",
        link: "/to-be-done",
      },
      {
        title: "Auditorium",
        link: "/to-be-done",
      },
      {
        title: "Electronics Block",
        link: "/to-be-done",
      },
      {
        title: "Civil Block",
        link: "/to-be-done",
      },
      {
        title: "Medical Facility",
        link: "/to-be-done",
      },
    ],
  },
  {
    title: "Downloads",
    icon: <IconDownload />,
    dropdown: true,
    child: [
      {
        title: "Student Downloads",
        link: "/downloads/student-downloads",
      },
    ],
  },
]

const DropDownMenuItem = ({ item }: { item: MenuType }): React.ReactElement => {
  // Split Dropdown menu into multiple columns based on total content

  const Title = (): React.ReactElement => (
    <Nav.Item className="flex-row">
      {/* <IconHome
    className="nav-link-icon d-md-none d-lg-inline-block"
    size={24}
  /> */}
      <div className="nav-link-icon d-md-none d-lg-inline-block">
        {item.icon}
      </div>

      <div className="nav-link-title">{item.title}</div>
    </Nav.Item>
  )

  return (
    <NavDropdown title={<Title />}>
      <div className="dropdown-menu-columns">
        <div className="dropdown-menu-column">
          {item.child.map((val: SubMenuType) => (
            <NavDropdown.Item>{val.title}</NavDropdown.Item>
          ))}
        </div>
      </div>
    </NavDropdown>
  )
}

const Menu = (): React.ReactElement => (
  <Nav>
    {DATA.map((menuItem: MenuType) => {
      if (menuItem.dropdown) {
        return <DropDownMenuItem item={menuItem} />
      } else {
        return (
          <Link className="nav-link" to={menuItem.link}>
            <Nav.Item className="flex-row">
              <div className="nav-link-icon d-md-none d-lg-inline-block">
                {menuItem.icon}
              </div>
              <div className="nav-link-title">{menuItem.title}</div>
            </Nav.Item>
          </Link>
        )
      }
    })}
  </Nav>
)

const Header = ({ siteTitle }) => {
  return (
    <React.Fragment>
      <Navbar>
        <div className="container-xl">
          <Navbar.Brand className="navbar-brand-autodark d-none-navbar-horizontal pe-0 pe-md-3">
            Govt Polytechnic College, Perinthalmanna
          </Navbar.Brand>
          <Nav className="flex-row order-md-last">
            <Nav.Item bsPrefix="top-nav" className="d-md-flex d-none me-3">
              <div className="btn-list">
                <Link className="btn btn-outline-white" to="">
                  <IconPhone size={24} />
                  Contact Us
                </Link>
                <Link className="btn btn-outline-white" to="">
                  <IconAward size={24} />
                  Login
                </Link>
              </div>
            </Nav.Item>
          </Nav>
        </div>{" "}
      </Navbar>

      <Navbar expand="md" className="d-print-none">
        <Navbar.Toggle>
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse>
          <div className="container-xl">
            <Menu />
          </div>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
