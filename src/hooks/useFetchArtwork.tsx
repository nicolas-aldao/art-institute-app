import { SetStateAction, useEffect, useState } from 'react';
import { fetchArtwork } from '../services/artworks';

export const useFetchArtwork = id => {
  const [data, setData] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArtwork(id)
      .then((artwork: SetStateAction<any>) => setData(artwork.data))
      .finally(() => setIsLoading(false));
  }, []);

  return { data, isLoading };
};
