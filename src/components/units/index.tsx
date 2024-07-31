import { createContext, useState, ReactNode, useEffect } from 'react';

export interface Address {
  rua: string;
  numero: string;
  complemento: string;
  bairro: string;
  cidade: string;
  uf: string;
}

interface CounterContextType {
  units: { [productId: number]: number };
  handleIncrement: (productId: number) => void;
  handleDecrement: (productId: number) => void;
  handleBuy: (productId: number) => void;
  handleRemove: (id: number) => void;
  clearUnits: () => void;
  totalUnits: number;
  address: Address;
  setAddress: (address: Address) => void;
  selectedPayment: string;
  setSelectedPayment: (payment: string) => void;
}


export const CounterContext = createContext<CounterContextType>({
  units: {},
  handleIncrement: () => {},
  handleDecrement: () => {},
  handleBuy: () => {},
  handleRemove: () => {},
  clearUnits: () => {},
  totalUnits: 0,
  address: { rua: '', numero: '', complemento: '', bairro: '', cidade: '', uf: '' },
  setAddress: () => {},
  selectedPayment: '',
  setSelectedPayment: () => {},
});

export function UnitCounterContext({ children }: { children: ReactNode }) {
  const [units, setUnits] = useState<{ [productId: number]: number }>({});
  const [totalUnits, setTotalUnits] = useState<number>(0);
  const [selectedPayment, setSelectedPayment] = useState<string>('');
  const [address, setAddress] = useState<Address>({ 
    rua: '', 
    numero: '', 
    complemento: '', 
    bairro: '', 
    cidade: '', 
    uf: '' 
  });


  useEffect(() => {
    setTotalUnits(Object.values(units).reduce((acc, count) => acc + count, 0));
  }, [units]); // Recalcula totalUnits sempre que units muda

  const handleIncrement = (productId: number) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [productId]: (prevUnits[productId] || 0) + 1,
    }));
  };

  const handleDecrement = (productId: number) => {
    setUnits((prevUnits) => ({
      ...prevUnits,
      [productId]: Math.max((prevUnits[productId] || 0) - 1, 0),
    }));
  };

  const handleBuy = (productId: number) => {
    setTotalUnits(Object.values(units).reduce((acc, count) => acc + count, 0));
  };

  const handleRemove = (id: number) => {
    setUnits(prev => {
      const newUnits = { ...prev };
      delete newUnits[id];
      return newUnits;
    });
  };

  const clearUnits = () => {
    setUnits({});
    setTotalUnits(0);
  };

  return (
    <CounterContext.Provider value={{ units, handleIncrement, handleDecrement, handleBuy, handleRemove, clearUnits, totalUnits, address, setAddress, selectedPayment, setSelectedPayment }}>
      {children}
    </CounterContext.Provider>
  );
};