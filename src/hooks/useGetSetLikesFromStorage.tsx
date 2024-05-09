import { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Action = 'like' | 'dislike';

export const useGetSetLikesFromStorage = () => {
  const [likesArrayFromStorage, setLikesArrayFromStorage] = useState<string[]>([]);

  useEffect(() => {
    let retrieveData = async () => {
      try {
        let stringLikes = await AsyncStorage.getItem('likesArray');
        let arrayParsed = stringLikes !== null ? JSON.parse(stringLikes) : [];
        setLikesArrayFromStorage(arrayParsed);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);

  const updateLocalStorage = async (id: string, action: Action) => {
    const artworkArray = await AsyncStorage.getItem('likesArray');
    const arrayParsed = JSON.parse(artworkArray);
    let newArray;
    if (action === "like") {
      newArray = arrayParsed == null ? [id] : [...arrayParsed, id];
    } else {
      newArray = arrayParsed.filter(item => item !== id);
    }
    await AsyncStorage.setItem('likesArray', JSON.stringify(newArray));
    return newArray;
  }

  return { likesArrayFromStorage, setLikesArrayFromStorage, updateLocalStorage };
};
