import React from 'react';
import {
  StyledText,
  StyledSubtitle,
  StyledTextContainer,
  StyledView,
} from './StylesEmptyState';

export const EmptyState = () => {
  return (
    <StyledView>
      <StyledTextContainer>
        <StyledText>Oops, Something Went Wrong ⚠️</StyledText>
        <StyledSubtitle>Please, try again later</StyledSubtitle>
      </StyledTextContainer>
    </StyledView>
  );
};
