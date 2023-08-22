import React from 'react';
import Footer from './othercomponents/Footer';
// import GoUp from './othercomponents/GoUp';
import Header from './othercomponents/Header';

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      {/* <GoUp /> */}
    </>
  );
}

export default Layout;
