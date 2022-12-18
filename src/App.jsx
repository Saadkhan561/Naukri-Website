import styled from 'styled-components';
import './App.css';
import { FaArrowDown } from 'react-icons/fa';

function App() {
  return (
    <div>
      <HeaderContainer>
        <HeaderSubCont1>
          <LogoCont>
            <div id='logo-name'>Naukri</div>
            <span>
              <img src='' alt=''></img>
            </span>
          </LogoCont>
          <HeaderSubDiv className='header-sub-div'>
            <a href=''>Find Jobs</a>
          </HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <a href=''>Company Reviews</a>
          </HeaderSubDiv>
        </HeaderSubCont1>
        <HeaderSubCont2>
          <HeaderSubDiv className='header-sub-div'>
            <a href=''>Submit your CV</a>
          </HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <a href=''>Sign In</a>
          </HeaderSubDiv>
          <HeaderSubDiv>|</HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <a href=''>Employer/Post Job</a>
          </HeaderSubDiv>
        </HeaderSubCont2>
      </HeaderContainer>
      <BodyDiv>
        <div>
          <LandingImg src='./assets/office-image.jpg' alt=''></LandingImg>
        </div>
        <MotoDiv id='body-div'>
          <p>Hire or get hired...</p>
        </MotoDiv>
        <Input>
          <div>
            <input type='text' />
          </div>
          <div>
            <input type='text' />
          </div>
          <div>
            <button>Find Jobs</button>
          </div>
        </Input>
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

const MotoDiv = styled.div`
  position: absolute;
  top: 8%;
  left: 37%;
  font-size: 50px;
  border: 1px solid black;
  border-radius: 25px;
  padding: 5px;
`;

const Input = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 37%;
  border: 1px solid black;
  margin: 10px;
`;
