import React, {useContext, useEffect} from 'react';
import {FlatList} from 'react-native';
import {ArtContext} from '../../../../App';
import {ArtworkThumbail} from '../ArtworkThumbail/index';

export const ArtworkThumbnailList = ({list}) => {
  const {likesArray} = useContext(ArtContext);

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      data={list?.data}
      renderItem={({item}) => {
        return (
          <>
            <ArtworkThumbail
              id={item.id}
              title={`${item.id} - ${item.title}`}
              imageUrl={`https://www.artic.edu/iiif/2/${item?.image_id}/full/843,/0/default.jpg`}
              isLiked={likesArray?.includes(item.id)}
            />
          </>
        );
      }}
    />
  );
};
