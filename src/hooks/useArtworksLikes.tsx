import {useState, useContext, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArtContext} from '../../App';

export function useArtworksLikes() {
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
      setLikesArray(newArray);
      setRefreshData(true);
    } catch (error) {
      console.log(error);
    }
  };

  const getArtworkFromLocalStorage = async () => {
    try {
      let stringLikes = await AsyncStorage.getItem('likesArray');
      setLikesArray(JSON.parse(stringLikes));
      setRefreshData(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    getArtworkFromLocalStorage,
    likeArtwork,
    unlikeArtwork,
    refreshData,
  };
}
