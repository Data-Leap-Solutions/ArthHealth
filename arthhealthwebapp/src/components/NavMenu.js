import React, { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

const NavMenu = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState({
    Services: false,
    Patients: false,
    About: false
  });
  const [activeSection, setActiveSection] = useState('');

  const toggleNavbar = () => setCollapsed(!collapsed);

  const toggleDropdown = (name) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [name]: !prevState[name]
    }));
  };

  const handleDropdownItemClick = (sectionName) => {
    setActiveSection(sectionName);
    setDropdownOpen(prevState => ({
      ...prevState,
      [sectionName]: false
    }));
  };

  const handleMouseOver = (name) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [name]: true
    }));
    setActiveSection(name);
  };

  const handleMouseLeave = (name) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [name]: false
    }));
    setActiveSection('');
  };

  return (
    <header>
      <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow" container light>
        <NavbarBrand tag={Link} to="/"><h3 className="libre-baskerville-bold">Arth Physical Therapy</h3></NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={!collapsed} navbar>
          <ul className="navbar-nav flex-grow">
            <Dropdown 
              nav 
              inNavbar 
              isOpen={dropdownOpen.Services} 
              onMouseOver={() => handleMouseOver('Services')} 
              onMouseLeave={() => handleMouseLeave('Services')}
              toggle={() => {}}  // <- Empty toggle function
            >
              <DropdownToggle nav caret={false} className={activeSection === 'Services' ? 'underline' : ''}>
                Services
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/services/physical-therapy" onClick={() => handleDropdownItemClick('Services')}>Physical Therapy</DropdownItem>
                <DropdownItem tag={Link} to="/services/balance-and-gait-rehabilitation" onClick={() => handleDropdownItemClick('Services')}>Balance and Gait Rehabilitation</DropdownItem>
                <DropdownItem tag={Link} to="/services/workers-compensation" onClick={() => handleDropdownItemClick('Services')}>Workers Compensation</DropdownItem>
                <DropdownItem tag={Link} to="/services/manual-therapy" onClick={() => handleDropdownItemClick('Services')}>Manual Therapy</DropdownItem>
                <DropdownItem tag={Link} to="/services/sports-rehabilitation" onClick={() => handleDropdownItemClick('Services')}>Sports Rehabilitation</DropdownItem>
                <DropdownItem tag={Link} to="/services/tmj-rehabilitation" onClick={() => handleDropdownItemClick('Services')}>TMJ Rehabilitation</DropdownItem>
                <DropdownItem tag={Link} to="/services/vestibular-rehabilitation" onClick={() => handleDropdownItemClick('Services')}>Vestibular Rehabilitation</DropdownItem>
                <DropdownItem tag={Link} to="/services/virtual-physical-therapy" onClick={() => handleDropdownItemClick('Services')}>Virtual Physical Therapy</DropdownItem>
                <DropdownItem tag={Link} to="/services/complimentary-screening" onClick={() => handleDropdownItemClick('Services')}>Complimentary Screening</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown 
              nav 
              inNavbar 
              isOpen={dropdownOpen.Patients} 
              onMouseOver={() => handleMouseOver('Patients')} 
              onMouseLeave={() => handleMouseLeave('Patients')}
              toggle={() => {}}  // <- Empty toggle function
            >
              <DropdownToggle nav caret={false} className={activeSection === 'Patients' ? 'underline' : ''}>
                Patients
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/patients/patient-information" onClick={() => handleDropdownItemClick('Patients')}>Patient Information</DropdownItem>
                <DropdownItem tag={Link} to="/patients/direct-access" onClick={() => handleDropdownItemClick('Patients')}>Direct Access</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <Dropdown 
              nav 
              inNavbar 
              isOpen={dropdownOpen.About} 
              onMouseOver={() => handleMouseOver('About')} 
              onMouseLeave={() => handleMouseLeave('About')}
              toggle={() => {}}  // <- Empty toggle function
            >
              <DropdownToggle nav caret={false} className={activeSection === 'About' ? 'underline' : ''}>
                About
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem tag={Link} to="/about/meet-our-team">Meet Our Team</DropdownItem>
              </DropdownMenu>
            </Dropdown>
            <NavItem>
              <NavLink tag={Link} to="/contact">Contact</NavLink>
            </NavItem>
            <NavItem>
              <Button tag={Link} className="appointmentbutton" to="/book-appointment">Book appointment</Button>
            </NavItem>
          </ul>
        </Collapse>
      </Navbar>
    </header>
  );
};

export default NavMenu;
