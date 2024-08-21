import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, path, index: isIndex } = route;
            return <Route key={index} path={path} index={isIndex} element={element} />;
          })}
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
};

export default App;
