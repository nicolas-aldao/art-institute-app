import styled from 'styled-components/native';

export const ViewSkeletonContainer = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 440px;
  padding: 10px;
`;

export const ViewSkeletonText = styled.View`
  width: 260px;
  height: 20px;
  background-color: #b4b4b4;
  border-radius: 10px;
  margin-bottom: 20px;
`;

export const ViewSkeletonSquare = styled.View`
  width: 280px;
  height: 320px;
  background-color: #b4b4b4;
  border-radius: 15px;
  margin-bottom: 10px;
`;

export const ViewSkeletonIcon = styled.View`
  align-self: flex-start;
  margin-left: 15px;
  width: 30px;
  height: 30px;
  background-color: #b4b4b4;
  border-radius: 10px;
`;
