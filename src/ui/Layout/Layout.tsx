import React from 'react';
import Footer from '../Footer';
import FilterModal from '../../components/FilterModal';
import Header from '../../components/Header';
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
