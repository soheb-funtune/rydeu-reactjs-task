import React from "react";
import MuiNavbar from "../mui-navbar/MuiNavbar";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import rectangleImage from "../../utils/images/Rectangle.png"; // import the image
import posterImage from "../../utils/images/poster.png"; // import the poster

const Wrapper = () => {
  const location = useLocation();
  return (
    <div>
      <MuiNavbar />
      <MainDiv poster={location?.pathname?.includes("city") ? true : false}>
        <Outlet />
      </MainDiv>
    </div>
  );
};

export default Wrapper;

const MainDiv = styled.div`
  background-image: ${({ poster }) =>
    poster ? `url(${posterImage})` : `url(${rectangleImage})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  height: 80vh;
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 50px;
`;
