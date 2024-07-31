import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background);
  padding: 2rem 0;

  h1 {
    max-width: 1120px;
    margin: 0 auto;
    margin-bottom: 3rem;
    margin-top: 3rem;
    padding-inline: 5rem;
  }
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  gap: 2rem 1rem;
  padding-inline: 5rem;
  justify-content: center;
`;


