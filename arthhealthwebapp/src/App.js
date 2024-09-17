import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <Layout>
        <ScrollToTop />
        <Routes>
          {AppRoutes.map(({ element, path, index: isIndex }, routeIndex) => (
            isIndex ? (
              <Route key={path || routeIndex} index element={element} />
            ) : (
              <Route key={path || routeIndex} path={path} element={element} />
            )
          ))}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
