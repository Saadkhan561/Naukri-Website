import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout.jsx';
import Home from './components/home.jsx';
import Jobs from './components/Jobs.jsx';
import JobDetail from './components/jobDetail.jsx';
import JobApplication from './components/jobApplication.jsx';
import Submitted from './components/submitted.jsx';
import PostCV from './components/postCV.jsx';
import PostJob from './components/postJob.jsx';
import ConfirmAccount from './components/confirmAccount.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route path='/' element={<Home />} />
          <Route path='jobs' element={<Jobs />} />
          <Route path='jobdetails' element={<JobDetail />} />
          <Route path='jobapply' element={<JobApplication />} />
          <Route path='submitted' element={<Submitted />} />
          <Route path='postCV' element={<PostCV />} />
          <Route path='postJob' element={<PostJob />} />{' '}
          <Route path='confirmAccount' element={<ConfirmAccount />} />{' '}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// const HeaderContainer = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   border-bottom: 1px solid grey;
//   background-color: #f0eded;
//   @media (max-width: 900px) {
//     flex-direction: column;
//     text-align: center;
//     background-color: #f0eded;
//   }
// `;

// const HeaderSubCont1 = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 900px) {
//     flex-direction: column;
//     font-size: 20px;
//   }
// `;
// const HeaderSubCont2 = styled.div`
//   display: flex;
//   flex-direction: row;
//   @media (max-width: 900px) {
//     flex-direction: column;
//     font-size: 20px;
//   }
// `;

// const LogoCont = styled.div`
//   padding-top: 18px;
//   padding-left: 20px;
//   padding-right: 20px;
//   width: 150px;
//   @media (max-width: 900px) {
//     width: 100%;
//     text-align: center;
//     padding-left: 0;
//   }
// `;

// const LogoName = styled.div`
//   font-size: 40px;
// `;

// const HeaderSubDiv = styled.div`
//   padding: 40px 12px 20px;
//   &: hover {
//     background-color: #e0dddd;
//     transition: 300ms;
//     border-radius: 10px;
//   }
// `;

// const HeaderSubDivLink = styled.a`
//   text-decoration: none;
//   color: black;
// `;

// // const HeaderList = styled.ul`
// //   list-style-type: none;
// //   padding: 0;
// //   margin: 0;
// //   height: 100vh;
// //   position: absolute;
// //   background-color: black;
// //   top: 0;
// //   left: 100%;
// // `;

// // const HeaderListItem = styled.a`
// //   display: block;
// //   padding: 25px;
// //   color: white;
// // `;

// const LandingImg = styled.img`
//   height: 80vh;
//   width: 100%;
//   padding: 0px;
//   margin: 0px;
//   opacity: 0.75;
// `;

// const BodyDiv = styled.div`
//   position: relative;
// `;

// const BodySubDiv = styled.div`
//   position: absolute;
//   top: 20%;
//   left: 20%;

//   @media (max-width: 400px) {
//     top: 4%;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     top: 7%;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     top: 15%;
//   }

//   @media (min-width: 900px) and (max-width: 1100px) {
//     left: 17%;
//   }
// `;

// const MotoDiv = styled.div`
//   font-size: 50px;
//   color: white;
//   border-radius: 25px;
//   padding: 5px;
//   text-align: center;
// `;

// const InputDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   margin-top: 200px;
//   padding: 5px;
//   width: 100%;

//   @media (max-width: 400px) {
//     flex-direction: column;
//     margin-top: 0px;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     flex-direction: column;
//     margin-top: 0px;
//   }
//   @media (min-width: 600px) and (max-width: 900px) {
//     flex-direction: column;
//     text-align: center;
//     margin-top: 10px;
//   }

//   @media (min-width: 900px) {
//     margin-top: 50px;
//   }
// `;

// const InputField = styled.input`
//   margin-left: 10px;
//   margin-right: 10px;
//   height: 26px;
//   width: 300px;
//   border-radius: 8px;
//   border: none;
//   padding: 4px 20px 5px;
//   font-size: 15px;

//   @media (max-width: 400px) {
//     width: 150px;
//     margin-top: 10px;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     width: 250px;
//     margin-top: 10px;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     margin-top: 10px;
//     width: 340px;
//   }
//   @media (min-width: 900px) and (max-width: 1100px) {
//     width: 200px;
//   }
//   &:focus {
//     outline: none;
//     border: 1px solid rgb(71, 71, 242);
//     transition: 800ms;
//     box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
//       rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
//       rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; /* oranges! yey */
//   }
// `;

// const FindButton = styled.button`
//   border: 1px solid black;
//   color: white;
//   background-color: blue;
//   padding: 7px 12px 8px;
//   width: 100px;
//   border-radius: 10px;
//   border-color: blue;
//   font-size: 15px;
//   &: hover {
//     box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
//     transition: 500ms;
//     cursor: pointer;
//   }

//   @media (max-width: 400px) {
//     width: 200px;
//     margin-top: 10px;
//     margin-left: 10px;
//   }

//   @media (min-width: 400px) and (max-width: 600px) {
//     width: 290px;
//     margin-top: 10px;
//     margin-left: 10px;
//   }

//   @media (min-width: 600px) and (max-width: 900px) {
//     margin-top: 10px;
//     width: 380px;
//   }
// `;

// const OptionDiv = styled.div`
//   text-align: center;
//   color: black;
//   margin-top: 20px;
// `;

// const Option = styled.p`
//   padding: 10px;
// `;

// const OptionLink = styled.a`
//   color: blue;
// `;

// const FooterDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   background-color: #f0eded;
// `;

// const FooterItem = styled.div`
//   display: flex;
//   flex-direction: row;
//   padding: 20px 100px;
// `;

// const FooterItemSubDiv = styled.div`
//   padding: 3px;
// `;

// const FooterImg = styled.img`
//   height: 20px;
//   background-color: white;
// `;

// const FooterLink = styled.a`
//   text-decoration: none;
//   margin-top: 5px;
//   color: black;
//   &:hover {
//     text-decoration: underline;
//     cursor: pointer;
//   }
// `;

// const JobHeadingDiv = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
//   background-color: #f0eded;
// `;

// const JobHeadingSubDiv = styled.div`
//   padding: 40px;
//   &:hover {
//     border-bottom: 3px solid blue;
//   }
// `;

// const JobBody = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: center;
// `;

// const JobBodySubDiv = styled.div`
//   display: flex;
//   flex-direction: column;
//   padding: 10px;
//   overflow-y: scroll;
//   height: 850px;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
// `;

// const JobDiv = styled.div`
//   cursor: pointer;
//   border: 1px solid grey;
//   width: 450px;
//   padding: 10px;
//   border-radius: 20px;
//   height: 250px;
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
// const RecentJobDiv = styled.div`
//   border: 1px solid grey;
//   width: 500px;
//   padding: 10px;
//   border-radius: 20px;
//   @media (min-width: 900px) and (max-width: 1020px) {
//     width: 400px;
//   }
//   @media (min-width: 750px) and (max-width: 900px) {
//     width: 350px;
//   }
//   @media (min-width: 500px) and (max-width: 750px) {
//     width: 300px;
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
// `;

// const JobDate = styled.div`
//   margin-top: 10px;
// `;

// const JobAttributes = styled.div`
//   display: grid;
//   grid-template-rows: 20px 60px 30px;
//   row-gap: 5px;
//   border-bottom: 1px solid grey;
//   padding: 10px;
// `;

// const ApplyButton = styled.button`
//   background-color: blue;
//   color: white;
//   padding: 8px;
//   width: 140px;
//   border-radius: 8px;
//   border: none;
// `;

// const JobDetails = styled.div`
//   display: grid;
//   grid-template-rows: 30px 50px 50px;
//   rows-gap: 10px;
//   border-bottom: 1px solid grey;
//   padding: 10px;
// `;

// const FullJobDesc = styled.div`
//   display: grid;
//   grid-template-rows: 30px auto;
//   padding: 10px;
//   text-align: justify;
// `;

// const FullJobDescSubDiv = styled.div`
//   height: 500px;
//   overflow-y: scroll;
//   box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
// `;
