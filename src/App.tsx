import { BrowserRouter } from 'react-router-dom';
import './App.css'
import { Router } from './Router'
import { UnitCounterContext } from './components/units';
import { GlobalStyles } from './styles/globalStyles';
import { Header } from './components/header';

export function App() {
  
  return (
    <>
    <BrowserRouter>
      <UnitCounterContext>
        <GlobalStyles />
        <Header />
        <Router />
      </UnitCounterContext>
    </BrowserRouter>
    </>
  );
}


