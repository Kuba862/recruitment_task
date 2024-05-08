import { usePetitions } from '../hooks/usePetitions';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import LanguageSelector from '../components/LanguageSelector';
import { useState } from 'react';
import { sanitizedData } from './Petition';

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
  const { petitions } = usePetitions({
    endpoint: '/api/petitions/',
    segment: `segment=${currentSegment}`,
  });

  const navigate = useNavigate();

  const navigateHandler: NaviagateHandler = (path, state) =>
    navigate(path, { state: state });

  return (
    <>
      <LanguageSelector setCurrentSegment={setCurrentSegment} />
      <Section>
        {petitions.map(
          (
            petition: {
              title: string;
              body: string;
              featured_image: string;
              id: number;
            },
            index: number
          ) => (
            <Petition key={index}>
              <div>
                <h3
                  onClick={() =>
                    navigateHandler(
                      `${petition.id}/${petition.title.trim()}`,
                      petition
                    )
                  }
                  dangerouslySetInnerHTML={sanitizedData(petition.title)}
                ></h3>
                <p dangerouslySetInnerHTML={sanitizedData(petition.body)}></p>
              </div>
              <div>
                <img src={petition.featured_image} />
              </div>
            </Petition>
          )
        )}
      </Section>
    </>
  );
};

export default HomePage;
