import { useContext } from 'react';
import { ArtContext } from '../../App';
import { useGetSetLikesFromStorage } from './useGetSetLikesFromStorage';

export function useArtworksLikes() {
  const { setLikesArray } = useContext(ArtContext);
  const { updateLocalStorage } = useGetSetLikesFromStorage();

  const unlikeArtwork = async id => {
    try {
      let newArray = await updateLocalStorage(id, "dislike");
      setLikesArray(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  const likeArtwork = async id => {
    try {
      let newArray = await updateLocalStorage(id, "like");
      setLikesArray(newArray);
    } catch (error) {
      console.log(error);
    }
  };

  return { likeArtwork, unlikeArtwork };
}
