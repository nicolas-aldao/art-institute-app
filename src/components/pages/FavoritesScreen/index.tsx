import React from 'react';
import {useFetchArtworksByIdsArray} from '../../../hooks/useFetchArtworksByIdsArray';
import {StyledView, StyledTitle} from './StylesFavoritesScreen';
import {ArtworkThumbnailList} from '../../molecules/ArtworkThumbnailList/index';

export function FavoritesScreen() {
  const {data} = useFetchArtworksByIdsArray();

  return (
    <StyledView>
      <StyledTitle>Here you can see your favorites artworks :)</StyledTitle>
      {data && <ArtworkThumbnailList list={data} />}
    </StyledView>
  );
}
