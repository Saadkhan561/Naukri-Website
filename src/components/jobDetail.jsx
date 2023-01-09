import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const JobDetail = () => {
  const navigate = useNavigate();
  return (
    <div id='job-detail'>
      <BackButtonDiv>
        <div>
          <img
            src='./assets/back arrow.png'
            onClick={() => navigate('/jobs')}
          ></img>
        </div>
        <div id='go-back'>Go Back To Job Searching</div>
      </BackButtonDiv>
      <JobDetailDiv>
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
            <ApplyButton onClick={() => navigate('/jobapply')}>
              Apply Now
            </ApplyButton>
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
              asperiores at, aliquam quam nemo odit aliquid ipsam. Repellendus
              nesciunt sint tempora eius deserunt aliquid nam incidunt aliquam
              perspiciatis dicta consequatur officiis impedit libero, explicabo
              error. Reprehenderit obcaecati veniam molestiae inventore eum
              temporibus fugiat ab fugit maxime cumque, provident itaque atque a
              quos earum, magni sunt sed. Similique praesentium, quis vero nemo
              nesciunt labore ad sequi? Et recusandae numquam, ipsa, nihil
              impedit odit excepturi porro eum cumque nisi, officia natus
              placeat! Consectetur enim sunt veritatis praesentium. Lorem ipsum,
              dolor sit amet consectetur adipisicing elit. Porro autem harum in
              eos qui tempore nostrum esse reprehenderit odit dolore suscipit
              assumenda officia optio doloribus perferendis quisquam sapiente
              perspiciatis cumque sequi, dicta quam voluptate atque nam? Minima
              alias repellat perspiciatis assumenda nam reprehenderit quia
              officia, corporis et error non autem consequuntur quaerat, rerum
              vitae? Ipsa quae dignissimos, corporis magnam quisquam labore ad
              dolorem consequatur nesciunt dolore nihil vel dolorum accusantium
              aliquid quis ullam alias incidunt illo amet soluta. Alias sint
              necessitatibus deserunt ex accusamus veritatis asperiores
              molestiae qui nisi dolores, non porro. Illo iusto quis maiores
              maxime atque voluptatum excepturi magnam harum quam non
              laudantium, numquam deserunt eum rerum repudiandae nisi autem
              sapiente magni. Suscipit repudiandae magnam tempora nihil
              voluptate, ut quod repellat, cupiditate saepe totam quae
              blanditiis id adipisci unde? Atque eligendi ipsam nobis ratione
              distinctio, nostrum eaque nisi maiores a reprehenderit harum quis,
              beatae quibusdam expedita tempore voluptatem accusantium eius
              magni ad quisquam veritatis porro alias dolorum ut? Reprehenderit
              magnam eius recusandae? Quae ab doloremque facere dolorum in
              officiis reiciendis pariatur dolores est nostrum tempore, odit
              perspiciatis veniam fuga? Laboriosam, perferendis itaque iste est
              dignissimos harum voluptas possimus deserunt nobis nam accusamus
              sunt aliquid fuga fugiat quae nemo qui, libero atque. Ipsam
              sapiente laboriosam harum quisquam nostrum repellat a? Culpa nisi
              sapiente in tenetur quisquam totam voluptatum molestiae unde et
              quos? Veritatis sunt laboriosam unde totam accusantium earum esse
              libero incidunt adipisci aut! Quisquam, aperiam. Enim voluptatum
              placeat fugiat dicta consequuntur eum rem voluptatibus, eius at
              quod maiores, tempore qui reprehenderit odit, cupiditate
              praesentium architecto. Quos ipsum alias reprehenderit aspernatur
              at possimus minima vero suscipit magni repudiandae iste corporis
              quo dolor amet distinctio, veritatis nobis, harum id sit
              voluptatum laborum eum tenetur? Corporis nulla nisi quia maxime,
              iure, deleniti itaque culpa eius ut tempore quis ipsa quos?
              Voluptate, praesentium sed explicabo harum nulla voluptates cum
              nihil quas repellat alias amet quos repudiandae animi atque dolor
              nisi reiciendis! Reprehenderit placeat tempora sequi, delectus
              consequatur, optio non inventore eaque, eos quam nulla provident
              ipsa! Explicabo unde eos amet eum? Corrupti quis dolor quas ullam
              ratione veniam optio, porro ut repellendus voluptatem consequatur
              enim fugit accusantium, sit vitae debitis nulla? Cumque, provident
              rerum. Iusto, dolorem! Exercitationem quis est possimus, nulla
              culpa accusantium dolor veritatis sapiente voluptatem qui ab
              tenetur beatae praesentium fuga, enim quae commodi quas pariatur
              vitae debitis neque aperiam quibusdam quia similique. Alias est
              dolorum minus molestias rem explicabo vitae earum necessitatibus
              libero labore ullam ipsum a sequi, quae velit aut, aperiam veniam
              sit ipsa, obcaecati beatae eaque mollitia voluptatibus? Magnam ex
              eos dolorem vitae culpa, ab cum totam quam consectetur delectus
              vero quo voluptates et aliquam atque repudiandae! Iste cum velit
              itaque necessitatibus. Praesentium repellat perspiciatis,
              molestiae suscipit tempora expedita recusandae quae, earum
              deleniti at accusamus reiciendis explicabo. Officia exercitationem
              laboriosam harum. Aspernatur dolore minima recusandae placeat hic.
              Consequuntur, consectetur facilis. Dolor error id quae laborum
              fugiat nesciunt quo minima. Reiciendis, nemo vero sed sunt natus
              itaque laboriosam repellendus quos culpa nulla? Modi explicabo
              sapiente enim vel molestias dicta aperiam incidunt qui deserunt
              placeat, illo hic quasi eius quae nobis possimus cum sequi
              facilis! Beatae aliquid soluta quisquam commodi similique autem
              minus nesciunt, vitae reiciendis debitis, consectetur laboriosam
              at labore modi aspernatur, hic iure ipsum quam? Possimus qui, ex
              beatae quisquam rerum impedit velit iure sed quibusdam placeat
              dolore sapiente reiciendis, minus doloribus fuga asperiores
              delectus maxime ipsam necessitatibus aperiam sint ipsum. Non odit
              ea voluptatem suscipit unde recusandae dolores inventore,
              similique quidem ratione ad! At rerum voluptates nisi soluta
              veritatis maxime, id tenetur iure! Asperiores, inventore neque
              soluta harum corporis blanditiis atque nesciunt veniam ab iure
              exercitationem iusto molestias animi dolorum mollitia nulla
              reiciendis. Soluta ex possimus accusantium nobis aliquid velit!
              Hic voluptatem placeat consectetur quos corrupti, esse atque harum
              itaque amet reiciendis rem natus tenetur libero facere officiis.
              Est maxime amet dolores ipsam, nihil recusandae magni suscipit
              consequatur, fuga eveniet soluta hic ut veniam reprehenderit
              doloremque ratione molestias, provident culpa magnam error. Rerum
              quis assumenda, necessitatibus eius voluptas iste, maxime eum
              voluptate, odio neque quos nemo possimus aperiam ut odit numquam
              magni facere eveniet illo quod qui expedita! Dolore delectus
              possimus, blanditiis repudiandae quaerat omnis in obcaecati quas
              doloremque asperiores itaque quae eligendi. Aliquam quo esse iusto
              architecto debitis rerum eum vero, nobis placeat officiis, quia
              obcaecati aliquid harum deleniti consequatur soluta nostrum vel
              consequuntur eaque illum aperiam! Nisi, officia quasi ad laborum
              maiores consectetur magnam saepe dicta harum beatae eaque id earum
              aspernatur optio totam necessitatibus ipsa tenetur voluptatibus
              odit eligendi reprehenderit ut? Praesentium, perferendis corporis
              odit temporibus minima velit ut, ullam eos, commodi iste
              reiciendis repellat? Excepturi totam officiis, nulla doloribus
              iste, quisquam nemo aperiam ad labore quaerat quam dicta earum
              aliquam? Quisquam obcaecati veritatis, earum aspernatur blanditiis
              illo illum modi asperiores animi dolorum repellat provident rem
              expedita tenetur ullam ea nisi. Minima molestiae architecto ut
              doloremque officiis magnam quam sed facilis. In aperiam
              voluptatibus sed vitae eius, ullam, sunt consequuntur fugiat error
              vero quaerat voluptas quas itaque corrupti blanditiis. Modi
              veritatis esse dolorum eum et ipsam. Rem, ea pariatur sit
              similique illum est facilis, aliquid quasi enim accusamus
              sapiente. Qui possimus delectus accusantium. Nulla, quia mollitia
              nihil et sed, sint suscipit, temporibus soluta quod dolor ab natus
              nam dicta. Provident voluptatem voluptates rem unde eligendi
              tempore assumenda maiores temporibus quaerat, voluptatibus at
              nihil dicta nesciunt explicabo numquam quasi doloremque esse quas
              omnis laudantium repudiandae ipsum incidunt ullam earum? Doloribus
              dolorem, officia quod cum esse ullam eveniet dolor tempora
              pariatur? Quia debitis quam deleniti accusantium? Explicabo, nam,
              mollitia dolorem earum illo dolore qui exercitationem tempore ipsa
              neque quod nulla sed perspiciatis culpa itaque, illum perferendis
              nihil omnis doloremque. Ipsam commodi possimus, quae aspernatur
              natus pariatur maiores nam placeat itaque veniam atque est eum,
              voluptates sint dolorem laboriosam repellendus illum quasi
              similique doloremque. Aspernatur dolorum error quod consequuntur,
              maxime veniam assumenda molestias. Maiores voluptates iusto autem
              perspiciatis harum a facere debitis in quam earum consequatur quod
              possimus minus nam nostrum tenetur nobis, rerum dolorem.
              Doloremque architecto asperiores earum nemo eos, repellat
              blanditiis sed quis iusto.
            </div>
          </FullJobDescSubDiv>
        </FullJobDesc>
      </JobDetailDiv>
    </div>
  );
};

export default JobDetail;

// STYLED CSS

const JobDetailDiv = styled.div`
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  margin-bottom: 40px;
  width: 80%;
  padding: 10px;
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
  cursor: pointer;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset;
`;

const BackButtonDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 8px;
  cursor: pointer;
`;
