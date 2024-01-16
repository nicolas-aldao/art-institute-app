import React from 'react';
import {ViewSkeletonIcon} from '../StylesCommonSkeleton';
import {
  ViewSkeletonContainer,
  ViewSkeletonText,
  ViewSkeletonSquare,
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
