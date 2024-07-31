import styled from 'styled-components';

export const Container = styled.header`
    background: var(--background);
`;

export const Title = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding-left: 10rem;
    padding-top: 2rem;
    font-weight: bold;
`;


export const TitleLeft = styled.div`
    flex: 1;
    padding-left: 10rem;
`;

export const TitleRight = styled.div`
    flex: 1;
    padding-left: 1rem;
`;

export const Content = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 1rem 5rem;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    p.subtitle {
        padding-left: 1.8rem;
        font-size: .8rem;
    }
`;

export const BodyLeft = styled.div`
    flex: 1;
    border-radius: 8px;
`;

export const BodyLeftFirst = styled.div`
    flex: 1;
    padding: 2rem;
    background: var(--card);
    margin-bottom: 1rem;
    border-radius: 8px;
`;

export const BodyRight = styled.div`
    flex: 1;
    padding: 1rem 0.7rem;
    border-radius: 8px 30px;
    background: var(--card);
    margin-left: 2rem;
`;

export const CoffeeItem = styled.div`
    margin-bottom: 1rem;

    hr {
        width: 100%;
        border: 0;
        border-top: 1px solid #ddd;
        margin: 1rem 0;
    }
`;

export const CoffeeDetails = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: .5rem 0;

    img.img-coffee {
        margin-right: 1rem;
        width: 18%;
    }

    .text-and-controls {
        display: flex;
        flex-direction: column;

        p {
            margin: 0 0 0.5rem 0;
            font-size: 0.8rem;
        }
    }

    .price {
        margin-left: auto;
        align-self: center;
        font-weight: bold;
        font-size: 0.9rem;
    }
`;

export const CoffeeControls = styled.div`
    display: flex;
    align-items: center;
    margin-top: 0.5rem;

    .units {
        display: flex;
        align-items: center;
        font-size: 0.7rem;
        background-color: var(--button);
        border-radius: .3rem;
        display: flex;
        justify-content: center;

        img {
            margin: 0;
            padding: 0.4rem 0.3rem;
            cursor: pointer;
            width: 50%;
        }
    }

    button {
        display: flex;
        align-items: center;
        border-radius: 4px;
        background: var(--button);
        cursor: pointer;
        margin: 0 0.5rem;
        border: none;
        padding: 0 0.2rem;
        font-size: 0.6rem;

        img {
            margin: 0;
            padding: 0.4rem 0.3rem;
            cursor: pointer;
            width: 30%;
        }
    }
`;

export const Itens = styled.div`
    margin-top: 2rem;

    p {
        margin: 0.5rem 0;
    }

    .total{
        font-weight: bold;
    }
`;

export const ValueItem = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const ConfirmButton = styled.button`
    margin-top: 1rem;
    padding: 0.75rem;
    background: var(--yellow);
    color: var(--background);
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
`;

export const BodyLeftSecond = styled.div`
    flex: 1;
    padding-inline: 2rem;
    background: var(--card);
    border-radius: 8px;
`;

export const AddressTitleGroup = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img {
        width: 3.5%;
    }
`;

export const InputAdressGroup = styled.div`
    display: block;
    gap: 0.5rem;
`;

export const InputComplementGroup = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
`;

export const InputRegionGroup = styled.div`
    display: flex;
    gap: 0.5rem;
`;

interface AddressInputProps {
    hasError?: boolean;
}

export const AddressInput = styled.input<AddressInputProps>`
    display: block;
    padding: 0.5rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 4px;
    background: var(--button);
    border: 1px solid ${({ hasError }) => (hasError ? 'red' : 'initial')};
    
    &.cep {
        width: 30%;
    }

    &.street {
        width: 100%;
    }
`;

export const ComplementInput = styled.input`
    padding: 0.5rem;
    border: none;
    border-radius: 4px;
    background: var(--button);

    &:first-child {
        flex: 0 0 30%;
    }

    &:last-child {
        flex: 0 0 66%;
    }
`;

export const RegionInput = styled.input`
    padding: 0.5rem;
    margin-top: 0.5rem;
    border: none;
    border-radius: 4px;
    background: var(--button);

    &.first {
        flex: 0 0 30%;
    }

    &.second {
        flex: 0 0 50%;
    }

    &.last {
        flex: 0 0 5%;
        max-width: 15%;
    }
`;

export const Payment = styled.div`
    padding: 2rem 0;
`;

export const PaymentOptions = styled.div`
    margin-top: 1.5rem;
    display: flex;
    justify-content: space-between;

    button.selected {
    border: 2px solid var(--label); 
    background-color: var(--hover); 
    }

    button {
        padding: 0.5rem 0.3rem;
        border: none;
        border-radius: 4px;
        background: var(--button);
        cursor: pointer;
        width: 10rem;
        font-size: 0.7rem;
        display: flex;
        align-items: center;
        justify-content: center;

        &:hover {
            background: var(--hover);
        }

        img {
            padding-right: 0.5rem;
        }
    }
`;

