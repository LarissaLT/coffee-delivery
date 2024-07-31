import { Route, Routes } from 'react-router-dom'

import { Header } from "./components/header";
import { Body } from "./components/body";
import { Products } from "./components/products";
import { Order } from './components/order';
import { Confirmation } from './components/confirmation';

export function Router() {
    return(
        <Routes>
            <Route path='/' element={
                <>
                <Body />
                <Products />
                </>
            } />

            <Route path='/order' element={<Order />} />
            <Route path='/confirmation' element={<Confirmation />} />
            
        </Routes>
    );    
}