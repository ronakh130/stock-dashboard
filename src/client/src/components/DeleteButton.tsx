import { CiCircleRemove } from 'react-icons/ci';
import styled from 'styled-components';
import { useDeleteStock } from '../hooks/useDeleteStock';
import { useQueryClient } from '@tanstack/react-query';

type DeleteButtonProps = {
  symbol: string;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.25s;
  &:hover {
    color: rgb(0, 119, 255);
  }
  &:active {
    color: black;
  }
`;

export const DeleteButton = ({ symbol }: DeleteButtonProps) => {
  const qc = useQueryClient();
  const { mutate: deleteStockMutation } = useDeleteStock();

  function handleClick() {
    deleteStockMutation(symbol, {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['fetchWatchlist'] });
      },
    });
  }

  return (
    <Container onClick={handleClick}>
      <CiCircleRemove size={25} />
    </Container>
  );
};
