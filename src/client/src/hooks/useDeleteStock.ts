import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useDeleteStock = () => {
  const deleteStock = async (symbol: string) => {
    const res = await axios.delete(`http://localhost:3000/api/watchlist/${symbol}`);
    
    return res.data;
  };

  return useMutation({ mutationKey: ['deleteStock'], mutationFn: deleteStock });
};
