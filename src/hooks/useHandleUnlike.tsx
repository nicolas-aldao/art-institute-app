import {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArtContext} from '../../App';

export function useHandleUnlike() {
  const [refreshData, setRefreshData] = useState(false);
  const {setLikesArray} = useContext(ArtContext);

  useEffect(() => {
    getArtworkFromLocalStorage();
  }, [refreshData]);

  const unlikeArtwork = async id => {
    try {
      const artworkArray = await AsyncStorage.getItem('likesArray');
      const arrayParsed = JSON.parse(artworkArray);
      const newArray = arrayParsed.filter(item => item !== id);
      await AsyncStorage.setItem('likesArray', JSON.stringify(newArray));
      setLikesArray(newArray);
      setRefreshData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const likeArtwork = async id => {
    try {
      const artworkArray = await AsyncStorage.getItem('likesArray');
      const arrayParsed = JSON.parse(artworkArray);
      const newArray = arrayParsed == null ? [id] : [...arrayParsed, id];
      await AsyncStorage.setItem('likesArray', JSON.stringify(newArray));
      // setLikesArrayState(newArray);
      setLikesArray(newArray);
      setRefreshData(true);
    } catch (error) {
      console.log(error);
    }
  };

  // const updateIdsList = async newIdsList => {
  //   try {
  //     setLikesArrayState(newIdsList);
  //     await AsyncStorage.setItem('likesArray', JSON.stringify(newIdsList));
  //   } catch (error) {
  //     console.error('Error updating IDs list:', error);
  //   }
  // };

  const getArtworkFromLocalStorage = async () => {
    try {
      let stringLikes = await AsyncStorage.getItem('likesArray');
      setLikesArray(JSON.parse(stringLikes));
      setRefreshData(false);
    } catch (error) {
      console.log('retrieveData', error);
    }
  };

  return {
    getArtworkFromLocalStorage,
    likeArtwork,
    unlikeArtwork,
    refreshData,
  };
}
