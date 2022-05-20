import { Container } from 'components/App.styled';
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
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

const Layout = () => {
  return (
    <>
      <Header>
        <Container>
          <Navigation>
            <NavHomepage to="/">Homepage</NavHomepage>
            <NavMovie to="/contacts">Contacts</NavMovie>
          </Navigation>
          <AuthMenu />
          {/* <UserMenu /> */}
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
