import React, {useState, useEffect} from 'react';
import {FlatList} from 'react-native';
import {useFocusEffect} from '@react-navigation/native';
import {ArtworkThumbail} from '../ArtworkThumbail/index';
import {useHandleUnlike} from '../../../hooks/useHandleUnlike';

export const ArtworkThumbnailList = ({list}) => {
  const {likesArrayState} = useHandleUnlike();

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
