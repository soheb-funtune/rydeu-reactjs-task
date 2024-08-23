import React from "react";
import CustomTabs from "./CustomTabs";
import styled from "styled-components";
import { Button, Divider } from "@mui/material";
import address from "../../utils/images/address.png";
import email from "../../utils/images/email.png";

const FormCard = () => {
  return (
    <FormWrapper>
      <CustomTabs />
      <StyledForm>
        <InputDiv>
          <label>From</label>
          <StyledInput type="text" placeholder="( airport, hotel, address )" />
        </InputDiv>
        <Divider />
        <InputDiv>
          <label htmlFor="to">To</label>
          <StyledInput
            id="to"
            type="text"
            placeholder="( airport, hotel, address )"
          />
        </InputDiv>
        <Divider />
        <InputDiv>
          <label htmlFor="date">Pick up Date</label>
          <StyledInput id="date" type="date" />
        </InputDiv>
        <Divider />
        <InputDiv>
          <label htmlFor="time">Pick up Time</label>
          <StyledInput id="time" type="time" />
        </InputDiv>
        <Divider />
        <InputDiv>
          <img htmlFor="address" src={address} />
          <select id="address" type="select" placeholder="Address">
            <option>one</option>
            <option>one</option>
            <option>one</option>
          </select>
        </InputDiv>
        <Divider />
        <InputDiv>
          <img htmlFor="email" src={email} />
          <StyledInput id="email" type="email" placeholder="Email" />
        </InputDiv>
        <Divider />
        <InputDiv>
          <input id="Aditional" type="checkbox" />
          <label htmlFor="Aditional">Aditional Requirement</label>
        </InputDiv>
        <InputDiv style={{ justifyContent: "center" }}>
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
        </InputDiv>
      </StyledForm>
    </FormWrapper>
  );
};

export default FormCard;

const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  background: white;
  color: black;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 1px solid lightgray;
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  margin-top: 10px;
  gap: 15px;
`;
const InputDiv = styled.div`
  display: flex;
  gap: 10px;
  font-size: 13px;
  font-weight: 500;
  select {
    border: none;
    outline: none;
    flex: 1;
  }
`;
const StyledInput = styled.input`
  border: none;
  outline: none;
  flex: 1;
`;
