import { SetStateAction, useContext, useEffect, useState } from 'react';
import { fetchArtworksByIdsArray } from '../services/artworks';
import { ArtContext } from '../../App';

export const useFetchArtworksByIdsArray = () => {
  const [data, setData] = useState<any[] | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const { likesArray } = useContext(ArtContext);

  useEffect(() => {
    const fetchData = async () => {
      if ((likesArray && likesArray.length > 0 && data === undefined)) {
        setIsLoading(true);
        await fetchArtworksByIdsArray(likesArray)
          .then((artworks: SetStateAction<any[]>) => setData(artworks))
          .catch((e: any) => console.log(e));
      }
    }
    fetchData();
  }, [likesArray]);

  useEffect(() => {
    if (data !== undefined) {
      setIsLoading(false);
    }
  }, [data])

  useEffect(() => {
    console.log('likesArray ', likesArray);
  }, [likesArray]);

  return { data, isLoading };
};
