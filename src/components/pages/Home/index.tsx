import React from 'react';
import { useFetchArtworks } from '../../../hooks/useFetchArtworks';
import { FavoriteButton } from '../../atoms/FavoritesButton/index';
import { Header } from '../../molecules/Header/index';
import { ArtworkThumbnailList } from '../../molecules/ArtworkThumbnailList/index';
import { ThumbailSkeletonList } from '../../skeletons/Lists/ThumbailSkeletonList/index';
import {
  StyledContainerView,
  StyledSafeAreaView,
  StyledView,
} from './StylesHome';
import { EmptyState } from '../../molecules/EmptyState/index';

export function HomeScreen() {
  const { data, isLoading, errorMessage } = useFetchArtworks();

  return (
    <>
      <StyledContainerView>
        <StyledSafeAreaView>
          {!errorMessage && <FavoriteButton />}
          <StyledView>
            <Header />
            {isLoading && <ThumbailSkeletonList />}
            {data?.data?.length > 0 && <ArtworkThumbnailList list={data?.data} />}
            {errorMessage && <EmptyState />}
          </StyledView>
        </StyledSafeAreaView>
      </StyledContainerView>
    </>
  );
}
