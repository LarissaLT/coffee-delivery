import styled from 'styled-components';

export const Container = styled.header`
  background: var(--background);
`;

export const Content = styled.div`

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--input);
    width: 14rem;
    height: 19rem;
    border-radius: 0 1rem 1rem 1rem;
    padding: 1rem;

    .img-coffee {
      margin-top: -2rem;
      margin-bottom: 1rem;
    }

    .types {
      display: flex;
      gap: 0.5rem;
      margin-bottom: 1rem;
      font-size: 0.7rem;
    }

    .type {
      text-transform: uppercase;
      padding: 0.7rem;
      border-radius: 1rem;
      background-color: var(--yellow-light);
      color: var(--yellow-dark);
    }

    .description {
      margin-top: 1rem;
      margin-bottom: 1rem;
      color: var(--label);
      text-align: center;
      padding-inline: 2rem;
      font-size: 0.6rem;
    }
  }
`;

export const PriceAndUnit = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0 1rem;

  .coin {
    font-size: 0.7rem;
    color: var(--text);
    display: flex;
    align-items: center;
  }

  .price {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--text);
    padding-inline: 0.2rem;
    display: flex;
    align-items: center;
  }

  .units {
    display: flex;
    align-items: center;
    margin: 0.5rem;
    background-color: var(--hover);
    border-radius: 0.3rem;

    img {
      margin: 0;
      padding: 0.5rem;
      cursor: pointer;
    }

    .unit-count {
      margin: 0 0.1rem;
    }
  }

  .button {
    cursor: pointer;
    height: 70%;
  }
`;
