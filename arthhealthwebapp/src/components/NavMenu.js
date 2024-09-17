import React, { useState, useCallback, useEffect, useMemo } from "react";
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

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({
    Services: false,
    Patients: false,
    About: false,
    Insurance: false,
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
    // Determine active section/item based on route
    const path = location.pathname;
    if (path.startsWith("/services")) {
      setActiveSection("Services");
      setActiveItem(path.split("/").pop());
    } else if (path.startsWith("/insurance")) {
      setActiveSection("Insurance");
      setActiveItem(path.split("/").pop());
    } else if (path.startsWith("/about")) {
      setActiveSection("About");
      setActiveItem(path.split("/").pop());
    } else if (path === "/contact") {
      setActiveSection("Contact");
      setActiveItem("");
    } else {
      setActiveSection("");
      setActiveItem("");
    }
  }, [location]);

  const renderDropdownItems = useCallback(
    (section, items) =>
      items.map((item) => (
        <DropdownItem
          key={item.name}
          tag={Link}
          to={item.path}
          onClick={() => handleDropdownItemClick(section, item.name)}
          className={activeItem === item.name ? "active-item" : ""}
        >
          {item.label}
        </DropdownItem>
      )),
    [handleDropdownItemClick, activeItem]
  );

  const dropdownMenus = useMemo(() => {
    return {
      Services: [
        { name: "physical-therapy", label: "Physical Therapy", path: "/services/physical-therapy" },
        { name: "balance-and-gait-rehabilitation", label: "Balance and Gait Rehabilitation", path: "/services/balance-and-gait-rehabilitation" },
        { name: "workers-compensation", label: "Workers Compensation", path: "/services/workers-compensation" },
        { name: "manual-therapy", label: "Manual Therapy", path: "/services/manual-therapy" },
        { name: "sports-rehabilitation", label: "Sports Rehabilitation", path: "/services/sports-rehabilitation" },
        { name: "tmj-rehabilitation", label: "TMJ Rehabilitation", path: "/services/tmj-rehabilitation" },
        { name: "vestibular-rehabilitation", label: "Vestibular Rehabilitation", path: "/services/vestibular-rehabilitation" },
        { name: "complimentary-screening", label: "Complimentary Screening", path: "/services/complimentary-screening" }
      ],
      Insurance: [
        { name: "insurance-verification", label: "Insurance Verification", path: "/insurance/insurance-verification" },
        { name: "in-network-insurance", label: "In-Network Insurance", path: "/insurance/in-network-insurance" },
        { name: "direct-access", label: "Direct Access", path: "/insurance/direct-access" }
      ],
      About: [
        { name: "meet-our-team", label: "Meet Our Team", path: "/about/meet-our-team" },
        { name: "patient-forms", label: "Patient Forms", path: "/about/patient-forms" },
        { name: "faqs", label: "FAQs", path: "/about/faqs" },

      ],
      
    };
  }, []);

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
        <NavbarBrand tag={Link} to="/">
          <h3 className="libre-baskerville-bold">Arth Physical Therapy</h3>
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className={`mr-2 ${!collapsed ? "open" : ""}`}>
          <div className="toggler-icon">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </NavbarToggler>
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            {Object.keys(dropdownMenus).map((section) => (
              <Dropdown
                key={section}
                nav
                inNavbar
                isOpen={dropdownOpen[section]}
                onMouseOver={() => handleMouseOver(section)}
                onMouseLeave={() => handleMouseLeave(section)}
                toggle={() => {}}
              >
                <DropdownToggle nav caret={false} className={activeSection === section ? "active-section" : ""}>
                  {section}
                </DropdownToggle>
                <DropdownMenu>{renderDropdownItems(section, dropdownMenus[section])}</DropdownMenu>
              </Dropdown>
            ))}
            <NavItem>
              <NavLink tag={Link} to="/contact" className={activeSection === "Contact" ? "active-section" : ""} onClick={() => setCollapsed(true)}>
                Contact
              </NavLink>
            </NavItem>
            <NavItem>
              <Button tag={Link} className="appointmentbutton" to="/book-appointment" onClick={() => setCollapsed(true)}>
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
