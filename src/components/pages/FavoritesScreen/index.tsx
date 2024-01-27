import React from 'react';
import {useFetchArtworksByIdsArray} from '../../../hooks/useFetchArtworksByIdsArray';
import {StyledView, StyledTitle} from './StylesFavoritesScreen';
import {ThumbailSkeletonList} from '../../skeletons/Lists/ThumbailSkeletonList/index';
import {ArtworkThumbnailList} from '../../molecules/ArtworkThumbnailList/index';

export const FavoritesScreen = () => {
  const {data, isLoading} = useFetchArtworksByIdsArray();

  return (
    <StyledView>
      <StyledTitle>Here you can see your favorites artworks 🌝</StyledTitle>
      {isLoading && <ThumbailSkeletonList />}
      {data && <ArtworkThumbnailList list={data} />}
    </StyledView>
  );
};
