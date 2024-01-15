import React from 'react';
import {ThumbailSkeleton} from '../../ThumbailSkeleton/index';
import {StyledContainer} from './StylesThumbailSkeletonList';

export const ThumbailSkeletonList = () => {
  return (
    <>
      <StyledContainer>
        {[...Array(3)].map((_, index) => (
          <ThumbailSkeleton key={index} />
        ))}
      </StyledContainer>
    </>
  );
};
