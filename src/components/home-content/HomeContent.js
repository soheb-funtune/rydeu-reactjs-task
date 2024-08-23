import { Container, Grid } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Card from "../custom-card/Card";
import faq from "../../utils/images/faq.png";
import travel from "../../utils/images/travel.png";
import chat from "../../utils/images/chat.png";
import social from "../../utils/images/social.png";
import send from "../../utils/images/send.png";

const HomeContent = () => {
  const cardDetails = [
    {
      title: "FAQ",
      description: "Lorem ipsum doolor sit amet",
      url: faq,
      col: 6,
    },
    {
      title: "Travel Guide",
      description: "Lorem ipsum doolor sit amet",
      url: travel,
      col: 6,
    },
    {
      title: "Chat",
      description: "Lorem ipsum doolor sit amet",
      url: chat,
      col: 12,
    },
    {
      title: "Social",
      description: "Lorem ipsum doolor sit amet",
      url: social,
      col: 12,
    },
    {
      title: "Send Query",
      description: "Lorem ipsum doolor sit amet",
      url: send,
      col: 12,
    },
  ];
  return (
    <Container
      sx={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        background: "transparent",
      }}
    >
      <HeadingWrapper>
        <StyledH1>Hello, how can we help you?</StyledH1>
        <p>Find Travel guide, FAQ, chat.</p>
      </HeadingWrapper>
      <Grid container alignItems="center" justifyContent={"center"} spacing={2}>
        {cardDetails?.map((card, i) => (
          <Grid key={i} item xs={12} md={card.col}>
            <Card card={card} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default HomeContent;

const StyledH1 = styled.h1`
  background: transparent;
  margin: 30px 0px 0px;
  color: #073a4d;
`;
const HeadingWrapper = styled.div`
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 30px auto 50px;
`;
