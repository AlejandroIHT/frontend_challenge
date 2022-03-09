import React from 'react';
import Footer from '../../ui/Footer';
import Header from '../Header';
import './Layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
