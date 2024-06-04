import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const useFetchWatchlist = () => {
  const fetchWatchlist = async () => {
    const res = await axios.get('http://localhost:3000/api/watchlist');

    return res.data;
  };

  return useQuery({ queryKey: ['fetchWatchlist'], queryFn: fetchWatchlist });
};
