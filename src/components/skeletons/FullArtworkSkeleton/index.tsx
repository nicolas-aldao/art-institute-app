import React from 'react';
import {ViewSkeletonIcon} from '../StylesCommonSkeleton';
import {
  ViewSkeletonContainer,
  ViewSkeletonSquare,
  ViewSkeletonFirstSubtitle,
  ViewSkeletonSecondSubtitle,
  ViewSkeletonThreeSubtitle,
} from './StylesFullArtworkSkeleton';

export const FullArtworkSkeleton = () => {
  return (
    <ViewSkeletonContainer>
      <ViewSkeletonSquare />
      <ViewSkeletonFirstSubtitle />
      <ViewSkeletonSecondSubtitle />
      <ViewSkeletonThreeSubtitle />
      <ViewSkeletonIcon />
    </ViewSkeletonContainer>
  );
};
