import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const AppBarContainer = styled.div`
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
`;

export const Navigation = styled.nav`
  display: flex;
  align-items: baseline;
  justify-content: flex-start;
  gap: 15px;
`;

export const NavHomepage = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #282828;
  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

export const NavContacts = styled(NavLink)`
  font-family: Roboto;
  font-weight: 700;
  font-size: 24px;
  text-decoration: none;
  color: #282828;

  transition: color 400ms ease;
  &:hover {
    color: #00cee4;
  }
  &.active {
    color: #00cdd5;
    pointer-events: none;
  }
`;

export const Helper = styled.div`
  margin: 0;
  padding: 0;
  font-size: 14px;
  p {
    padding: 0;
    margin: 0;
  }
`;
