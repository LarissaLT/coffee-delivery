import illustration from '../../assets/Illustration.png';
import location from '../../assets/Location-confirmation.png';
import timer from '../../assets/Timer-confirmation.png';
import buy from '../../assets/Buying-confirmation.png';
import { Container, Content, Share, Border, AddressDetails } from './styles';
import { useContext } from 'react';
import { CounterContext } from '../units';

export function Confirmation() {
    const { address } = useContext(CounterContext);

    return(
        <Container>
            <Content>
                <div className='title'>
                    <h2>Uhu! Pedido confirmado</h2>
                    <p>Agora é só aguardar que logo o café chegará até você</p>
                </div>
                <Share>
                    <Border>
                        <div className='confirmations'>
                            <div className='address item'>
                                <img src={location} alt="location" />
                                <AddressDetails>
                                    <p>Entrega em <b>{address.rua}</b>, {address.numero} - {address.complemento}</p>
                                    <p>{address.bairro} - {address.cidade}, <span className="uf">{address.uf}</span></p>
                                </AddressDetails>
                            </div>
                            <div className='waiting item'>
                                <img src={timer} alt="timer" />
                                <div className='text'>
                                    <p>Previsão de entrega</p>
                                    <p>20 min - 30 min </p>
                                </div>
                            </div>
                            <div className='payment item'>
                                <img src={buy} alt="payment" />
                                <div className='text'>
                                    <p>Pagamento na entrega</p>
                                    <p>Cartão de Crédito</p>
                                </div>
                            </div>
                        </div>
                    </Border>
                    <img className='illustration' src={illustration} alt="illustration" />
                </Share>
            </Content>
        </Container>
    );
}