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
          <JobBodySubDiv id='job-div'>
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
                    <img
                      src='./assets/cross.png'
                      alt=''
                      height={40}
                      width={40}
                    />
                  </button>
                </div>
              </JobSubDiv>
              <JobProperty>
                <div id='job-property'>Job Property 1</div>
                <div id='job-property'>Job Property 2</div>
              </JobProperty>
              <ShortDesc>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  cum consequatur magnam tempore similique sunt beatae
                  praesentium porro, fugiat ut!
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
                    <img
                      src='./assets/cross.png'
                      alt=''
                      height={40}
                      width={40}
                    />
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  cum consequatur magnam tempore similique sunt beatae
                  praesentium porro, fugiat ut!
                </li>
              </ShortDesc>
              <JobDate>Post Date</JobDate>
            </JobDiv>
          </JobBodySubDiv>
          <div id='job-div'>
            <RecentJobDiv>
              <JobAttributes>
                <div>
                  <h3>Job Title</h3>
                </div>
                <div>
                  {' '}
                  <p className='font-colror'>Company Name</p>
                  <p>Company Location</p>
                  <p>Salary</p>
                </div>
                <div>
                  <ApplyButton>Apply Now</ApplyButton>
                </div>
              </JobAttributes>
              <br />
              <JobDetails>
                <div>
                  <h3>Job Details</h3>
                </div>
                <div>
                  <b>
                    <p>Salary</p>
                  </b>
                  <p>Salary Range</p>
                </div>
                <div>
                  <b>
                    <p>Job Type</p>
                  </b>
                  <p>Full time</p>
                </div>
              </JobDetails>
              <br />
              <FullJobDesc>
                <h3>Full Job Description</h3>
                <FullJobDescSubDiv>
                  <div>
                    {' '}
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Molestiae, voluptas adipisci vero laborum fuga perferendis
                    voluptatum odio, vel, id culpa dolorem quas! Cum architecto
                    asperiores at, aliquam quam nemo odit aliquid ipsam.
                    Repellendus nesciunt sint tempora eius deserunt aliquid nam
                    incidunt aliquam perspiciatis dicta consequatur officiis
                    impedit libero, explicabo error. Reprehenderit obcaecati
                    veniam molestiae inventore eum temporibus fugiat ab fugit
                    maxime cumque, provident itaque atque a quos earum, magni
                    sunt sed. Similique praesentium, quis vero nemo nesciunt
                    labore ad sequi? Et recusandae numquam, ipsa, nihil impedit
                    odit excepturi porro eum cumque nisi, officia natus placeat!
                    Consectetur enim sunt veritatis praesentium. Lorem ipsum,
                    dolor sit amet consectetur adipisicing elit. Porro autem
                    harum in eos qui tempore nostrum esse reprehenderit odit
                    dolore suscipit assumenda officia optio doloribus
                    perferendis quisquam sapiente perspiciatis cumque sequi,
                    dicta quam voluptate atque nam? Minima alias repellat
                    perspiciatis assumenda nam reprehenderit quia officia,
                    corporis et error non autem consequuntur quaerat, rerum
                    vitae? Ipsa quae dignissimos, corporis magnam quisquam
                    labore ad dolorem consequatur nesciunt dolore nihil vel
                    dolorum accusantium aliquid quis ullam alias incidunt illo
                    amet soluta. Alias sint necessitatibus deserunt ex accusamus
                    veritatis asperiores molestiae qui nisi dolores, non porro.
                    Illo iusto quis maiores maxime atque voluptatum excepturi
                    magnam harum quam non laudantium, numquam deserunt eum rerum
                    repudiandae nisi autem sapiente magni. Suscipit repudiandae
                    magnam tempora nihil voluptate, ut quod repellat, cupiditate
                    saepe totam quae blanditiis id adipisci unde? Atque eligendi
                    ipsam nobis ratione distinctio, nostrum eaque nisi maiores a
                    reprehenderit harum quis, beatae quibusdam expedita tempore
                    voluptatem accusantium eius magni ad quisquam veritatis
                    porro alias dolorum ut? Reprehenderit magnam eius
                    recusandae? Quae ab doloremque facere dolorum in officiis
                    reiciendis pariatur dolores est nostrum tempore, odit
                    perspiciatis veniam fuga? Laboriosam, perferendis itaque
                    iste est dignissimos harum voluptas possimus deserunt nobis
                    nam accusamus sunt aliquid fuga fugiat quae nemo qui, libero
                    atque. Ipsam sapiente laboriosam harum quisquam nostrum
                    repellat a? Culpa nisi sapiente in tenetur quisquam totam
                    voluptatum molestiae unde et quos? Veritatis sunt laboriosam
                    unde totam accusantium earum esse libero incidunt adipisci
                    aut! Quisquam, aperiam. Enim voluptatum placeat fugiat dicta
                    consequuntur eum rem voluptatibus, eius at quod maiores,
                    tempore qui reprehenderit odit, cupiditate praesentium
                    architecto. Quos ipsum alias reprehenderit aspernatur at
                    possimus minima vero suscipit magni repudiandae iste
                    corporis quo dolor amet distinctio, veritatis nobis, harum
                    id sit voluptatum laborum eum tenetur? Corporis nulla nisi
                    quia maxime, iure, deleniti itaque culpa eius ut tempore
                    quis ipsa quos? Voluptate, praesentium sed explicabo harum
                    nulla voluptates cum nihil quas repellat alias amet quos
                    repudiandae animi atque dolor nisi reiciendis! Reprehenderit
                    placeat tempora sequi, delectus consequatur, optio non
                    inventore eaque, eos quam nulla provident ipsa! Explicabo
                    unde eos amet eum? Corrupti quis dolor quas ullam ratione
                    veniam optio, porro ut repellendus voluptatem consequatur
                    enim fugit accusantium, sit vitae debitis nulla? Cumque,
                    provident rerum. Iusto, dolorem! Exercitationem quis est
                    possimus, nulla culpa accusantium dolor veritatis sapiente
                    voluptatem qui ab tenetur beatae praesentium fuga, enim quae
                    commodi quas pariatur vitae debitis neque aperiam quibusdam
                    quia similique. Alias est dolorum minus molestias rem
                    explicabo vitae earum necessitatibus libero labore ullam
                    ipsum a sequi, quae velit aut, aperiam veniam sit ipsa,
                    obcaecati beatae eaque mollitia voluptatibus? Magnam ex eos
                    dolorem vitae culpa, ab cum totam quam consectetur delectus
                    vero quo voluptates et aliquam atque repudiandae! Iste cum
                    velit itaque necessitatibus. Praesentium repellat
                    perspiciatis, molestiae suscipit tempora expedita recusandae
                    quae, earum deleniti at accusamus reiciendis explicabo.
                    Officia exercitationem laboriosam harum. Aspernatur dolore
                    minima recusandae placeat hic. Consequuntur, consectetur
                    facilis. Dolor error id quae laborum fugiat nesciunt quo
                    minima. Reiciendis, nemo vero sed sunt natus itaque
                    laboriosam repellendus quos culpa nulla? Modi explicabo
                    sapiente enim vel molestias dicta aperiam incidunt qui
                    deserunt placeat, illo hic quasi eius quae nobis possimus
                    cum sequi facilis! Beatae aliquid soluta quisquam commodi
                    similique autem minus nesciunt, vitae reiciendis debitis,
                    consectetur laboriosam at labore modi aspernatur, hic iure
                    ipsum quam? Possimus qui, ex beatae quisquam rerum impedit
                    velit iure sed quibusdam placeat dolore sapiente reiciendis,
                    minus doloribus fuga asperiores delectus maxime ipsam
                    necessitatibus aperiam sint ipsum. Non odit ea voluptatem
                    suscipit unde recusandae dolores inventore, similique quidem
                    ratione ad! At rerum voluptates nisi soluta veritatis
                    maxime, id tenetur iure! Asperiores, inventore neque soluta
                    harum corporis blanditiis atque nesciunt veniam ab iure
                    exercitationem iusto molestias animi dolorum mollitia nulla
                    reiciendis. Soluta ex possimus accusantium nobis aliquid
                    velit! Hic voluptatem placeat consectetur quos corrupti,
                    esse atque harum itaque amet reiciendis rem natus tenetur
                    libero facere officiis. Est maxime amet dolores ipsam, nihil
                    recusandae magni suscipit consequatur, fuga eveniet soluta
                    hic ut veniam reprehenderit doloremque ratione molestias,
                    provident culpa magnam error. Rerum quis assumenda,
                    necessitatibus eius voluptas iste, maxime eum voluptate,
                    odio neque quos nemo possimus aperiam ut odit numquam magni
                    facere eveniet illo quod qui expedita! Dolore delectus
                    possimus, blanditiis repudiandae quaerat omnis in obcaecati
                    quas doloremque asperiores itaque quae eligendi. Aliquam quo
                    esse iusto architecto debitis rerum eum vero, nobis placeat
                    officiis, quia obcaecati aliquid harum deleniti consequatur
                    soluta nostrum vel consequuntur eaque illum aperiam! Nisi,
                    officia quasi ad laborum maiores consectetur magnam saepe
                    dicta harum beatae eaque id earum aspernatur optio totam
                    necessitatibus ipsa tenetur voluptatibus odit eligendi
                    reprehenderit ut? Praesentium, perferendis corporis odit
                    temporibus minima velit ut, ullam eos, commodi iste
                    reiciendis repellat? Excepturi totam officiis, nulla
                    doloribus iste, quisquam nemo aperiam ad labore quaerat quam
                    dicta earum aliquam? Quisquam obcaecati veritatis, earum
                    aspernatur blanditiis illo illum modi asperiores animi
                    dolorum repellat provident rem expedita tenetur ullam ea
                    nisi. Minima molestiae architecto ut doloremque officiis
                    magnam quam sed facilis. In aperiam voluptatibus sed vitae
                    eius, ullam, sunt consequuntur fugiat error vero quaerat
                    voluptas quas itaque corrupti blanditiis. Modi veritatis
                    esse dolorum eum et ipsam. Rem, ea pariatur sit similique
                    illum est facilis, aliquid quasi enim accusamus sapiente.
                    Qui possimus delectus accusantium. Nulla, quia mollitia
                    nihil et sed, sint suscipit, temporibus soluta quod dolor ab
                    natus nam dicta. Provident voluptatem voluptates rem unde
                    eligendi tempore assumenda maiores temporibus quaerat,
                    voluptatibus at nihil dicta nesciunt explicabo numquam quasi
                    doloremque esse quas omnis laudantium repudiandae ipsum
                    incidunt ullam earum? Doloribus dolorem, officia quod cum
                    esse ullam eveniet dolor tempora pariatur? Quia debitis quam
                    deleniti accusantium? Explicabo, nam, mollitia dolorem earum
                    illo dolore qui exercitationem tempore ipsa neque quod nulla
                    sed perspiciatis culpa itaque, illum perferendis nihil omnis
                    doloremque. Ipsam commodi possimus, quae aspernatur natus
                    pariatur maiores nam placeat itaque veniam atque est eum,
                    voluptates sint dolorem laboriosam repellendus illum quasi
                    similique doloremque. Aspernatur dolorum error quod
                    consequuntur, maxime veniam assumenda molestias. Maiores
                    voluptates iusto autem perspiciatis harum a facere debitis
                    in quam earum consequatur quod possimus minus nam nostrum
                    tenetur nobis, rerum dolorem. Doloremque architecto
                    asperiores earum nemo eos, repellat blanditiis sed quis
                    iusto.
                  </div>
                </FullJobDescSubDiv>
              </FullJobDesc>
            </RecentJobDiv>
          </div>
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
    top: 15%;
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
    cursor: pointer;
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

const JobBodySubDiv = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;

const JobDiv = styled.div`
  border: 1px solid grey;
  width: 450px;
  padding: 10px;
  border-radius: 20px;
  height: 250px;
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
const RecentJobDiv = styled.div`
  border: 1px solid grey;
  width: 500px;
  padding: 10px;
  border-radius: 20px;
  @media (min-width: 900px) and (max-width: 1020px) {
    width: 400px;
  }
  @media (min-width: 750px) and (max-width: 900px) {
    width: 350px;
  }
  @media (min-width: 500px) and (max-width: 750px) {
    width: 300px;
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

const ShortDesc = styled.ul`
  margin-left: 20px;
`;

const JobDate = styled.div`
  margin-top: 10px;
`;

const JobAttributes = styled.div`
  display: grid;
  grid-template-rows: 20px 60px 30px;
  row-gap: 5px;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const ApplyButton = styled.button`
  background-color: blue;
  color: white;
  padding: 8px;
  width: 140px;
  border-radius: 8px;
  border: none;
`;

const JobDetails = styled.div`
  display: grid;
  grid-template-rows: 30px 50px 50px;
  rows-gap: 10px;
  border-bottom: 1px solid grey;
  padding: 10px;
`;

const FullJobDesc = styled.div`
  display: grid;
  grid-template-rows: 30px auto;
  padding: 10px;
  text-align: justify;
`;

const FullJobDescSubDiv = styled.div`
  height: 500px;
  overflow-y: scroll;
`;
