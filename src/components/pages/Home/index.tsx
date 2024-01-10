import React from 'react';
import {Button, ScrollView, View, useColorScheme} from 'react-native';
import {Section} from '../../molecules/Section/index';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {
  StyledSafeAreaView,
  StyledStatusBar,
  StyledView,
} from '../../../../AppStyles';

export function HomeScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
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
            <Button
              title="Go to Artwork Detail"
              onPress={() => navigation.navigate('ArtworkDetail')}
            />
          </StyledView>
        </ScrollView>
      </StyledSafeAreaView>
    </View>
  );
}
