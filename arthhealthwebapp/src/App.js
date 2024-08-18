import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, path, index: isIndex } = route;
            return <Route key={index} path={path} index={isIndex} element={element} />;
          })}
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
