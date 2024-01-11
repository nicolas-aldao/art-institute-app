import {SetStateAction, useEffect, useState} from 'react';
import {fetchArtwork} from '../services/artworks';

export const useFetchArtwork = id => {
  const [data, setData] = useState<any>({});
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    fetchArtwork(id)
      .then((artwork: SetStateAction<any>) => setData(artwork))
      .catch((e: any) => console.log(e))
      .finally(() => setIsFetching(false));
  }, []);

  return {data, isFetching};
};
