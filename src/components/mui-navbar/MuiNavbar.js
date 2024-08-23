import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import styled from "styled-components";
import { Link, useNavigate, useLocation } from "react-router-dom";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Home", "City", "Dashboard"];

function MuiNavbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container
        sx={{ px: "25px !important" }}
        md={{ px: "50px !important" }}
        maxWidth="xl"
      >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            // href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: "flex",
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <StyledImage
              src={
                location.pathname?.includes("home")
                  ? "./images/LOGO.png"
                  : "./images/rydue.png"
              }
            />
            <StyledDiv>
              <a>Transfers</a>
              <a>Bus Hire</a>
            </StyledDiv>
          </Typography>

          <HelpWrapper>
            <section>
              <img src="./images/help.png" />
              <small>Help</small>
            </section>
            <div>
              <section>
                <img src="./images/flag.png" />
                <small>Deutsch</small>
              </section>
              <span
                style={{ height: "15px", borderLeft: "1px solid black" }}
              ></span>
              <small>EUR</small>
            </div>
          </HelpWrapper>
          <UserWrapper>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton sx={{ p: 0 }}>
                  <Avatar
                    sx={{
                      p: 0,
                      width: "25px",
                      height: "25px",
                      fontSize: "10px",
                    }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                  />
                </IconButton>
              </Tooltip>
            </Box>
            <IconButton
              sx={{ p: 0 }}
              size="small"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              color="inherit"
            >
              <MenuIcon onClick={handleOpenUserMenu} />
            </IconButton>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                // <Link key={setting} to={"/city"}>
                <MenuItem
                  onClick={() => {
                    handleCloseUserMenu();
                    navigate(
                      setting == "Home" ? "/" : `/${setting.toLowerCase()}`
                    );
                  }}
                >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
                // </Link>
              ))}
            </Menu>
          </UserWrapper>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MuiNavbar;

const StyledImage = styled.img`
  width: auto;
  height: 20px;
`;
const StyledDiv = styled.div`
  font-size: 13px;
  margin-left: 20px;
`;
const UserWrapper = styled.div`
  width: contain;
  height: 25px;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid lightgray;
  padding: 5px 8px;
  margin-left: 20px;
  border-radius: 30px;
  background-color: #e9e7e7;

  @media (max-width: 768px) {
    background-color: transparent;
    border: none;
  }
`;

const HelpWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  section {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 5px;
  }
  section > img {
    width: auto;
    height: 13.5px;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;
