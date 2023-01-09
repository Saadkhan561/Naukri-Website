import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const SignUp = () => {
  const [userStatus, setUserStatus] = useState(false);
  const [userEmployee, setEmployee] = useState({
    fname: '',
    lname: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
  });
  const [userEmployer, setEmployer] = useState({
    cmpname: '',
    email: '',
    password: '',
    phone: '',
    country: '',
    city: '',
  });
  const navigate = useNavigate();

  let emname, emvalue;
  const handleEmployeeChange = (e) => {
    emname = e.target.name;
    emvalue = e.target.value;

    setEmployee({ ...userEmployee, [emname]: emvalue });
  };

  let ername, ervalue;
  const handleEmployerChange = (e) => {
    ername = e.target.name;
    ervalue = e.target.value;

    setEmployer({ ...userEmployer, [ername]: ervalue });
  };

  function employee() {
    return (
      <DetailsDiv>
        <EmployeeDetails>
          <div>
            <h1>Provide Details...</h1>
          </div>
          <div>
            <Label>
              <b>First Name</b>
            </Label>
            <Input
              type='text'
              name='fname'
              value={userEmployee.fname}
              onChange={handleEmployeeChange}
            />
          </div>
          <div>
            <Label>
              <b>Last Name</b>
            </Label>
            <Input
              type='text'
              name='lname'
              value={userEmployee.lname}
              onChange={handleEmployeeChange}
            />
          </div>
          <div>
            <Label>
              <b>Email</b>
            </Label>
            <Input
              type='email'
              name='email'
              value={userEmployee.email}
              onChange={handleEmployeeChange}
            />
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <Input
              type='password'
              name='password'
              value={userEmployee.password}
              onChange={handleEmployeeChange}
            />
          </div>
          <div>
            <Label>
              <b>Phone Number</b>
            </Label>
            <Input
              type='number'
              name='phone'
              value={userEmployee.phone}
              onChange={handleEmployeeChange}
            />
          </div>
          <div>
            <Label>
              <b>Country</b>
            </Label>
            <Input
              type='text'
              name='country'
              value={userEmployee.country}
              onChange={handleEmployeeChange}
            />
          </div>
          <div>
            <Label>
              <b>City</b>
            </Label>
            <Input
              type='text'
              name='city'
              value={userEmployee.city}
              onChange={handleEmployeeChange}
            />
          </div>
          <SubmitButton onClick={() => navigate('/')}>Submit</SubmitButton>
        </EmployeeDetails>
      </DetailsDiv>
    );
  }

  function employer() {
    return (
      <DetailsDiv>
        <EmployerDetails>
          <div>
            <h1>Provide Details...</h1>
          </div>
          <div>
            <Label>
              <b>Company Name</b>
            </Label>
            <Input
              type='text'
              name='cmpname'
              value={userEmployer.cmpname}
              onChange={handleEmployerChange}
            />
          </div>
          <div>
            <Label>
              <b>Email</b>
            </Label>
            <Input
              type='email'
              name='email'
              value={userEmployer.email}
              onChange={handleEmployerChange}
            />
          </div>
          <div>
            <Label>
              <b>Password</b>
            </Label>
            <Input
              type='password'
              name='password'
              value={userEmployer.password}
              onChange={handleEmployerChange}
            />
          </div>
          <div>
            <Label>
              <b>Phone Number</b>
            </Label>
            <Input
              type='number'
              name='phone'
              value={userEmployer.phone}
              onChange={handleEmployerChange}
            />
          </div>
          <div>
            <Label>
              <b>Country</b>
            </Label>
            <Input
              type='text'
              name='country'
              value={userEmployer.country}
              onChange={handleEmployerChange}
            />
          </div>
          <div>
            <Label>
              <b>City</b>
            </Label>
            <Input
              type='text'
              name='city'
              value={userEmployer.city}
              onChange={handleEmployerChange}
            />
          </div>
          <SubmitButton onClick={() => navigate('/')}>Submit</SubmitButton>
        </EmployerDetails>
      </DetailsDiv>
    );
  }

  return (
    <Main>
      <OptionDiv>
        <OptionSubDiv>
          <Employee onClick={() => setUserStatus(true)}>
            As an employee
          </Employee>
          <Employer onClick={() => setUserStatus(false)}>
            As an employer
          </Employer>
        </OptionSubDiv>
      </OptionDiv>
      {userStatus ? employee() : employer()}
    </Main>
  );
};

export default SignUp;

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
`;

const Employee = styled.div`
  margin-top: 30px;
  padding: 30px 80px 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e0dddd;
    transition: 400ms;
  }
`;
const Employer = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 30px 80px 30px;
  margin-top: 30px;
  border-radius: 10px;
  font-size: 20px;
  cursor: pointer;
  &:hover {
    background-color: #e0dddd;
    transition: 400ms;
  }
`;

const DetailsDiv = styled.div`
  display: flex;
  justify-content: center;
`;

const EmployeeDetails = styled.form`
  display: grid;
  grid-template-rows: repeat(7, 70px) 70px;
  width: 45%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 20px;
`;

const EmployerDetails = styled.form`
  display: grid;
  grid-template-rows: repeat(8, 70px) 50px;
  width: 45%;
  margin-top: 40px;
  margin-bottom: 40px;
  padding: 60px;
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

const SubmitButton = styled.button`
  font-size: 16px;
  color: white;
  background-color: blue;
  border-radius: 10px;
  border: none;
  width: 180px;
  height: 50px;
  cursor: pointer;
  &:hover {
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
      rgba(0, 0, 0, 0.23) 0px 6px 6px;
    transition: 300ms;
  }
`;
