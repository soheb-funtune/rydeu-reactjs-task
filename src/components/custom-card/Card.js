import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Grid,
  Button,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import React from "react";
import styled from "styled-components";
import telegram from "../../utils/images/telegram.png";
import whatsapp from "../../utils/images/whatsapp.png";
import livechat from "../../utils/images/livechat.png";
import facebook from "../../utils/images/facebook.png";
import insta from "../../utils/images/insta.png";
import twitter from "../../utils/images/twitter.png";
import linkdin from "../../utils/images/linkdin.png";

const Card = ({ card }) => {
  const { title, description, url } = card;

  const chatImages = [telegram, whatsapp, livechat];
  const socialImages = [facebook, insta, twitter, linkdin];

  const noData = ["FAQ", "Travel Guide"];
  return (
    <Accordion>
      <AccordionSummary
        sx={{ p: "5px 20px" }}
        expandIcon={noData?.includes(title) ? null : <ExpandMoreIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <CardWrapper>
          <img src={url} />
          <div>
            <h3>{title} </h3>
            <p>{description}</p>
          </div>
        </CardWrapper>
      </AccordionSummary>
      {noData?.includes(title) ? null : (
        <AccordionDetails
          sx={{
            p: noData?.includes(title) ? "0px" : "5px 50px 30px",
            //   display: noData?.includes(title) ? "none" : "flex",
          }}
        >
          {title == "Chat" ? (
            <AccordionDetailsWrap>
              {chatImages?.map((chat, i) => (
                <StyledImg src={chat} key={`chat${i}`} />
              ))}
            </AccordionDetailsWrap>
          ) : title == "Social" ? (
            <AccordionDetailsWrap>
              {socialImages?.map((chat, i) => (
                <StyledImg src={chat} key={`chat${i}`} />
              ))}
            </AccordionDetailsWrap>
          ) : title == "Send Query" ? (
            <AccordionDetailsWrap>
              <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                  <InputWrap>
                    <label>Name</label>
                    <input type="text" />
                  </InputWrap>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputWrap>
                    <label>Email</label>
                    <input type="text" />
                  </InputWrap>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputWrap>
                    <label>Subject</label>
                    <input type="text" />
                  </InputWrap>
                </Grid>
                <Grid item xs={12} md={6}>
                  <InputWrap>
                    <label>Order No.</label>
                    <input type="text" />
                  </InputWrap>
                </Grid>
                <Grid item xs={12}>
                  <InputWrap>
                    <label>Your Query</label>
                    <textarea rows={5} />
                  </InputWrap>
                </Grid>
                <Grid item xs={12}>
                  <Button
                    color="secondary"
                    sx={{
                      background: "#FD2E5A",
                      color: "white",
                      marginTop: "20px",
                      paddingX: "50px",
                    }}
                    variant="contained"
                    size="small"
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </AccordionDetailsWrap>
          ) : (
            <noscript></noscript>
          )}
        </AccordionDetails>
      )}
    </Accordion>
  );
};

export default Card;

const CardWrapper = styled.div`
  color: black;
  display: flex;
  align-items: center;
  background: #ffffff;
  /* box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25); */
  gap: 20px;
  /* padding: 15px 20px; */
  /* border-radius: 20px; */
  text-align: left;

  img {
    height: auto;
    width: 32px;
  }
  h3 {
    font-size: 15px;
    margin: 0px 0px 5px;
  }
  p {
    font-size: 12px;
    margin: 0px;
  }
`;

const AccordionDetailsWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  img {
    padding: 15px;
    border-radius: 6px;
    border: 1px solid transparent;
  }
  img:hover {
    background: #f3f3f3;
    border: 1px solid lightgray;
  }
`;
const StyledImg = styled.img`
  height: auto;
  width: 32px;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  text-align: left;

  label {
    font-size: 12px;
  }
  input,
  textarea {
    padding: 8px 5px;
    background: #f3f3f3;
    outline: none;
    border: 1px solid lightgray;
    border-radius: 5px;
  }
`;
