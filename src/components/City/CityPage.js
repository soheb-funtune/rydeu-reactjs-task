import React from "react";
import styled from "styled-components";
import poster2 from "../../utils/images/poster2.png";
import poster3 from "../../utils/images/poster3.png";
import poster4 from "../../utils/images/poster4.png";
import poster5 from "../../utils/images/poster5.png";
import FormCard from "../form-card/FormCard";
import bookandpay from "../../utils/images/bookandpay.png";
import flexibletrip from "../../utils/images/flexibletrip.png";
import twentifour from "../../utils/images/twentifour.png";
import freeshift from "../../utils/images/freeshift.png";
import nepples from "../../utils/images/nepples.png";
import florence from "../../utils/images/florence.png";
import {
  Divider,
  Grid,
  Link as MuiLink,
  Breadcrumbs,
  Typography,
  useMediaQuery,
} from "@mui/material";
import CityFooter from "../city-footer/CityFooter";

const imagesList = [
  { img: bookandpay, label: `Book & pay later` },
  { img: flexibletrip, label: `Flexible trip amendments` },
  { img: twentifour, label: `Free cancellation` },
  { img: freeshift, label: `24/7 in-person support` },
];
const CityPage = () => {
  const lessthan900 = useMediaQuery("(max-width:900px)");
  return (
    <CityWrapper>
      <Section1>
        <Section1Left>
          <div>
            <StyledHeading>
              Private Transfer & Taxi services in Geneva
            </StyledHeading>
            <StyledDesc>
              Book airport transfers, city transfers and hourly disposal
              services with driver
            </StyledDesc>
          </div>
          <StyledPosters>
            <img src={poster2} />
            <img src={poster3} />
          </StyledPosters>
        </Section1Left>
        <Section1Right>
          <FormCard />
        </Section1Right>
      </Section1>
      {/* section 2 */}
      <Section2>
        {imagesList?.map(({ img, label }, i) => (
          <div key={`img${i}`}>
            <img src={img} />
            <label>{label}</label>
            <Divider style={{ color: "black" }} orientation="vertical" />
          </div>
        ))}
      </Section2>
      {/* section 3 */}
      <Section3>
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <div>
              <Breadcrumbs sx={{ fontSize: "14px" }} aria-label="breadcrumb">
                <MuiLink underline="hover" color="inherit" href="/">
                  Home
                </MuiLink>
                <MuiLink underline="hover" color="inherit" href="/city">
                  Cities
                </MuiLink>
                <Typography color="text.primary">Rome</Typography>
              </Breadcrumbs>
            </div>
            <StyledUl>
              <li>{lessthan900 ? "At a Glance" : "At a Glance"}</li>
              <li>
                {lessthan900 ? "Transportation" : "Transportation in Rome"}
              </li>
              <li>
                {lessthan900
                  ? "Airport Transfers"
                  : "Airport Transfers in Rome"}
              </li>
              <li>
                {lessthan900 ? "Sightseeing" : "Sightseeing Transportation"}
              </li>
            </StyledUl>
          </Grid>
          <Grid item xs={12} md={8}>
            <ParagrapDiv>
              <p>
                Nestled in the heart of Italian Peninsula, Rome is the capital
                of the country and one of the most populated cities in Italy.
                From its rich architecture to rare artefacts, this city is known
                to possess a history like none other. The picturesque
                atmosphere, the cold wind blowing and the serene atmosphere is
                what makes Rome a must visit place for all the travel fanatics
                out there.
              </p>
              <p>
                <img src={poster4} width="375" height="250" />A perfect blend of
                gothic ruins, jaw dropping art and lively nights, Rome sets an
                exemplary example for a place about how it should entertain its
                travellers. The city wholeheartedly welcomes travellers from a
                wide array of interests, from awe inspiring monuments to living
                life at its best, Rome will never fail to surprise you with a
                new place to explore. A perfect blend of gothic ruins, jaw
                dropping art and lively nights, Rome sets an exemplary example
                for a place about how it should entertain its travellers. The
                city wholeheartedly welcomes travellers from a wide array of
                interests, from awe inspiring monuments to living life at its
                best, Rome will never fail to surprise you with a new place to
                explore.
              </p>
              <p>
                The Roman Empire has been an icon when it comes to historical
                importance. The Roman Empire had cut the ribbons when Augustus
                Caesar announced to be the first emperor of Rome in 31BC and
                ended with the fall of Constantinople in 1453CE. Known to be the
                centre of the Roman Empire, Rome attracts the majority of the
                crowd due to its rich history and politics.
              </p>
            </ParagrapDiv>
            <ParagrapDiv>
              <p>
                Nestled in the heart of Italian Peninsula, Rome is the capital
                of the country and one of the most populated cities in Italy.
                From its rich architecture to rare artefacts, this city is known
                to possess a history like none other. The picturesque
                atmosphere, the cold wind blowing and the serene atmosphere is
                what makes Rome a must visit place for all the travel fanatics
                out there.
              </p>
              <p>
                <img
                  style={{ float: "left", margin: "0px 15px 20px 0px" }}
                  src={poster5}
                  width="375"
                  height="250"
                />
                A perfect blend of gothic ruins, jaw dropping art and lively
                nights, Rome sets an exemplary example for a place about how it
                should entertain its travellers. The city wholeheartedly
                welcomes travellers from a wide array of interests, from awe
                inspiring monuments to living life at its best, Rome will never
                fail to surprise you with a new place to explore. A perfect
                blend of gothic ruins, jaw dropping art and lively nights, Rome
                sets an exemplary example for a place about how it should
                entertain its travellers. The city wholeheartedly welcomes
                travellers from a wide array of interests, from awe inspiring
                monuments to living life at its best, Rome will never fail to
                surprise you with a new place to explore.
              </p>
              <p>
                The Roman Empire has been an icon when it comes to historical
                importance. The Roman Empire had cut the ribbons when Augustus
                Caesar announced to be the first emperor of Rome in 31BC and
                ended with the fall of Constantinople in 1453CE. Known to be the
                centre of the Roman Empire, Rome attracts the majority of the
                crowd due to its rich history and politics.
              </p>
            </ParagrapDiv>
          </Grid>
        </Grid>
      </Section3>
      <Section4>
        <h1>Other Cities </h1>
        <Grid container rowSpacing={2} columnSpacing={2}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={nepples} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={florence} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={nepples} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={florence} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={nepples} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={florence} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={nepples} />
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <img src={florence} />
          </Grid>
        </Grid>
      </Section4>
      <Section5>
        <CityFooter />
      </Section5>
    </CityWrapper>
  );
};

export default CityPage;

const CityWrapper = styled.div``;
const Section1 = styled.div`
  padding: 40px 50px 10px;
  /* display: grid;
  grid-template-columns: 1.6fr 1.4fr; */
  display: flex;
  gap: 20px;
  @media (max-width: 993px) {
    padding: 40px 25px 10px;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
const Section1Left = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 2;
  flex-direction: column;
  color: white;
`;

const StyledHeading = styled.h3`
  font-size: 30px;
  font-weight: 800;
  letter-spacing: 2px;
`;
const StyledDesc = styled.p`
  font-size: 16px;
  margin-top: 0px;
  letter-spacing: 1.2px;
`;
const StyledPosters = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;

  img {
    width: 320px;
    height: 134px;
  }
`;

const Section1Right = styled.div`
  width: 400px;
  margin: auto;
  min-width: max-content;
  display: flex;

  flex-direction: column;
  color: white;
`;

const Section2 = styled.div`
  background: #efefef;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  align-items: center;
  justify-content: space-evenly;
  padding: 20px;
  margin: 50px 0px 20px;
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    padding: 20px 0px;
    align-items: center;
  }

  img {
    width: auto;
    height: 40px;
  }
  label {
    font-size: 13px;
  }
  @media (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
  }
`;
const Section3 = styled.div`
  font-family: lato;
  display: flex;
  padding: 20px 40px;
  margin: 50px 0px 20px;
  @media (max-width: 993px) {
    padding: 40px 25px 10px;
  }
  /* @media (max-width: 767px) {
    flex-direction: column;
  } */
`;

const ParagrapDiv = styled.div`
  text-align: left;
  line-height: 1.5;
  p > img {
    float: right;
    border: 1px dotted black;
    margin: 0px 0px 15px 20px;
  }
`;

const StyledUl = styled.ul`
  text-align: left;
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-top: 35px;
  color: #898989;
  li:first-child {
    color: #ff8924;
    font-size: 20px;
    font-weight: 700;
    list-style: circle;
  }
  @media (max-width: 900px) {
    gap: 15px;
    padding-left: 0px;
    flex-direction: row;
    list-style: none;
    font-size: 14px;
    li:first-child,
    li {
      text-align: center;
      list-style: none !important;
      color: #898989;
      border: 1px solid #898989;
      font-size: initial;
      font-weight: 400;
      font-size: 14px;
      padding: 5px 10px;
      border-radius: 25px;
    }
    li:active,
    li:hover {
      color: white;
      background: #073a4d;
    }
  }

  @media (max-width: 600px) {
    li:first-child,
    li {
      font-size: 11px;
    }
  }
`;

const Section4 = styled.div`
  max-width: 1200px;
  margin: auto;
  font-family: lato;
  padding: 20px 40px;
  /* margin: 50px 0px 20px; */

  h1 {
    font-size: 20px;
    text-align: left;
  }
`;
const Section5 = styled.div`
  margin-top: 50px;
  font-family: lato;
  padding: 50px 40px 0px;
  background: black;
  color: white;
`;
