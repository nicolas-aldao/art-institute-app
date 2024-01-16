import styled from 'styled-components/native';
import {COLORS} from '../../constants';

export const ViewSkeletonIcon = styled.View`
  align-self: flex-start;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  background-color: ${COLORS.SKELETON};
  border-radius: 10px;
`;
