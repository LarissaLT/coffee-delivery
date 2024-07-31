import { useNavigate } from 'react-router-dom';
import less from '../../assets/Counter-less.png';
import more from '../../assets/Counter-more.png';
import buy from '../../assets/Shopping-buy.png';
import { Container, Content, PriceAndUnit } from './styles';

export interface ProductType { 
    id: number;
    category: string[];
    type: string;
    value: string;
    image: string;
}

export interface ProductProps {
    product: ProductType; 
    units: number;
    onIncrement: (productId: number) => void;
    onDecrement: (productId: number) => void;
    onBuy: (productId: number) => void; 
}

export function Product({ product, units, onIncrement, onDecrement, onBuy }: ProductProps) {
    const navigate = useNavigate();

    const handleShoppingClick = () => {
        navigate('/order');
      };

    return (
        <Container>
            <Content>
                <div className="item" key={product.id}>
                    <img className='img-coffee' src={product.image} alt={product.type} />
                    <div className="types">
                        {product.category.map((category, index) => (
                            <div className="type" key={index}>{category}</div>
                        ))}
                    </div>
                    <h4>{product.type}</h4>
                    <p className='description'>O tradicional café feito com água quente e grãos moídos</p>
                    <PriceAndUnit>
                        <div className="coin">R$</div>
                        <div className='price'>{product.value}</div>
                        <div className="units">
                            <img
                                src={less}
                                alt="less"
                                onClick={() => onDecrement(product.id)}
                            />
                            <div>{units}</div>
                            <img
                                src={more}
                                alt="more"
                                onClick={() => onIncrement(product.id)}
                            />
                        </div>
                        <img
                            className="button"
                            src={buy}
                            alt="buy"
                            onClick={handleShoppingClick} style={{ cursor: 'pointer' }} 
                        />
                    </PriceAndUnit>
                </div>
            </Content>
        </Container>
    );
}