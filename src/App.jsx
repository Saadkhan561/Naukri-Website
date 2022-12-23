import styled from 'styled-components';
import './App.css';

function App() {
  return (
    <div>
      <HeaderContainer>
        <HeaderSubCont1>
          <LogoCont>
            <LogoName>Naukri</LogoName>
            <span>
              <img src='' alt=''></img>
            </span>
          </LogoCont>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>Find Jobs</HeaderSubDivLink>
          </HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>Company Reviews</HeaderSubDivLink>
          </HeaderSubDiv>
        </HeaderSubCont1>
        <HeaderSubCont2>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>Submit your CV</HeaderSubDivLink>
          </HeaderSubDiv>
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>Sign In</HeaderSubDivLink>
          </HeaderSubDiv>
          {/* <HeaderSubDiv>|</HeaderSubDiv> */}
          <HeaderSubDiv className='header-sub-div'>
            <HeaderSubDivLink href=''>Employer/Post Job</HeaderSubDivLink>
          </HeaderSubDiv>
        </HeaderSubCont2>
      </HeaderContainer>
      <BodyDiv>
        <div>
          <LandingImg src='./assets/office-image.jpg' alt=''></LandingImg>
        </div>
        <BodySubDiv>
          <MotoDiv>
            <p>Hire or get hired...</p>
          </MotoDiv>
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
              <FindButton>
                <b>Find Jobs</b>
              </FindButton>
            </div>
          </InputDiv>
          <OptionDiv>
            <Option>
              <b>
                <OptionLink href=''>Post your CV</OptionLink>
              </b>{' '}
              - It only takes a few seconds
            </Option>
            <Option>
              <b>
                <OptionLink href=''>Employers-Post a job</OptionLink>
              </b>{' '}
              - Your next hire might be here
            </Option>
          </OptionDiv>
        </BodySubDiv>
        <JobHeadingDiv>
          <JobHeadingSubDiv>
            <h2>Job Feed</h2>
          </JobHeadingSubDiv>
          <JobHeadingSubDiv>
            {' '}
            <h2>Recent Searches</h2>
          </JobHeadingSubDiv>
        </JobHeadingDiv>
        <JobBody>
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
                <button className='cross-button'><img src="./assets/cross.png" alt="" height={40} width={40}/></button>
              </div>
            </JobSubDiv>
            <JobProperty>
              <div id='job-property'>Job Property 1</div>
              <div id='job-property'>Job Property 2</div>
            </JobProperty>
            <ul>
              <li>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non cum
                consequatur magnam tempore similique sunt beatae praesentium
                porro, fugiat ut!
              </li>
            </ul>
            <p>Post Date</p>
          </JobDiv>
          <RecentJobDiv>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            magnam repellat exercitationem vitae, amet deserunt, asperiores quod
            hic corrupti voluptate aperiam quo consequuntur? Obcaecati, unde.
            Dolorum sed magni quas, enim quam eum odio id voluptatibus ipsa
            pariatur praesentium aspernatur, adipisci quibusdam saepe tempora
            architecto eveniet distinctio iusto autem eos. Voluptatem mollitia
            illo laborum nam incidunt repellendus iure animi. Eos eaque
            praesentium eius quae! Ullam animi consequuntur magni totam iste
            vero voluptas dignissimos maxime quam debitis cupiditate similique
            cumque magnam, sunt accusantium voluptatem laboriosam nam nobis ut
            minima ipsam. Sint totam quos repellat quia consequuntur possimus,
            inventore alias voluptates natus libero.
          </RecentJobDiv>
        </JobBody>
        <FooterDiv>
          <div>
            <FooterItem>
              <FooterItemSubDiv>
                {' '}
                <FooterImg src='./assets/browse.png'></FooterImg>
              </FooterItemSubDiv>
              <FooterItemSubDiv>
                {' '}
                <FooterLink href=''>Browse Jobs</FooterLink>
              </FooterItemSubDiv>
            </FooterItem>
            <FooterItem>
              <FooterItemSubDiv>
                {' '}
                <FooterImg src='./assets/browse.png'></FooterImg>
              </FooterItemSubDiv>
              <FooterItemSubDiv>
                {' '}
                <FooterLink>Browse Companies</FooterLink>
              </FooterItemSubDiv>
            </FooterItem>
          </div>
          <div>
            <FooterItem>
              <FooterItemSubDiv>
                {' '}
                <FooterImg src='./assets/about.png'></FooterImg>
              </FooterItemSubDiv>
              <FooterItemSubDiv>
                {' '}
                <FooterLink href=''>About</FooterLink>
              </FooterItemSubDiv>
            </FooterItem>
            <FooterItem>
              <FooterItemSubDiv>
                {' '}
                <FooterImg src='./assets/contact.png'></FooterImg>
              </FooterItemSubDiv>
              <FooterItemSubDiv>
                {' '}
                <FooterLink href=''>Contact</FooterLink>
              </FooterItemSubDiv>
            </FooterItem>
          </div>
        </FooterDiv>
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
  background-color: #f0eded;
  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
    background-color: #f0eded;
  }
`;

const HeaderSubCont1 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 20px;
  }
`;
const HeaderSubCont2 = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    font-size: 20px;
  }
`;

const LogoCont = styled.div`
  padding-top: 18px;
  padding-left: 20px;
  padding-right: 20px;
  width: 150px;
  @media (max-width: 900px) {
    width: 100%;
    text-align: center;
    padding-left: 0;
  }
`;

const LogoName = styled.div`
  font-size: 40px;
`;

const HeaderSubDiv = styled.div`
  padding: 40px 12px 20px;
  &: hover {
    background-color: #e0dddd;
    transition: 300ms;
    border-radius: 10px;
  }
`;

const HeaderSubDivLink = styled.a`
  text-decoration: none;
  color: black;
`;

// const HeaderList = styled.ul`
//   list-style-type: none;
//   padding: 0;
//   margin: 0;
//   height: 100vh;
//   position: absolute;
//   background-color: black;
//   top: 0;
//   left: 100%;
// `;

// const HeaderListItem = styled.a`
//   display: block;
//   padding: 25px;
//   color: white;
// `;

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

  @media (max-width: 400px) {
    top: 4%;
  }

  @media (min-width: 400px) and (max-width: 600px) {
    top: 7%;
  }

  @media (min-width: 600px) and (max-width: 900px) {
    top: 15%
  }

  @media (min-width: 900px) and (max-width: 1100px) {
    left: 17%;
  }
`;

const MotoDiv = styled.div`
  font-size: 50px;
  color: white;
  border-radius: 25px;
  padding: 5px;
  text-align: center;
`;

const InputDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
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
  border-radius: 8px;
  border: none;
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
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; /* oranges! yey */
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

const FooterDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0eded;
`;

const FooterItem = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 100px;
`;

const FooterItemSubDiv = styled.div`
  padding: 3px;
`;

const FooterImg = styled.img`
  height: 20px;
  background-color: white;
`;

const FooterLink = styled.a`
  text-decoration: none;
  margin-top: 5px;
  color: black;
  &:hover {
    text-decoration: underline;
  }
`;

const JobHeadingDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #f0eded;
`;

const JobHeadingSubDiv = styled.div`
  padding: 40px;
  &:hover {
    border-bottom: 3px solid blue;
  }
`;

const JobBody = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const JobDiv = styled.div`
  border: 1px solid black;
  width: 500px;
  padding: 10px;
`;
const RecentJobDiv = styled.div`
  border: 1px solid black;
  width: 500px;
  padding: 10px;
`;

const JobSubDiv = styled.div`
  display: grid;
  grid-template-columns: 90% auto;
`;
const JobProperty = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
`;
