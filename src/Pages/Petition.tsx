import { useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useId from '../hooks/useId';

const Page = styled.section`
  display: grid;
  grid-template-columns: 50% auto;
  margin: 0 auto;
  width: 80%;
  gap: 1rem;
  padding: 1rem;
`;

const BodySection = styled.div`
  grid-column: 1/2;
  grid-row: 1/-1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  gap: 1rem;
  padding: 1rem;
  h1 {
    text-align: center;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`;
const TeaserSection = styled.div`
  grid-column: 2/3;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 50%;
  gap: 1rem;
  padding: 1rem;
  align-self: end;
  p {
    font-size: 1.2rem;
    color: #727272;
    text-align: left;
  }
`;

export const sanitizedData = (data: string) => ({
  __html: data,
});

const Petition = () => {
  const { id } = useParams();
  const location = useLocation();
  let petition = location.state;
  if (id) {
    const result = useId({ id: id });
    petition = result.petitionData;
  }

  return (
    <Page>
      <BodySection>
        <h1>{petition?.title}</h1>
        <img src={petition?.featured_image} />
        <span>petition to {petition?.recipient_name}</span>
        <p dangerouslySetInnerHTML={sanitizedData(petition?.body)}></p>
      </BodySection>
      <TeaserSection>
        <div>
          <h3>
            Target of this petition: {petition?.goal?.toLocaleString('en-us')}
          </h3>
          <h4>
            Current signatures: {petition?.signature_count?.toLocaleString('fr')}
          </h4>
        </div>
        <p dangerouslySetInnerHTML={sanitizedData(petition?.teaser)}></p>
      </TeaserSection>
    </Page>
  );
};

export default Petition;
