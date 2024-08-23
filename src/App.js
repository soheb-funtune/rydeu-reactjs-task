import logo from "./logo.svg";
import "./App.css";
import MuiNavbar from "./components/mui-navbar/MuiNavbar";
import styled from "styled-components";
import HomeContent from "./components/home-content/HomeContent";

function App() {
  return (
    <div className="App">
      <MuiNavbar />
      <MainDiv>
        <HomeContent />
      </MainDiv>
    </div>
  );
}

export default App;

const MainDiv = styled.div`
  background-image: url("./images/Rectangle.png");
  background-size: contain;
  background-repeat: no-repeat;
  /* background-position: ; */
  height: 100vh;
  width: 100%;
  background-color: #f5f5f5;
  margin-bottom: 50px;
`;
