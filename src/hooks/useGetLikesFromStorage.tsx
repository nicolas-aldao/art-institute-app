import {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const useGetLikesFromStorage = () => {
  const [likesString, setLikesString] = useState('');

  useEffect(() => {
    let retrieveData = async () => {
      try {
        let stringLikes = await AsyncStorage.getItem('likesArray');
        setLikesString(stringLikes);
      } catch (error) {
        console.log(error);
      }
    };
    retrieveData();
  }, []);
  return {likesString};
};
