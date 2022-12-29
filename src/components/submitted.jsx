import React from 'react';
import styled from 'styled-components';

const Submitted = () => {
  return (
    <Main>
      <SubmittedDiv>
        <ImgDiv>
          <img src='./assets/submitted.png'></img>
          <h2>Your application has been submitted</h2>
        </ImgDiv>
      </SubmittedDiv>
    </Main>
  );
};

export default Submitted;

// STYLED CSS
const Main = styled.div`
  text-align: center;
`;
const SubmittedDiv = styled.div`
  width: 40%;
  margin-left: 30%;
  display: grid;
  grid-template-columns: 100px 30px 30px;
`;
