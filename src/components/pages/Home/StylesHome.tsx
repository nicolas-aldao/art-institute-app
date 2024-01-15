import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const StyledContainerView = styled.SafeAreaView`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${Colors.lighter};
`;

export const StyledView = styled.View`
  background-color: ${Colors.lighter};
  align-items: center;
`;
