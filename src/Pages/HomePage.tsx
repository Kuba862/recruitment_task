import styled from 'styled-components';
import LanguageSelector from '../components/LanguageSelector';
import { useState } from 'react';
import Target from '../components/target';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5rem;
`;

const Petition = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  box-shadow: 0px 0px 10px #000;
  padding: 20px;
  border-radius: 10px;
  h3 {
    font-size: 1.5em;
    margin-bottom: 10px;
    color: #000;
    text-decoration: none;
    font-weight: 700;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      color: #8686fb;
    }
  }
  p {
    font-size: 1em;
    margin-bottom: 20px;
    /* show only 3 lines of text and add ... at the end */
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;

type NaviagateHandler = (path: string, state: object) => void;

const HomePage = () => {
  const [currentSegment, setCurrentSegment] = useState('en-us');

  return (
    <>
      <LanguageSelector setCurrentSegment={setCurrentSegment} />
      <Section>
            <div className='styled_Petition'>
              <div>
                <h3>Title without HTML tags - linked</h3>
                <p>Body without HTML tags</p>
              </div>
              <div>
                {/* petition image */}
              </div>
            </div>
      </Section>
      <Target />
    </>
  );
};

export default HomePage;
