import styled from 'styled-components';

export const Container = styled.header`
    background: var(--background);
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 2rem 5rem;

    h2 {
        color: var(--yellow);
    }

    .title {
        margin-bottom: 1.5rem;
    }
`;

export const Share = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .confirmations {
        display: flex;
        flex-direction: column;
        gap: 1rem; 

        .item {
            display: flex;
            align-items: center; 

            img {
                margin-right: 1rem; 
            }

            .text {
                display: flex;
                flex-direction: column;
                font-size: 0.8rem;
            }
        }

        .waiting {
            p:last-child {
                font-weight: bold;
            }
        }

        .payment {
            p:last-child {
                font-weight: bold;
            }
        }
    }

    .illustration {
        width: 40%;
    }
`;

export const AddressDetails = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 0.8rem;
    text-transform: capitalize;

    span {
        text-transform: uppercase;
    }
`;


export const Border = styled.div`
    border: 1.5px solid #ccc;
    padding: 2rem;
    border-radius: .4rem 2rem; 
    margin-right: 1rem; 
`;




