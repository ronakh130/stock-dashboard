import { FormEvent, useState } from 'react';
import styled from 'styled-components';
import { useFetchWatchlist } from '../hooks/useFetchWatchlist';
import { Stock } from '../../types';
import { useQueryClient } from '@tanstack/react-query';
import { useAddStock } from '../hooks/useAddStock';
import { ErrorMessage } from './ErrorMessage';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 20rem;
`;

const Input = styled.input`
  background-color: white;
  border-radius: 0.5rem;
  width: 10rem;
  color: black;
  padding: 0.5rem;
  margin: 2rem;
  outline: 0.1rem solid black;
  border: none;
  transition: 0.25s;
  &:hover,
  &:active,
  &:focus {
    outline-color: rgb(0, 119, 255);
    box-shadow: 0rem 0rem 0.2rem rgb(51, 51, 51);
  }
`;

const Button = styled.button`
  border-radius: 0.5rem;
  border: 0.1rem solid transparent;
  height: 2.1rem;
  padding: 0 0.5rem;
  text-align: center;
  background-color: rgb(0, 119, 255);
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    border-color: rgb(0, 119, 255);
    background-color: rgb(30, 135, 255);
  }
  &:focus {
    outline: none;
  }
  &:active {
    border-color: rgb(0, 68, 255);
    background-color: rgb(0, 68, 255);
    border-color: none;
    outline: none;
  }
`;

export const StockInput = () => {
  const qc = useQueryClient();
  const [symbol, setSymbol] = useState('');
  const { data: stocks = [] } = useFetchWatchlist();
  const { mutate: addStockMutation, isPending, isError } = useAddStock();

  const symbols = stocks.reduce((acc: Set<string>, curr: Stock) => {
    acc.add(curr.symbol ?? '');
    return acc;
  }, new Set());

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!symbol.length) return alert('Please enter a stock symbol first.');
    if (symbols.has(symbol.toUpperCase()))
      return alert('You are already watching this stock.');

    addStockMutation(symbol, {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['fetchWatchlist'] });
      },
    });

    setSymbol('');
  }

  return (
    <Container>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Input
          type='text'
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          placeholder='Enter symbol'
        />
        <Button type='submit' disabled={isPending}>
          Submit
        </Button>
      </form>
      <ErrorMessage isError={isError} />
    </Container>
  );
};
