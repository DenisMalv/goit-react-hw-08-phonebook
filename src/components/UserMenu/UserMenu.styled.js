import styled from '@emotion/styled';

export const UserMenuContainer = styled.div`
  //   margin-left: auto;
  //   padding:  10;
`;

export const UserName = styled.span`
  margin-right: 10px;
  span {
    font-family: Roboto;
    font-weight: 700;
    font-size: 24px;
    -webkit-text-decoration: none;
    text-decoration: none;
    color: #282828;
    -webkit-transition: color 400ms ease;
    transition: color 400ms ease;
  }
`;

export const LogOutButton = styled.button`
  background: rgb(255 255 255 / 0%);
  text-decoration: none;
  outline: none;
  color: white;
  display: inline-block;
  position: relative;
  padding: 15px 20px;
  border: 1px solid;
  //   border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
  //   border-image-slice: 1;
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
    z-index: -1;
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
  //   &:active {
  //     background-color: #18a9b5;
  //   }
`;
// .border-button {
//   text-decoration: none;
//   display: inline-block;
//   padding: 20px 30px;
//   margin: 10px 20px;
//   position: relative;
//   color: white;
//   border: 1px solid rgba(255, 255, 255, .4);
//   background: none;
//   font-weight: 300;
//   font-family: 'Montserrat', sans-serif;
//   text-transform: uppercase;
//   letter-spacing: 2px;
// }
// .border-button:before, .border-button:after {
//   content: "";
//   position: absolute;
//   width: 0;
//   height: 0;
//   opacity: 0;
//   box-sizing: border-box;
// }
// .border-button:before {
//   bottom: 0;
//   left: 0;
//   border-left: 1px solid white;
//   border-top: 1px solid white;
//   transition: 0s ease opacity .8s, .2s ease width .4s, .2s ease height .6s;
// }
// .border-button:after {
//   top: 0;
//   right: 0;
//   border-right: 1px solid white;
//   border-bottom: 1px solid white;
//   transition: 0s ease opacity .4s, .2s ease width, .2s ease height .2s;
// }
// .border-button:hover:before,
// .border-button:hover:after {
//   height: 100%;
//   width: 100%;
//   opacity: 1;
// }
// .border-button:hover:before {
//   transition: 0s ease opacity 0s, .2s ease height, .2s ease width .2s;
// }
// .border-button:hover:after {
//   transition: 0s ease opacity .4s, .2s ease height .4s, .2s ease width .6s;
// }
// .border-button:hover {
//   background: rgba(255, 255, 255, .2);
// }

// .sliding-button {
//   text-decoration: none;
//   color: white;
//   display: inline-block;
//   position: relative;
//   padding: 15px 30px;
//   border: 1px solid;
//   border-image: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
//   border-image-slice: 1;
//   margin: 10px 20px;
//   font-family: 'Montserrat', sans-serif;
//   text-transform: uppercase;
//   overflow: hidden;
//   letter-spacing: 2px;
//   transition: .8s cubic-bezier(.165, .84, .44, 1);
// }
// .sliding-button:before {
//   content: "";
//   position: absolute;
//   left: 0;
//   top: 0;
//   height: 0;
//   width: 100%;
//   z-index: -1;
//   color: white;
//   background: linear-gradient(180deg, #ff3000, #ed0200, #ff096c, #d50082);
//   transition: .8s cubic-bezier(.165, .84, .44, 1);
// }
// .sliding-button:hover {
//   background: rgba(255, 255, 255, 0);
// }
// .sliding-button:hover:before {
//   bottom: 0%;
//   top: auto;
//   height: 100%;
// }

// export const LogOutButton = styled.button`
//   text-decoration: none;
//   display: inline-block;
//   padding: 10px 20px;
//   margin: 10px 20px;
//   position: relative;
//   color: white;
//   border: 1px solid rgba(255, 255, 255, 0.4);
//   //   background: none;
//   background: linear-gradient(to top, #55efcb 0%, #5bcaff 100%);
//   font-weight: 300;
//   font-family: 'Montserrat', sans-serif;
//   text-transform: uppercase;
//   letter-spacing: 2px;
//   &:before,
//   &:after {
//     content: '';
//     position: absolute;
//     width: 0;
//     height: 0;
//     opacity: 0;
//     box-sizing: border-box;
//   }

//   &:before {
//     bottom: 0;
//     left: 0;
//     border-left: 1px solid white;
//     border-top: 1px solid white;
//     transition: 0s ease opacity 0.8s, 0.2s ease width 0.4s,
//       0.2s ease height 0.6s;
//   }
//   &:after {
//     top: 0;
//     right: 0;
//     border-right: 1px solid white;
//     border-bottom: 1px solid white;
//     transition: 0s ease opacity 0.4s, 0.2s ease width, 0.2s ease height 0.2s;
//   }
//   &:hover:before,
//   &:hover:after {
//     height: 100%;
//     width: 100%;
//     opacity: 1;
//   }
//   &:hover:before {
//     transition: 0s ease opacity 0s, 0.2s ease height, 0.2s ease width 0.2s;
//   }
//   &:hover:after {
//     transition: 0s ease opacity 0.4s, 0.2s ease height 0.4s,
//       0.2s ease width 0.6s;
//   }
//   &:hover {
//     background: rgba(255, 255, 255, 0.2);
//   }

//   //   &:active {
//   //     background-color: #18a9b5;
//   //   }
// `;
