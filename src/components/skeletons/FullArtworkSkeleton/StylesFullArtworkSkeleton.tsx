import styled from 'styled-components/native';
import {COLORS} from '../../../constants';

export const ViewSkeletonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 460px;
  padding: 10px;
`;

export const ViewSkeletonSquare = styled.View`
  width: 350px;
  height: 340px;
  margin-top: 120px;
  background-color: ${COLORS.SKELETON};
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ViewSkeletonFirstSubtitle = styled.View`
  width: 280px;
  height: 20px;
  background-color: ${COLORS.SKELETON};
  align-self: flex-start;
  margin-left: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ViewSkeletonSecondSubtitle = styled.View`
  width: 230px;
  height: 20px;
  background-color: ${COLORS.SKELETON};
  align-self: flex-start;
  margin-left: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

export const ViewSkeletonThreeSubtitle = styled.View`
  width: 330px;
  height: 80px;
  background-color: ${COLORS.SKELETON};
  align-self: flex-start;
  margin-left: 10px;
  border-radius: 10px;
  margin-bottom: 10px;
`;
