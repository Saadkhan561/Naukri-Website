import React from 'react';
import styled from 'styled-components';

const JobShortDetail = ({
  id,
  title,
  cmpname,
  cmplocation,
  postdate,
  jobType,
  jobDesc,
  skillReq,
  salaryRange,
}) => {
  return (
    <JobDiv onClick={() => navigate('/jobdetails')}>
      <JobSubDiv>
        <div>
          {' '}
          <p id='job-new'>new</p>
          <h3>{title}</h3>
          <p>{cmpname}</p>
          <p>{cmplocation}</p>
        </div>
        <div>
          <button className='cross-button'>
            <img src='./assets/cross.png' alt='' height={40} width={40} />
          </button>
        </div>
      </JobSubDiv>
      <JobProperty>
        <div id='job-property'>{jobType}</div>
        <div id='job-property'>Job Property 2</div>
      </JobProperty>
      <ShortDesc>
        <ShortDescLi>
          {jobDesc}
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
          consequatur magnam tempore similique sunt beatae praesentium porro,
          fugiat ut! */}
        </ShortDescLi>
      </ShortDesc>
      <JobDate>Post Date</JobDate>
    </JobDiv>
  );
};

export default JobShortDetail;

// SYTLED CSS

const JobDiv = styled.div`
  cursor: pointer;
  border: 1px solid grey;
  width: 90%;
  padding: 10px;
  border-radius: 20px;
  height: 400px;
  margin-bottom: 15px;
  @media (min-width: 900px) and (max-width: 1020px) {
    width: 350px;
  }

  @media (min-width: 750px) and (max-width: 900px) {
    width: 300px;
    height: 320px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    width: 250px;
    height: 320px;
  }
`;

const JobSubDiv = styled.div`
  display: grid;
  grid-template-columns: 90% auto;

  @media (min-width: 500px) and (max-width: 900px) {
    grid-template-columns: 80% auto;
  }
`;
const JobProperty = styled.div`
  display: grid;
  grid-template-columns: 110px 110px;
  column-gap: 10px;
  margin-top: 20px;
  @media (min-width: 500px) and (max-width: 900px) {
    grid-template-rows: 40px 30px;
  }
`;

const ShortDesc = styled.div`
  margin-left: 20px;
  margin-top: 20px;
  border: 1px solid black;
  display: flex;
  flex-wrap: wrap;
  overflow-wrap: break-word;
`;

const ShortDescLi = styled.li`
  display: flex;
  word-wrap: break-word;
  flex-wrap: wrap;
`;

const JobDate = styled.div`
  margin-top: 10px;
`;
