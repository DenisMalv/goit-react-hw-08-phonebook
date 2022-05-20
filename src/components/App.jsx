import React from 'react';
// import Filter from './Filter/Filter';
// import ContactForm from './ContactForm/ContactForm';
// import ContactList from './ContactList/ContactList';
import { Routes, Route } from 'react-router-dom';

import Layout from 'components/Layout/Layout';
import HomePage from 'pages/HomePage';
import RegisterPage from 'pages/RegisterPage';
import LoginPage from 'pages/LoginPage';
import Page404 from 'pages/Page404';
import ContactsPage from 'pages/ContactsPage';
import PrivatePage from 'pages/PrivatePage';
import PublicPage from 'pages/PublicPage';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="contacts" element={<ContactsPage />} />
        <Route path="*" element={<Page404 />} />
      </Route>
    </Routes>
  );
  // }
};

export default App;
