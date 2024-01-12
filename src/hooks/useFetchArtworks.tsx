import {SetStateAction, useEffect, useState} from 'react';
import {fetchArtworks} from '../services/artworks';

export const useFetchArtworks = () => {
  const [data, setData] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArtworks()
      .then((artworks: SetStateAction<any[]>) => setData(artworks))
      .catch((e: any) => console.log(e))
      .finally(() => setIsLoading(false));
  }, []);

  return {data, isLoading};
};
