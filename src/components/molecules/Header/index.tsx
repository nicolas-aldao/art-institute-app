import React from 'react';
import {
  StyledHeaderContainer,
  StyledTitle,
  StyledSubtitle,
} from './StyledHeader';

export const Header = () => {
  return (
    <StyledHeaderContainer>
      <StyledTitle>Art Institute Of Chicago Catalog 🎨</StyledTitle>
      <StyledSubtitle>
        In this app you will see your favorite artworks
      </StyledSubtitle>
    </StyledHeaderContainer>
  );
};
