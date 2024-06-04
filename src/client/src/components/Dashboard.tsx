import styled from 'styled-components';
import { Header } from './Header';
import { StockInput } from './StockInput';
import { Table } from './Table';

const BodyContainer = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Dashboard = () => {
  return (
    <>
      <Header />
      <BodyContainer>
        <StockInput />
        <Table />
      </BodyContainer>
    </>
  );
}
