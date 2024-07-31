import { Product, ProductType } from '../product';
import { Container, Content } from './styles';
import { CounterContext } from '../units';
import { useContext } from 'react';
import coffee1 from '../../assets/Coffee-1.png';
import coffee2 from '../../assets/Coffee-2.png';
import coffee3 from '../../assets/Coffee-3.png';
import coffee4 from '../../assets/Coffee-4.png';
import coffee5 from '../../assets/Coffee-5.png';
import coffee6 from '../../assets/Coffee-6.png';

export const products: ProductType[] = [
    { id: 1, category: ["Tradicional", "Clássico"], type: "Expresso Tradicional", value: "9,90", image: coffee4 },
    { id: 2, category: ["Tradicional"], type: "Expresso Americano", value: "10,90", image: coffee5 },
    { id: 3, category: ["Com Leite"], type: "Café com Leite", value: "12,90", image: coffee1 },
    { id: 4, category: ["Tradicional"], type: "Expresso Cremoso", value: "9,90", image: coffee3 },
    { id: 5, category: ["Gelado", "Novo"], type: "Expresso Gelado", value: "10,90", image: coffee2 },
    { id: 6, category: ["Com Leite"], type: "Latte", value: "12,90", image: coffee6 },
];

export function Products() {
    const { units, handleIncrement, handleDecrement, handleBuy } = useContext(CounterContext);

    return (
        <Container>
            <h1>Nossos cafés</h1>
            <Content>
                {products.map((product) => (
                    <Product
                        key={product.id}
                        product={product}
                        units={units[product.id] || 0}
                        onIncrement={() => handleIncrement(product.id)}
                        onDecrement={() => handleDecrement(product.id)}
                        onBuy={() => handleBuy(product.id)}
                    />
                ))}
            </Content>
        </Container>
    );
}
