import {SetStateAction, useEffect, useState} from 'react';
import {fetchArtworks} from '../services/artworks';

export const useFetchArtworks = () => {
  const [data, setData] = useState<any[]>([]);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchArtworks()
      .then((artworks: SetStateAction<any[]>) => setData(artworks))
      .catch((e: any) => console.log(e))
      .finally(() => setIsFetching(false));
  }, []);

  return {data, isFetching};
};
