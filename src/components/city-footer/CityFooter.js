import { Grid } from "@mui/material";
import React from "react";
import ryduelogo from "../../utils/images/ryduelogo.png";
import styled from "styled-components";
const CityFooter = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={3}>
        <StyledLogoDiv>
          <div>
            <img src={ryduelogo} />
            <p>Solution for all ground transfers</p>
          </div>
          <p>Connect with us</p>
        </StyledLogoDiv>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <StyledUl>
          <h3>Company</h3>
          <div>
            <small>About us</small>
            <small>Privacy Policy</small>
            <small>Terms and conditions</small>
            <small>Imprint</small>
            <small>Careers / Jobs</small>
            <small>Sitemap</small>
          </div>
        </StyledUl>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <StyledUl>
          <h3>Help Center</h3>
          <div>
            <small>Contact us</small>
            <small>Customer FAQs</small>
            <small>Business FAQs</small>
            <small>Supplier FAQs</small>
          </div>
        </StyledUl>
      </Grid>
      <Grid item xs={12} sm={4} md={3}>
        <StyledUl>
          <h3>Our Services</h3>
          <div>
            <small>Airport Transfer</small>
            <small>City Transfer</small>
            <small>Hourly Transfer</small>
            <small>Business</small>
            <small>Supplier</small>
          </div>
        </StyledUl>
      </Grid>
      <Grid item xs={12}>
        <CopyRightPra>
          Copyright ©️ 2020 rydeu.com All rights reserved.
        </CopyRightPra>
      </Grid>
    </Grid>
  );
};

export default CityFooter;

const StyledLogoDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-left: 40px;
  img {
    width: 121.12px;
    height: 40px;
  }
  p {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1.5px;
  }
  div {
    margin-bottom: 20px;
  }
`;
const StyledUl = styled.div`
  text-align: left;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 14px;
    font-weight: 300;
    letter-spacing: 1.5px;
  }
`;
const CopyRightPra = styled.p`
  text-align: center;
  margin-top: 40px;
  padding: 30px 0px;
  border-top: 0.4px solid lightgray;
  font-size: 12px;
`;
