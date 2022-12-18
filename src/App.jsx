import styled from "styled-components";
import "./App.css";
import { FaArrowDown } from "react-icons/fa";

function App() {
  return (
    <div>
      <HeaderContainer>
        <HeaderSubCont1>
          <LogoCont>
            <div id="logo-name">Naukri</div>
            <span>
              <img src="" alt=""></img>
            </span>
          </LogoCont>
          <HeaderSubDiv className="header-sub-div">
            <a href="">Find Jobs</a>
          </HeaderSubDiv>
          <HeaderSubDiv className="header-sub-div">
            <a href="">Company Reviews</a>
          </HeaderSubDiv>
        </HeaderSubCont1>
        <HeaderSubCont2>
          <HeaderSubDiv className="header-sub-div">
            <a href="">Submit your CV</a>
          </HeaderSubDiv>
          <HeaderSubDiv className="header-sub-div">
            <a href="">Sign In</a>
          </HeaderSubDiv>
          <HeaderSubDiv>|</HeaderSubDiv>
          <HeaderSubDiv className="header-sub-div">
            <a href="">Employer/Post Job</a>
          </HeaderSubDiv>
          {/* <div>
            <HeaderList>
              <li>Find Jobs</li>
              <li>Company Reviews</li>
              <li>Submit your CV</li>
              <li>Sign in</li>
              <li>Employer/Post job</li>
            </HeaderList>
          </div> */}
        </HeaderSubCont2>
      </HeaderContainer>
      <BodyDiv>
        <div>
          <LandingImg src="./assets/office-image.jpg" alt=""></LandingImg>
        </div>
        <BodySubDiv id="body-sub-div">
          <MotoDiv>
            <p>Hire or get hired...</p>
          </MotoDiv>
          <div className="input-div">
            <div>
              <input
                className="input-field input"
                type="text"
                placeholder="Job title,keywords or company"
              />
            </div>
            <div>
              <input
                className="input-field input"
                type="text"
                placeholder="City,province or region"
              />
            </div>
            <div>
              <FindButton id="find-button">
                <b>Find Jobs</b>
              </FindButton>
            </div>
          </div>
          <div id="option">
            <p>
              <b><Option href="">Post your CV</Option></b> - It only takes a few
              seconds
            </p>
            <p>
              <b><Option href="">Employers-Post a job</Option></b> - Your next hire
              might be here
            </p>
          </div>
        </BodySubDiv>
      </BodyDiv>
    </div>
  );
}

export default App;

// Styled CSS
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-bottom: 1px solid grey;
`;

const HeaderSubCont1 = styled.div`
  display: flex;
  flex-direction: row;
`;
const HeaderSubCont2 = styled.div`
  display: flex;
  flex-direction: row;
`;

const LogoCont = styled.div`
  padding-top: 18px;
  padding-left: 20px;
  padding-right: 20px;
  width: 150px;
`;

const HeaderSubDiv = styled.div`
  padding: 40px 12px 20px;
`;

const LandingImg = styled.img`
  height: 80vh;
  width: 100%;
  padding: 0px;
  margin: 0px;
  opacity: 0.75;
`;

const BodyDiv = styled.div`
  position: relative;
`;

const BodySubDiv = styled.div`
  position: absolute;
  top: 20%;
  left: 20%;
`;

const MotoDiv = styled.div`
  font-size: 50px;
  color: white;
  border-radius: 25px;
  padding: 5px;
  text-align: center;
`;

const FindButton = styled.button`
  color: white;
  background-color: blue;
  padding: 7px 12px 8px;
  width: 100px;
  border-radius: 10px;
  border-color: blue;
  font-size: 15px;
`;

const Option = styled.a`
  color: blue;
`;

