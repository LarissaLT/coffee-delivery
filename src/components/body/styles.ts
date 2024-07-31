import styled from 'styled-components';

export const Container = styled.header`
    background: var(--background);
    max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 5rem;

    .body-left,
    .body-right {
        width: 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .body-left {
        justify-content: flex-end;
        align-items: flex-end;
        
        .body-description {
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            margin-bottom: 2rem;

            h1 {
                margin: 1rem 0;
                text-align: justify;
            }

            p {
                margin: 1rem 0;
                text-align: justify;
            }
        }

        .body-informations {
            display: grid; 
            grid-template-columns: repeat(2, 1fr);
            grid-template-rows: auto auto; 
            width: 100%;       

            .informations {
                display: flex;
                align-items: center;
                margin: 0.5rem 0;
                font-size: 0.8rem;

                img {
                    margin-right: 0.5rem;
                }
            }
        }
    }

    .body-right {
        align-items: flex-end;
    }

    .body-right {
        img {
            max-width: 90%;
            height: auto;
        }
    }
`;