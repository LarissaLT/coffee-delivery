import location from '../../assets/Location-adress.png';
import payment from '../../assets/Dollar.png';
import credit from '../../assets/Credit.png';
import debit from '../../assets/Debit.png';
import money from '../../assets/Money.png';
import less from '../../assets/Counter-less.png';
import more from '../../assets/Counter-more.png';
import remove from '../../assets/Trash.png';
import { Container, Content, BodyLeft, BodyRight, InputAdressGroup, InputComplementGroup, InputRegionGroup, ComplementInput, RegionInput, AddressTitleGroup, AddressInput, Payment, PaymentOptions, BodyLeftFirst, BodyLeftSecond, Title, CoffeeDetails, CoffeeItem, CoffeeControls, ConfirmButton, ValueItem, Itens, TitleLeft, TitleRight } from './styles';
import { useContext, useState } from 'react';
import { CounterContext } from '../units';
import { products } from '../products';
import { useNavigate } from 'react-router-dom';

export function Order() {
    const { units, handleIncrement, handleDecrement, handleRemove, clearUnits, setAddress } = useContext(CounterContext);
    const [selectedPayment, setSelectedPaymentState] = useState<string>('');
    const [addressDetails, setAddressDetails] = useState({
        cep: '',
        rua: '',
        numero: '',
        complemento: '',
        bairro: '',
        cidade: '',
        uf: ''
    });
    const navigate = useNavigate();

    const totalPrice = Object.entries(units).reduce((total, [productId, quantity]) => {
        const product = products.find(p => p.id === parseInt(productId));
        return total + (product ? parseFloat(product.value.replace(",", ".")) * quantity : 0);
    }, 0).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });

    const handlePaymentSelect = (paymentType: string) => {
        setSelectedPaymentState(paymentType);
    };

    const handleConfirmationClick = () => {
        if (selectedPayment && Object.keys(units).length > 0) {
            clearUnits();
            setAddress(addressDetails); // Armazena o endereço no contexto
            navigate('/confirmation', { state: { selectedPayment, address: addressDetails } });
        }
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setAddressDetails(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    return (
        <Container>
            <Title>
                <TitleLeft>
                    <p>Complete seu pedido</p>
                </TitleLeft>
                <TitleRight>
                    <p>Cafés selecionados</p>
                </TitleRight>
            </Title>
            <Content>
                <BodyLeft>
                    <BodyLeftFirst>
                        <AddressTitleGroup>
                            <img src={location} alt="mini shopping" />
                            <p>Endereço de entrega</p>
                        </AddressTitleGroup>
                        <p className='subtitle'>Informe o endereço onde deseja receber seu pedido</p>
                        <InputAdressGroup>
                            <AddressInput className="cep" placeholder="CEP" name="cep" value={addressDetails.cep} onChange={handleInputChange} />
                            <AddressInput className="street" placeholder="Rua" name="rua" value={addressDetails.rua} onChange={handleInputChange} />
                        </InputAdressGroup>

                        <InputComplementGroup>
                            <ComplementInput className="first" placeholder="Número" name="numero" value={addressDetails.numero} onChange={handleInputChange} />
                            <ComplementInput className="last" placeholder="Complemento" name="complemento" value={addressDetails.complemento} onChange={handleInputChange} />
                        </InputComplementGroup>

                        <InputRegionGroup>
                            <RegionInput className="first" placeholder="Bairro" name="bairro" value={addressDetails.bairro} onChange={handleInputChange} />
                            <RegionInput className="second" placeholder="Cidade" name="cidade" value={addressDetails.cidade} onChange={handleInputChange} />
                            <RegionInput className="last" placeholder="UF" name="uf" value={addressDetails.uf} onChange={handleInputChange} />
                        </InputRegionGroup>
                    </BodyLeftFirst>

                    <BodyLeftSecond>
                        <Payment>
                            <AddressTitleGroup>
                                <img src={payment} alt="pagamento" />
                                <p>Pagamento</p>
                            </AddressTitleGroup>
                            <p className='subtitle'>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
                            <PaymentOptions>
                                <button
                                    className={selectedPayment === 'credit' ? 'selected' : ''}
                                    onClick={() => handlePaymentSelect('credit')}
                                >
                                    <img src={credit} alt="credit" />
                                    CARTÃO DE CRÉDITO
                                </button>
                                <button
                                    className={selectedPayment === 'debit' ? 'selected' : ''}
                                    onClick={() => handlePaymentSelect('debit')}
                                >
                                    <img src={debit} alt="debit" />
                                    CARTÃO DE DÉBITO
                                </button>
                                <button
                                    className={selectedPayment === 'money' ? 'selected' : ''}
                                    onClick={() => handlePaymentSelect('money')}
                                >
                                    <img src={money} alt="money" />
                                    DINHEIRO
                                </button>
                            </PaymentOptions>
                        </Payment>
                    </BodyLeftSecond>
                </BodyLeft>

                <BodyRight>
                    <div className="selected-coffees">
                        {Object.entries(units).map(([productId, quantity]) => {
                            const product = products.find(p => p.id === parseInt(productId));
                            return product ? (
                                <CoffeeItem key={product.id}>
                                    <CoffeeDetails>
                                        <img className="img-coffee" src={product.image} alt={product.type} />
                                        <div className="text-and-controls">
                                            <p>{product.type}</p>
                                            <CoffeeControls>
                                                <div className="units">
                                                    <img src={less} alt="less" onClick={() => handleDecrement(product.id)} />
                                                    <div>{quantity}</div>
                                                    <img src={more} alt="more" onClick={() => handleIncrement(product.id)} />
                                                </div>
                                                <button onClick={() => handleRemove(product.id)}>
                                                    <img src={remove} alt="remove" />
                                                    REMOVER
                                                </button>
                                            </CoffeeControls>
                                        </div>
                                        <p className="price">R$ {(quantity * parseFloat(product.value.replace(",", "."))).toLocaleString('pt-BR', {
                                            minimumFractionDigits: 2,
                                            maximumFractionDigits: 2,
                                        })}</p>
                                    </CoffeeDetails>
                                    <hr />
                                </CoffeeItem>
                            ) : null;
                        })}
                        <Itens>
                            <ValueItem>
                                <p>Total de itens</p>
                                <p>R$ {totalPrice}</p>
                            </ValueItem>
                            <ValueItem>
                                <p>Entrega:</p>
                                <p>R$ 3,50</p>
                            </ValueItem>
                            <ValueItem className='total'>
                                <p>Total:</p>
                                <p>R$ {(parseFloat(totalPrice.replace(",", ".")) + 3.50).toLocaleString('pt-BR', {
                                    minimumFractionDigits: 2,
                                    maximumFractionDigits: 2,
                                })}</p>
                            </ValueItem>
                        </Itens>
                        <ConfirmButton onClick={handleConfirmationClick}>
                            CONFIRMAR PEDIDO
                        </ConfirmButton>
                    </div>
                </BodyRight>
            </Content>
        </Container>
    );
}
