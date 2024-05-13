import styled from 'styled-components';

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

  return (
    <Page>
      <BodySection>
        <h1>Title</h1>
        {/* image */}
        {/* <span>petition to <recipient_name></span> */}
        <p>Petition body without HTML</p>
      </BodySection>
      <TeaserSection>
        <div>
          <h3>
            Target of this petition: petition goal in 10,000 format
          </h3>
          <h4>
            Current signatures: signature count in 10 000 format
          </h4>
        </div>
        <p>Petition teaser without HTML tags</p>
      </TeaserSection>
    </Page>
  );
};

export default Petition;
