import React, { useState, useCallback, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
} from "reactstrap";
import { Link, useLocation } from "react-router-dom";
import "./NavMenu.css";
// import logo from "./../assets/ahcLogo.png";

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({
    Services: false,
    Patients: false,
    About: false,
  });
  const [activeSection, setActiveSection] = useState("");
  const [activeItem, setActiveItem] = useState("");

  const location = useLocation();

  const toggleNavbar = useCallback(() => setCollapsed(!collapsed), [collapsed]);

  const handleDropdownItemClick = useCallback((sectionName, itemName) => {
    setActiveSection(sectionName);
    setActiveItem(itemName);
    setDropdownOpen((prevState) => ({
      ...prevState,
      [sectionName]: false,
    }));
    setCollapsed(true); // Close navbar after selection
  }, []);

  const handleMouseOver = useCallback((name) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [name]: true,
    }));
  }, []);

  const handleMouseLeave = useCallback((name) => {
    setDropdownOpen((prevState) => ({
      ...prevState,
      [name]: false,
    }));
  }, []);

  useEffect(() => {
    // Determine if the current route matches the active section/item
    if (location.pathname.startsWith("/services")) {
      setActiveSection("Services");
      setActiveItem(location.pathname.split("/").pop());
    } else if (location.pathname.startsWith("/insurance")) {
      setActiveSection("Insurance");
      setActiveItem(location.pathname.split("/").pop());
    } else if (location.pathname.startsWith("/patients")) {
      setActiveSection("Patients");
      setActiveItem(location.pathname.split("/").pop());
    } else if (location.pathname.startsWith("/about")) {
      setActiveSection("About");
      setActiveItem(location.pathname.split("/").pop());
    } else if (location.pathname === "/contact") {
      setActiveSection("Contact");
      setActiveItem(""); // Clear the active item since this is not a dropdown item
    } else {
      setActiveSection(""); // Clear active section if not in any dropdown
      setActiveItem(""); // Clear active item
    }
  }, [location]);

  return (
    <header>
      <Navbar
        className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow"
        container
        light
      >
        <NavbarBrand tag={Link} to="/">
          {/* <img src={logo} alt="Arth Health Club Logo" className="navbar-logo" /> */}
          <h3 className="libre-baskerville-bold">Arth Health Club</h3>
        </NavbarBrand>
        <NavbarToggler
          onClick={toggleNavbar}
          className={`mr-2 ${!collapsed ? "open" : ""}`}
        >
          <div className="toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse
          className="d-sm-inline-flex flex-sm-row-reverse"
          isOpen={!collapsed}
          navbar
        >
          <ul className="navbar-nav flex-grow">
            {/* Ensure the brand name is displayed above the first item in mobile view */}
            <li className="nav-item mobile-brand-name d-block d-sm-none">
              <h3 className="libre-baskerville-bold text-center">Arth Health Club</h3>
            </li>
            {["Services","Insurance","Patients", "About"].map((section) => (
              <Dropdown
                key={section}
                nav
                inNavbar
                isOpen={dropdownOpen[section]}
                onMouseOver={() => handleMouseOver(section)}
                onMouseLeave={() => handleMouseLeave(section)}
                toggle={() => {}}
              >
                <DropdownToggle
                  nav
                  caret={false}
                  className={`${activeSection === section ? "active-section" : ""}`}
                >
                  {section}
                </DropdownToggle>
                <DropdownMenu>
                  {section === "Services" && (
                    <>
                      <DropdownItem
                        tag={Link}
                        to="/services/physical-therapy"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "physical-therapy"
                          )
                        }
                        className={
                          activeItem === "physical-therapy" ? "active-item" : ""
                        }
                      >
                        Physical Therapy
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/balance-and-gait-rehabilitation"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "balance-and-gait-rehabilitation"
                          )
                        }
                        className={
                          activeItem === "balance-and-gait-rehabilitation"
                            ? "active-item"
                            : ""
                        }
                      >
                        Balance and Gait Rehabilitation
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/workers-compensation"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "workers-compensation"
                          )
                        }
                        className={
                          activeItem === "workers-compensation"
                            ? "active-item"
                            : ""
                        }
                      >
                        Workers Compensation
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/manual-therapy"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "manual-therapy"
                          )
                        }
                        className={
                          activeItem === "manual-therapy"
                            ? "active-item"
                            : ""
                        }
                      >
                        Manual Therapy
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/sports-rehabilitation"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "sports-rehabilitation"
                          )
                        }
                        className={
                          activeItem === "sports-rehabilitation"
                            ? "active-item"
                            : ""
                        }
                      >
                        Sports Rehabilitation
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/tmj-rehabilitation"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "tmj-rehabilitation"
                          )
                        }
                        className={
                          activeItem === "tmj-rehabilitation"
                            ? "active-item"
                            : ""
                        }
                      >
                        TMJ Rehabilitation
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/vestibular-rehabilitation"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "vestibular-rehabilitation"
                          )
                        }
                        className={
                          activeItem === "vestibular-rehabilitation"
                            ? "active-item"
                            : ""
                        }
                      >
                        Vestibular Rehabilitation
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/virtual-physical-therapy"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "virtual-physical-therapy"
                          )
                        }
                        className={
                          activeItem === "virtual-physical-therapy"
                            ? "active-item"
                            : ""
                        }
                      >
                        Virtual Physical Therapy
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/services/complimentary-screening"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Services",
                            "complimentary-screening"
                          )
                        }
                        className={
                          activeItem === "complimentary-screening"
                            ? "active-item"
                            : ""
                        }
                      >
                        Complimentary Screening
                      </DropdownItem>
                    </>
                  )}
                  {section === "Insurance" && (
                    <>
                      <DropdownItem
                        tag={Link}
                        to="/insurance/insurance-verification"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Insurance",
                            "insurance-verification"
                          )
                        }
                        className={
                          activeItem === "insurance-verification"
                            ? "active-item"
                            : ""
                        }>
                        Insurance Verification
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/insurance/in-network-insurance"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Insurance",
                            "in-network-insurance"
                          )
                        }
                        className={
                          activeItem === "in-network-insurance"
                            ? "active-item"
                            : ""
                        }>
                        In-Network Insurance
                      </DropdownItem>
                    </>
                  )}
                  {section === "Patients" && (
                    <>
                      <DropdownItem
                        tag={Link}
                        to="/patients/patient-information"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Patients",
                            "patient-information"
                          )
                        }
                        className={
                          activeItem === "patient-information"
                            ? "active-item"
                            : ""
                        }
                      >
                        Patient Information
                      </DropdownItem>
                      <DropdownItem
                        tag={Link}
                        to="/patients/direct-access"
                        onClick={() =>
                          handleDropdownItemClick(
                            "Patients",
                            "direct-access"
                          )
                        }
                        className={
                          activeItem === "direct-access"
                            ? "active-item"
                            : ""
                        }
                      >
                        Direct Access
                      </DropdownItem>
                    </>
                  )}
                  {section === "About" && (
                    <>
                      <DropdownItem
                        tag={Link}
                        to="/about/meet-our-team"
                        onClick={() =>
                          handleDropdownItemClick(
                            "About",
                            "meet-our-team"
                          )
                        }
                        className={
                          activeItem === "meet-our-team"
                            ? "active-item"
                            : ""
                        }>
                        Meet Our Team
                      </DropdownItem>
                    </>
                  )}
                </DropdownMenu>
              </Dropdown>
            ))}
            <NavItem>
              <NavLink
                tag={Link}
                to="/contact"
                className={activeSection === "Contact" ? "active-section" : ""}
                onClick={() => setCollapsed(true)}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <Button
                tag={Link}
                className="appointmentbutton"
                to="/book-appointment"
                onClick={() => setCollapsed(true)}
              >
                Book appointment
              </Button>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
