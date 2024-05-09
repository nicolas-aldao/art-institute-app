import React, { useContext, useEffect } from 'react';
import { ArtContext } from '../../../../App';
import { useFetchArtworksByIdsArray } from '../../../hooks/useFetchArtworksByIdsArray';
import { ThumbailSkeletonList } from '../../skeletons/Lists/ThumbailSkeletonList/index';
import { ArtworkThumbnailList } from '../../molecules/ArtworkThumbnailList/index';
import { StyledView, StyledTitle } from './StylesFavoritesScreen';

export const FavoritesScreen = () => {
  const { data, isLoading } = useFetchArtworksByIdsArray();
  const { likesArray } = useContext(ArtContext);

  useEffect(() => {
    console.log("data ", typeof data?.data);
    console.log("data ", Array.isArray(data?.data));
  }, [data])

  return (
    <StyledView>
      <StyledTitle>Here you can see your favorites artworks</StyledTitle>
      {(isLoading || !data) && <ThumbailSkeletonList />}
      {data && <ArtworkThumbnailList list={data?.data.filter(item => likesArray.includes(item.id))} />}
    </StyledView>
  );
};
