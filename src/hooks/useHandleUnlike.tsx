import {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function useHandleUnlike() {
  const [refreshData, setRefreshData] = useState(false);
  const [likesArrayState, setLikesArrayState] = useState([]);

  useEffect(() => {
    getArtworkFromLocalStorage();
  }, [refreshData]);

  useEffect(() => {
    // console.log('likesArrayState', likesArrayState);
  }, [likesArrayState]);

  const unlikeArtwork = async id => {
    try {
      const artworkArray = await AsyncStorage.getItem('likesArray');
      const arrayParsed = JSON.parse(artworkArray);
      const newArray = arrayParsed.filter(item => item !== id);
      await AsyncStorage.setItem('likesArray', JSON.stringify(newArray));
      setLikesArrayState(newArray);
      setRefreshData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const likeArtwork = async id => {
    try {
      const artworkArray = await AsyncStorage.getItem('likesArray');
      console.log('lo que esta en storage ', artworkArray);
      const arrayParsed = JSON.parse(artworkArray);
      console.log('la info parseada ', arrayParsed);
      console.log('la info parseada typeof', typeof arrayParsed);
      const newArray = arrayParsed == null ? [id] : [...arrayParsed, id];
      console.log('nuevo array ', newArray);
      await AsyncStorage.setItem('likesArray', JSON.stringify(newArray));
      setLikesArrayState(newArray);
      setRefreshData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const updateIdsList = async newIdsList => {
    try {
      setLikesArrayState(newIdsList);
      await AsyncStorage.setItem('likesArray', JSON.stringify(newIdsList));
    } catch (error) {
      console.error('Error updating IDs list:', error);
    }
  };

  const getArtworkFromLocalStorage = async () => {
    console.log('corre getArtworkFromLocalStorage');
    try {
      let stringLikes = await AsyncStorage.getItem('likesArray');
      setLikesArrayState(JSON.parse(stringLikes));
      setRefreshData(false);
    } catch (error) {
      console.log('retrieveData', error);
    }
  };

  return {
    getArtworkFromLocalStorage,
    likeArtwork,
    unlikeArtwork,
    likesArrayState,
    refreshData,
  };
}
