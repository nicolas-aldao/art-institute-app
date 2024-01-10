/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {ScrollView, StatusBar, useColorScheme} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Section} from './src/components/molecules/Section/index';
import {
  StyledSafeAreaView,
  StyledStatusBar,
  StyledText,
  StyledView,
} from './AppStyles';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <StyledSafeAreaView isDarkMode={isDarkMode}>
      {/* <StyledStatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      /> */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <StyledView isDarkMode={isDarkMode}>
          <Section title="Art Institute Of Chicago Catalog">
            In this app you will see your favorite artworks
          </Section>
        </StyledView>
      </ScrollView>
    </StyledSafeAreaView>
  );
}

export default App;
