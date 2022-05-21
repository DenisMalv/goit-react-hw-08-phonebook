import { Container } from 'components/App.styled';
import { AppBar } from 'components/AppBar/AppBar';
import {
  Header,
  Homepage,
  Footer,
  NavHomepage,
  NavMovie,
  Navigation,
  MainContent,
} from './Layout.styled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Loader from 'components/Loader/Loader';

import { getIsLogin } from 'redux/userSlice/userSlice';
import { useSelector } from 'react-redux';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <AppBar />
        </Container>
      </Header>
      <MainContent>
        <Container>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </Container>
      </MainContent>
      <Footer>
        <Container>
          <div>footer</div>
        </Container>
      </Footer>
    </>
  );
};

export default Layout;
