import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Login = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({ email: '', password: '' });

  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;

    setEmployee({ ...employee, [name]: value });
  };
  return (
    <Main>
      <LoginDiv>
        <div>
          <h1>Enter Details</h1>
        </div>
        <div>
          <Label>
            <b>Email</b>
          </Label>
          <Input
            type='email'
            name='email'
            value={employee.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <Label>
            <b>Password</b>
          </Label>
          <Input
            type='password'
            name='password'
            value={employee.password}
            onChange={handleChange}
          />
        </div>
        <div id='login-div'>
          <p>
            Dont have an account?{' '}
            <SignUp onClick={() => navigate('/signUp')}>Sign Up</SignUp>
          </p>
          <SubmitButton onClick={() => navigate('/')}>Submit</SubmitButton>
        </div>
      </LoginDiv>
    </Main>
  );
};

export default Login;

// STYLED CSS
const Main = styled.div`
  display: flex;
  justify-content: center;
`;

const LoginDiv = styled.form`
  display: grid;
  grid-template-rows: 60px 70px 70px 40px;
  padding: 60px;
  width: 30%;
  margin-top: 150px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
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
  outline: none;
  border: none;
  border-bottom: 1px solid grey;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 1px solid rgb(71, 71, 242);
    transition: 800ms;
  }
`;

const SignUp = styled.span`
  color: blue;
  cursor: pointer;
  &:hover {
    border-bottom: 1px solid blue;
  }
`;

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 180px;
  height: 50px;
  cursor: pointer;
  margin-top: 20px;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
  }
`;
