import React from 'react';
import {
  ViewSkeletonContainer,
  ViewSkeletonText,
  ViewSkeletonSquare,
  ViewSkeletonIcon,
} from './StylesThumbailSkeleton';

export const ThumbailSkeleton = () => {
  return (
    <ViewSkeletonContainer>
      <ViewSkeletonText></ViewSkeletonText>
      <ViewSkeletonSquare></ViewSkeletonSquare>
      <ViewSkeletonIcon></ViewSkeletonIcon>
    </ViewSkeletonContainer>
  );
};
