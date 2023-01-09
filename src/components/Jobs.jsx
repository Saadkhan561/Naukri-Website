import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { json, useNavigate } from 'react-router-dom';
import axios from 'axios';
import JobShortDetail from './jobShortDetail';
import { getJobs } from '../fetcher';

const Jobs = () => {
  const navigate = useNavigate();
  const [jobs, setJobs] = useState();

  useEffect(() => {
    // axios
    //   .get('http://localhost:3000/jobs')
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((err) => console.log(err));
    // axios
    //   .get('http://localhost:3000/jobs')
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     setJobs(data);
    //   })
    //   .catch((err) => console.log(err));
    // const fetchJobs = async () => {
    //   const data = await getJobs();
    //   console.log(data);
    //   setJobs(data);
    // };
    // fetchJobs();
    // console.log(jobs);
    // axios
    //   .get('http://localhost:3000/jobs')
    async function getJobs() {
      const res = await fetch('http://localhost:3000/jobs');
      if (!res.ok) {
        throw new Error(`HTTP Error ${res.status} not found`);
      }
      const resData = await res.json();
      const data = resData;
      // console.log(data);
      setJobs(data);
      // console.log(jobs.data);
    }
    getJobs();
    // console.log(newJobs);
    // .then((res) => {
    //   JSON.stringify(res);
    //   setJobs(res.data);
    // })
    // .catch((err) => console.log(err));
  }, []);

  const renderJobs = () => {
    return jobs.map((j) => {
      return (
        <JobShortDetail
          key={j.id}
          id={j.id}
          title={j.title}
          cmpname={j.cmpname}
          cmplocation={j.cmplocation}
          postdate={j.postdate}
          jobType={j.jobType}
          jobDesc={j.jobDesc}
          skillReq={j.skillReq}
          salaryRange={j.salaryRange}
        />
      );
    });
  };

  return (
    <div id='overflow'>
      <BodySubDiv>
        <InputDiv>
          <div>
            <InputField
              type='text'
              placeholder='Job title,keywords or company'
            />
          </div>
          <div>
            <InputField type='text' placeholder='City,province or region' />
          </div>
          <div>
            <FindButton onClick={() => navigate('/jobs')}>
              <b>Find Jobs</b>
            </FindButton>
          </div>
        </InputDiv>
        <OptionDiv>
          <Option>
            <b>
              <OptionLink href='' onClick={() => navigate('/postCV')}>
                Post your CV
              </OptionLink>
            </b>{' '}
            - It only takes a few seconds
          </Option>
          <Option>
            <b>
              <OptionLink href='' onClick={() => navigate('/postJob')}>
                Employers-Post a job
              </OptionLink>
            </b>{' '}
            - Your next hire might be here
          </Option>
        </OptionDiv>
      </BodySubDiv>
      <JobHeadingDiv>
        <JobHeadingSubDiv>
          <h2>Job Feed</h2>
        </JobHeadingSubDiv>
      </JobHeadingDiv>
      <JobBody>
        <JobBodySubDiv id='job-div'>
          {jobs && renderJobs()}
          {/* <JobDiv onClick={() => navigate('/jobdetails')}>
            <JobSubDiv>
              <div>
                {' '}
                <p id='job-new'>new</p>
                <h3>Job Title</h3>
                <p>Company Name</p>
                <p>Company Location</p>
              </div>
              <div>
                <button className='cross-button'>
                  <img src='./assets/cross.png' alt='' height={40} width={40} />
                </button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>Job Property 1</div>
              <div id='job-property'>Job Property 2</div>
            </JobProperty>
            <ShortDesc>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ShortDesc>
            <JobDate>Post Date</JobDate>
          </JobDiv> */}
          {/* <JobDiv>
            <JobSubDiv>
              <div>
                {' '}
                <p id='job-new'>new</p>
                <h3>Job Title</h3>
                <p>Company Name</p>
                <p>Company Location</p>
              </div>
              <div>
                <button className='cross-button'>
                  <img src='./assets/cross.png' alt='' height={40} width={40} />
                </button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>
                <b>Job Property 1</b>
              </div>
              <div id='job-property'>
                <b>Job Property 2</b>
              </div>
            </JobProperty>
            <ShortDesc>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ShortDesc>
            <JobDate>Post Date</JobDate>
          </JobDiv>
          <JobDiv>
            <JobSubDiv>
              <div>
                {' '}
                <p id='job-new'>new</p>
                <h3>Job Title</h3>
                <p>Company Name</p>
                <p>Company Location</p>
              </div>
              <div>
                <button className='cross-button'>
                  <img src='./assets/cross.png' alt='' height={40} width={40} />
                </button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>
                <b>Job Property 1</b>
              </div>
              <div id='job-property'>
                <b>Job Property 2</b>
              </div>
            </JobProperty>
            <ShortDesc>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ShortDesc>
            <JobDate>Post Date</JobDate>
          </JobDiv>
          <JobDiv>
            <JobSubDiv>
              <div>
                {' '}
                <p id='job-new'>new</p>
                <h3>Job Title</h3>
                <p>Company Name</p>
                <p>Company Location</p>
              </div>
              <div>
                <button className='cross-button'>
                  <img src='./assets/cross.png' alt='' height={40} width={40} />
                </button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>
                <b>Job Property 1</b>
              </div>
              <div id='job-property'>
                <b>Job Property 2</b>
              </div>
            </JobProperty>
            <ShortDesc>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ShortDesc>
            <JobDate>Post Date</JobDate>
          </JobDiv>
          <JobDiv>
            <JobSubDiv>
              <div>
                {' '}
                <p id='job-new'>new</p>
                <h3>Job Title</h3>
                <p>Company Name</p>
                <p>Company Location</p>
              </div>
              <div>
                <button className='cross-button'>
                  <img src='./assets/cross.png' alt='' height={40} width={40} />
                </button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>
                <b>Job Property 1</b>
              </div>
              <div id='job-property'>
                <b>Job Property 2</b>
              </div>
            </JobProperty>
            <ShortDesc>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ShortDesc>
            <JobDate>Post Date</JobDate>
          </JobDiv>
          <JobDiv>
            <JobSubDiv>
              <div>
                {' '}
                <p id='job-new'>new</p>
                <h3>Job Title</h3>
                <p>Company Name</p>
                <p>Company Location</p>
              </div>
              <div>
                <button className='cross-button'>
                  <img src='./assets/cross.png' alt='' height={40} width={40} />
                </button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>
                <b>Job Property 1</b>
              </div>
              <div id='job-property'>
                <b>Job Property 2</b>
              </div>
            </JobProperty>
            <ShortDesc>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ShortDesc>
            <JobDate>Post Date</JobDate>
          </JobDiv> */}
        </JobBodySubDiv>
      </JobBody>
    </div>
  );
};

export default Jobs;

// STYLED CSS

const BodySubDiv = styled.div`
  margin-bottom: 60px;
  @media (max-width: 400px) {
    top: 4%;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    top: 7%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    top: 15%;
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    left: 17%;
  }
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 100px;
  padding: 5px;
  width: 100%;

  @media (max-width: 400px) {
    flex-direction: column;
    margin-top: 0px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    flex-direction: column;
    margin-top: 0px;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    margin-top: 10px;
  }

  @media (min-width: 900px) {
    margin-top: 50px;
  }
`;

const InputField = styled.input`
  margin-left: 10px;
  margin-right: 10px;
  height: 26px;
  width: 300px;
  border: 1px grey solid;
  border-radius: 8px;
  padding: 4px 20px 5px;
  font-size: 15px;

  @media (max-width: 400px) {
    width: 150px;
    margin-top: 10px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    width: 250px;
    margin-top: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: 10px;
    width: 340px;
  }
  @media (min-width: 900px) and (max-width: 1100px) {
    width: 200px;
  }
  &:focus {
    outline: none;
    border: 1px solid rgb(71, 71, 242);
    transition: 800ms;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  }
`;

const FindButton = styled.button`
  border: 1px solid black;
  color: white;
  background-color: blue;
  padding: 7px 12px 8px;
  width: 100px;
  border-radius: 10px;
  border-color: blue;
  font-size: 15px;
  &: hover {
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    transition: 500ms;
    cursor: pointer;
  }

  @media (max-width: 400px) {
    width: 200px;
    margin-top: 10px;
    margin-left: 10px;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    width: 290px;
    margin-top: 10px;
    margin-left: 10px;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    margin-top: 10px;
    width: 380px;
  }
`;

const OptionDiv = styled.div`
  text-align: center;
  color: black;
  margin-top: 20px;
`;

const Option = styled.p`
  padding: 10px;
`;

const OptionLink = styled.a`
  color: blue;
`;

const JobHeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0eded;
  border-bottom: 1px solid grey;
`;

const JobHeadingSubDiv = styled.div`
  font-size: 25px;
  padding: 40px;
`;

const JobBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const JobBodySubDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  overflow-y: scroll;
  height: 810px;
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
  width: 50%;
`;

// const JobDiv = styled.div`
//   cursor: pointer;
//   border: 1px solid grey;
//   width: 90%;
//   padding: 10px;
//   border-radius: 20px;
//   height: 400px;
//   margin-bottom: 15px;
//   @media (min-width: 900px) and (max-width: 1020px) {
//     width: 350px;
//   }

//   @media (min-width: 750px) and (max-width: 900px) {
//     width: 300px;
//     height: 320px;
//   }
//   @media (min-width: 500px) and (max-width: 750px) {
//     width: 250px;
//     height: 320px;
//   }
// `;

// const JobSubDiv = styled.div`
//   display: grid;
//   grid-template-columns: 90% auto;

//   @media (min-width: 500px) and (max-width: 900px) {
//     grid-template-columns: 80% auto;
//   }
// `;
// const JobProperty = styled.div`
//   display: grid;
//   grid-template-columns: 110px 110px;
//   column-gap: 10px;
//   margin-top: 20px;
//   @media (min-width: 500px) and (max-width: 900px) {
//     grid-template-rows: 40px 30px;
//   }
// `;

// const ShortDesc = styled.ul`
//   margin-left: 20px;
//   margin-top: 20px;
// `;

// const JobDate = styled.div`
//   margin-top: 10px;
// `;
