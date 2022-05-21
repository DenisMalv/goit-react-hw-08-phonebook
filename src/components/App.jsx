import React, { useEffect } from 'react';
import { lazy, Suspense } from 'react';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
import { Routes, Route } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { reLoginUSer } from 'redux/authOperations/authOperations';

import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import { getIsLoggining } from 'redux/userSlice/userSlice';

const HomePage = lazy(() => import('pages/HomePage.js'));
const RegisterPage = lazy(() => import('pages/RegisterPage.js'));
const LoginPage = lazy(() => import('pages/LoginPage.js'));
const Page404 = lazy(() => import('pages/Page404.js'));
const ContactsPage = lazy(() => import('pages/ContactsPage.js'));
const PrivateRoute = lazy(() => import('pages/PrivateRoute.js'));
const PublicRoute = lazy(() => import('pages/PublicRoute.js'));

// import HomePage from 'pages/HomePage';
// import RegisterPage from 'pages/RegisterPage';
// import LoginPage from 'pages/LoginPage';
// import Page404 from 'pages/Page404';
// import ContactsPage from 'pages/ContactsPage';
// import PrivatePage from 'pages/PrivatePage';
// import PublicPage from 'pages/PublicPage';

const App = () => {
  const dispatch = useDispatch();
  const IsLoginning = useSelector(getIsLoggining);
  useEffect(() => {
    dispatch(reLoginUSer());
    //useNavigate bydem usat`
  }, [dispatch]);
  return (
    <>
      {/* {IsLoginning && <Loader />} */}
      {/* {!IsLoginning && ( */}

      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="contacts"
              element={
                <PrivateRoute>
                  <ContactsPage />
                </PrivateRoute>
              }
            ></Route>
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
  // }
};

export default App;
