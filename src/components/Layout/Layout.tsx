import React from 'react';
import Footer from '../../ui/Footer';
import FilterModal from '../FilterModal';
import Header from '../Header';
import './Layout.css';

const Layout: React.FC = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <div className="layout__body">{children}</div>
      <Footer />
      <FilterModal />
    </div>
  );
};

export default Layout;
