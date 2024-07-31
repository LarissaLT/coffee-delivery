import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Content, NavBar, Circle } from './styles';
import logo from '../../assets/Logo.png';
import location from '../../assets/Location.png';
import shopping from '../../assets/Shopping.png';
import { CounterContext } from '../units';

export function Header() {
  const { totalUnits, units } = useContext(CounterContext);
  const navigate = useNavigate();

  const totalItems = Object.values(units).reduce((acc, unit) => acc + unit, 0);


  const handleShoppingClick = () => {
    if (totalItems > 0) {
      navigate('/order');
    }
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <Container>
      <Content>
        <img src={logo} alt="coffee delivery" onClick={handleLogoClick} style={{ cursor: 'pointer' }} />
        <NavBar>
          <div className="location">
            <img src={location} alt="location" />
            <h4>Porto Alegre, RS</h4>
          </div>
          <div className="shopping" onClick={handleShoppingClick}>
            <img src={shopping} alt="shopping" />
            {totalUnits > 0 && (
              <Circle>
                {totalUnits}
              </Circle>
            )}
          </div>
        </NavBar>
      </Content>
    </Container>
  );
}
