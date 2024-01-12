import styled from 'styled-components';
import {COLORS} from '../../../constants';

export const StyledTextContainer = styled.View`
  position: absolute;
  left: 20px;
  top: 330px;
  z-index: 2;
  align-self: center;
  max-width: 355px;
`;

export const StyledTitle = styled.Text`
  color: white;
  font-size: 24px;
  font-weight: 700;
`;

export const StyledAuthor = styled.Text`
  color: ${COLORS.PRIMARY};
  font-size: 20px;
  font-weight: 700;
`;

export const StyledDescription = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: 500;
`;

export const StyledImage = styled.Image`
  position: absolute;
  top: -15px;
  left: -20px;
  width: 420px;
  min-height: 400px;
`;

export const StyledView = styled.View`
  /* border: solid red 10px;
  z-index: 4;
  width: 100vw;
  height: 400px; */
`;
