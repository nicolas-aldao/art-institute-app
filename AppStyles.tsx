import styled from 'styled-components/native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

export const StyledSafeAreaView = styled.SafeAreaView`
  background-color: ${(props: {isDarkMode: boolean}) =>
    props.isDarkMode ? Colors.darker : Colors.lighter};
`;

// export const StyledStatusBar = styled.StatusBar`
//   background-color: ${(props: {isDarkMode: boolean}) =>
//     props.isDarkMode ? Colors.darker : Colors.lighter};
// `;

export const StyledView = styled.View`
  background-color: ${(props: {isDarkMode: boolean}) =>
    props.isDarkMode ? Colors.darker : Colors.lighter};
  align-items: center;
`;
