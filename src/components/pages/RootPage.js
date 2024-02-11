import React from 'react';
import { Outlet } from 'react-router-dom';
import TopHeader from '../UI/TopHeader';

const RootPage = () => {
  return (
    <>
      <TopHeader />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootPage;
