import React, {FC, useContext} from 'react';
import {FlatList} from 'react-native';
import {generateImageUrl} from '../../../constants';
import {ArtContext} from '../../../../App';
import {ArtworkThumbail} from '../ArtworkThumbail/index';

export type ArtworkThumbnailListProps = {
  list: any;
};

export const ArtworkThumbnailList: FC<ArtworkThumbnailListProps> = ({list}) => {
  const {likesArray} = useContext(ArtContext);

  return (
    <FlatList
      showsVerticalScrollIndicator={false}
      data={list?.data}
      renderItem={({item}) => {
        return (
          <ArtworkThumbail
            id={item.id}
            title={item.title}
            imageUrl={generateImageUrl(item?.image_id)}
            isLiked={likesArray?.includes(item.id)}
          />
        );
      }}
    />
  );
};
