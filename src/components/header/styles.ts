import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  .location {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.25rem;
    padding: 0.5rem;
    gap: 0.5rem;
    font-size: 0.8rem;
    color: var(--purple);
    background-color: var(--purple-light);
  }

  .shopping {
    position: relative;
    border-radius: 0.25rem;
    padding: 0.5rem;
    background-color: var(--yellow-light);
    display: flex;
    align-items: center;
    border: none;
    cursor: pointer;
    
  }

  img {
    height: 1.5rem;
    width: 1.5rem;
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  background-color: var(--yellow); /* Cor do círculo */
  color: white; /* Cor do texto dentro do círculo */
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.8rem;
`;