import React from 'react';
import {useFetchArtworks} from '../../../hooks/useFetchArtworks';
import {FavoriteButton} from '../../atoms/FavoritesButton/index';
import {Header} from '../../molecules/Header/index';
import {ArtworkThumbnailList} from '../../molecules/ArtworkThumbnailList/index';
import {ThumbailSkeletonList} from '../../skeletons/Lists/ThumbailSkeletonList/index';
import {
  StyledContainerView,
  StyledSafeAreaView,
  StyledView,
} from './StylesHome';

export function HomeScreen() {
  const {data, isLoading} = useFetchArtworks();
  return (
    <>
      <StyledContainerView>
        <StyledSafeAreaView>
          <FavoriteButton />
          <StyledView>
            <Header />
            {isLoading && <ThumbailSkeletonList />}
            {data && <ArtworkThumbnailList list={data} />}
          </StyledView>
        </StyledSafeAreaView>
      </StyledContainerView>
    </>
  );
}
