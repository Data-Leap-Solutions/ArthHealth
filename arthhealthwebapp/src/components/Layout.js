import React from 'react';
import { Container } from 'reactstrap';
import NavMenu from './NavMenu';
import Footer from './Footer';
import './Layout.css';

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <NavMenu />
      <div className="content-wrapper">
        <Container className="main-content">
          {children}
        </Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
