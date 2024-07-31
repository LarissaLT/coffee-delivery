import bigCoffee from '../../assets/Big-coffee.png';
import miniShopping from '../../assets/Mini-shopping.png';
import miniPackage from '../../assets/Mini-package.png';
import miniTime from '../../assets/Mini-time.png';
import miniCoffee from '../../assets/Mini-coffee.png';

import { Container, Content } from './styles';

export function Body() {

    return (
        <Container>
            <Content>      
                <div className="body-left">
                    <div className="body-description">
                        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
                        <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
                    </div>
                    <div className="body-informations">
                        <div className="informations">
                            <img src={miniShopping} alt="mini shopping" />
                            <p>Compra simples e segura</p>
                        </div>    
                        <div className="informations">
                            <img src={miniPackage} alt="mini shopping" />
                            <p>Embalagem mantém o café intacto</p>
                        </div> 
                        <div className="informations">
                            <img src={miniTime} alt="mini shopping" />
                            <p>Entrega rápida e rastreada</p>
                        </div> 
                        <div className="informations">
                            <img src={miniCoffee} alt="mini shopping" />
                            <p>O café chega fresquinho até você</p>
                        </div>                    
                    </div>
                </div>
                <div className="body-right">
                    <img src={bigCoffee} alt="coffee delivery" />
                </div>            
            </Content>
        </Container>
    );
}
