import styled from 'styled-components';
import {COLORS} from '../../../constants';

export const StyledHeaderContainer = styled.View`
  border-bottom: solid ${COLORS.PRIMARY} 5px;
  width: 100%;
  padding: 30px 20px 40px 20px;
`;

export const StyledTitle = styled.Text`
  font-size: 35px;
  font-weight: 900;
  width: 200px;
  color: ${COLORS.PRIMARY};
  margin-bottom: 10px;
`;

export const StyledSubtitle = styled.Text`
  text-align: center;
  font-size: 16px;
`;
