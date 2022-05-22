import {
  NavHomepage,
  NavContacts,
  Navigation,
  AppBarContainer,
  // Helper,
} from './AppBar.styled';
import { useSelector } from 'react-redux';
import { getIsLogin } from 'redux/userSlice/userSlice';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { AuthMenu } from 'components/AuthMenu/AuthMenu';

export const AppBar = () => {
  const isLogin = useSelector(getIsLogin);
  return (
    <AppBarContainer>
      <Navigation>
        <NavHomepage to="/">
          <span>Homepage</span>
        </NavHomepage>
        {isLogin && (
          <NavContacts to="/contacts">
            <span>Contacts</span>
          </NavContacts>
        )}
        {/* <Helper>
          <p>Test1 Acc: qwertyuiqq@gmail.com</p>
          <p>Test1 Pass : 1234567890qq</p>
        </Helper>
        <Helper>
          <p>Test2 Acc : zxcvbnmqq@mail.com</p>
          <p>Test2 Pass : zxcvbnmqq</p>
        </Helper> */}
      </Navigation>
      {isLogin ? <UserMenu /> : <AuthMenu />}
    </AppBarContainer>
  );
};
