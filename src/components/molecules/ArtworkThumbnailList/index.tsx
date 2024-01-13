import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ArtworkThumbail} from '../ArtworkThumbail/index';

export const ArtworkThumbnailList = ({list}) => {
  const [likesArrayState, setLikesArrayState] = useState('');

  useEffect(() => {
    let retrieveData = async () => {
      try {
        let stringLikes = await AsyncStorage.getItem('likesArray');
        setLikesArrayState(stringLikes);
      } catch (error) {
        console.log('retrieveData', error);
      }
    };
    retrieveData();
  }, []);

  return (
    <FlatList
      data={list?.data}
      renderItem={({item}) => {
        return (
          <ArtworkThumbail
            id={item.id}
            title={`${item.id} - ${item.title}`}
            imageUrl={`https://www.artic.edu/iiif/2/${item?.image_id}/full/843,/0/default.jpg`}
            isLiked={likesArrayState?.includes(item.id)}
          />
        );
      }}
    />
  );
};
