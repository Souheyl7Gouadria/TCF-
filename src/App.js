import React from 'react';
import { RouterProvider , createBrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import RootPage from './components/pages/RootPage';
import LoginPage from './components/pages/LoginPage';
import ContactPage from './components/pages/ContactPage';
import PricingPage from './components/pages/PricingPage';

const router = createBrowserRouter([
  {
    path:'/',
    element : <RootPage/>,
    // errorElement: <ErrorPage/>,
    children : [
      {path:"homePage",element:<HomePage/>},
      {path:'loginPage', element:<LoginPage/>},
      {path:'ContactPage', element:<ContactPage/>},
      {path:'tarifs', element:<PricingPage/>}
    ]
  }
])
  function App() {
    return <RouterProvider router={router} />;
  }


export default App;
