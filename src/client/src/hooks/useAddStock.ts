import axios from 'axios';
import { useMutation } from '@tanstack/react-query';

export const useAddStock = () => {
  const addStock = async (symbol: string) => {
    const res = await axios.post(`http://localhost:3000/api/watchlist/${symbol}`);

    return res.data;
  };

  return useMutation({ mutationKey: ['addStock'], mutationFn: addStock });
};
