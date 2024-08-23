import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import styled from "styled-components";

const CustomBox = styled(Box)`
  && .css-1h9z7r5-MuiButtonBase-root-MuiTab-root {
    min-width: 50px;
    padding: 0px 5px;
    line-height: 1;
    letter-spacing: 1px;
    font-size: 11px;
    height: auto;
  }
  && .MuiTab-root {
    text-decoration: none;
    text-transform: capitalize;
  }
  && .MuiTab-root.Mui-selected {
    color: #ff2d5c;
  }
  && .css-1aquho2-MuiTabs-indicator {
    background-color: #ff2d5c;
  }
`;

export default function CustomTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomBox sx={{ width: "100%", bgcolor: "background.paper" }}>
      <Tabs value={value} onChange={handleChange} centered>
        <Tab label="One Way" />
        <Tab label="Round Trip" />
        <Tab label="Hourly" />
      </Tabs>
    </CustomBox>
  );
}
