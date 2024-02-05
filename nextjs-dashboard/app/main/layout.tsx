import React from 'react';
import Navbar from '../ui/dashboard/navbar';
interface LayoutProps {
  money: number;
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
    <Navbar />
    <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </>
  );
};

export default Layout;