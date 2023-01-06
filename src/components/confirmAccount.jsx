import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const ConfirmAccount = () => {
  const navigate = useNavigate();

  return (
    <Main>
      <OptionDiv>
        <OptionSubDiv>
        <Employee>
          As an employee
        </Employee>
        <Employer>
          As an employer
        </Employer>
        </OptionSubDiv>
      </OptionDiv>
     {/* {renderDiv()} */}
      {/* <DetailsDiv>
        <Details>
        <div>
        <h1>Provide Details...</h1>
          </div>
          <div>
          <Label>
          <b>First Name</b>
          </Label>
          <Input type='text' name='fname' />
          </div>
          <div>
            <Label>
              <b>Last Name</b>
            </Label>
            <Input type='text' name='lname' />
          </div>
          <div>
            <Label>
              <b>Email</b>
            </Label>
            <Input type='email' name='email' />
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <Input type='password' name='password' />
          </div>
          <div>
            <Label>
              <b>Phone Number</b>
            </Label>
            <Input type='number' name='ph_no' />
          </div>
          <div>
            <Label>
              <b>Country</b>
            </Label>
            <Input type='text' name='country' />
          </div>
          <div>
            <Label>
              <b>City</b>
            </Label>
            <Input type='text' name='city' />
          </div>
          <SubmitButton onClick={() => navigate('/')}>Submit</SubmitButton>
        </Details>
      </DetailsDiv>
      <DetailsDiv>
        <Details>
          <div>
            <h1>Provide Details...</h1>
          </div>
          <div>
            <Label>
              <b>Company Name</b>
            </Label>
            <Input type='text' name='cname' />
          </div>
          <div>
            <Label>
              <b>Email</b>
            </Label>
            <Input type='email' name='email' />
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <Input type='password' name='password' />
          </div>
          <div>
            <Label>
              <b>Phone Number</b>
            </Label>
            <Input type='number' name='ph_no' />
          </div>
          <div>
            <Label>
              <b>Country</b>
            </Label>
            <Input type='text' name='country' />
          </div>
          <div>
            <Label>
              <b>City</b>
            </Label>
            <Input type='text' name='city' />
          </div>
          <SubmitButton onClick={() => navigate('/')}>Submit</SubmitButton>
        </Details>
      </DetailsDiv> */}
    </Main>
  );
};

export default ConfirmAccount;

// STYLED CSS
const Main = styled.div``;

const OptionDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const OptionSubDiv = styled.div`
  display: grid;
  grid-template-columns: 320px 320px;
  column-gap: 100px;
`

const Employee = styled.div`
  margin-top: 30px;
  padding: 30px 80px 10px;
  border: 1px solid grey;
  border-radius: 10px;
  font-size: 20px;
  &:hover {
    background-color: #e0dddd;
    transition: 400ms;
  }
`
const Employer = styled.div`
border: 1px solid grey;
padding: 30px 80px 30px;
margin-top: 30px;
border-radius: 10px;
font-size: 20px;
&:hover {
  background-color: #e0dddd;
  transition: 400ms;
}
`

const DetailsDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const Details = styled.form`
  display: grid;
  grid-template-rows: 'repeat(8, 70px) 50px;';
  width: 45%;
  margin-top: 40px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
`;
const Input = styled.input`
  width: 100%;
  height: 24px;
  font-size: 15px;
  padding: 3px;
  border-radius: 5px;
  border: 1px solid grey;
  &:focus {
    outline: none;
    border: 1px solid rgb(71, 71, 242);
    transition: 800ms;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 200px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
  }
`;
