import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const AuthContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const RegisterLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
  color: white;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  border: 1px solid;
  //   border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: 0;
    color: white;
    // background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    background: linear-gradient(
      0deg,
      rgba(0, 230, 255, 1) 0%,
      rgba(0, 93, 92, 1) 36%,
      rgba(1, 0, 16, 1) 100%
    );
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover {
    background: rgba(255, 255, 255, 0);
    &:before {
      bottom: 0%;
      top: auto;
      height: 100%;
    }
    span {
      position: relative;
    }
  }
`;

export const LoginLink = styled(NavLink)`
  text-decoration: none;
  outline: none;
  color: white;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  border: 1px solid;
  //   border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  border-image-slice: 1;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 0;
    width: 100%;
    z-index: 0;
    color: white;
    // background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
    background: linear-gradient(
      0deg,
      rgba(0, 230, 255, 1) 0%,
      rgba(0, 93, 92, 1) 36%,
      rgba(1, 0, 16, 1) 100%
    );
    transition: 0.8s cubic-bezier(0.165, 0.84, 0.44, 1);
  }
  &:hover {
    background: rgba(255, 255, 255, 0);
    &:before {
      bottom: 0%;
      top: auto;
      height: 100%;
    }
    span {
      position: relative;
      //   color: black;
    }
  }
`;
