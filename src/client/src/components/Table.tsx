import styled from 'styled-components';
import { DeleteButton } from './DeleteButton';
import { useFetchWatchlist } from '../hooks/useFetchWatchlist';
import { Stock } from '../../types';
import { useMemo } from 'react';

const Container = styled.table`
  border: 0.1rem solid #ddd;
  width: 90%;
  color: black;
  border-collapse: collapse;
`;

const Column = styled.th`
  border: 0.1rem solid #ddd;
  padding: 0.5rem 1rem;
`;

const Row = styled.tr`
  border: 0.1rem solid #ddd;
  padding: 5rem;
  &:nth-child(even) {
    background-color: #f2f2f2;
  }
  &:hover,
  &:active {
    background-color: #ddd;
  }
`;

const Cell = styled.td`
  padding: 0.5rem;
`;

export const Table = () => {
  const { data: stocks = [] } = useFetchWatchlist();
  const formattedStocks = useMemo(() => {
    return stocks.map((stock: Stock) => {
      return (
        <Row key={stock.id}>
          <Cell>{stock.symbol}</Cell>
          <Cell>{stock.displayName}</Cell>
          <Cell>{stock.currentPrice?.toFixed(2)}</Cell>
          <Cell>
            <DeleteButton symbol={stock.symbol} />
          </Cell>
        </Row>
      );
    });
  }, [stocks]);

  return (
    <Container>
      <thead>
        <tr>
          <Column>Symbol</Column>
          <Column>Name</Column>
          <Column>Current Price (USD)</Column>
          <Column>Remove</Column>
        </tr>
      </thead>
      <tbody>{formattedStocks}</tbody>
    </Container>
  );
};
