import {SetStateAction, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {fetchArtworksByIdsArray} from '../services/artworks';

export const useFetchArtworksByIdsArray = () => {
  const [data, setData] = useState<any[]>([]);
  const [arrayResult, setArrayResult] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem('likesArray');
        if (value !== null) {
          setArrayResult(JSON.parse(value));
        }
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);

  useEffect(() => {
    if (arrayResult && arrayResult.length > 0) {
      fetchArtworksByIdsArray(arrayResult)
        .then((artworks: SetStateAction<any[]>) => setData(artworks))
        .catch((e: any) => console.log(e))
        .finally(() => setIsLoading(false));
    }
  }, [arrayResult]);

  return {data, isLoading};
};
