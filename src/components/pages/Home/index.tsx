import React from 'react';
import {ScrollView, Text, View, useColorScheme} from 'react-native';
import {useFetchArtworks} from '../../../hooks/useFetchArtworks';
import {FavoriteButton} from '../../atoms/FavoritesButton/index';
import {Header} from '../../molecules/Header/index';
import {ArtworkThumbnailList} from '../../molecules/ArtworkThumbnailList/index';
import {
  StyledSafeAreaView,
  StyledStatusBar,
  StyledView,
} from '../../../../AppStyles';

export function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const {data, isLoading} = useFetchArtworks();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <StyledSafeAreaView isDarkMode={isDarkMode}>
        <FavoriteButton />
        {/* <StyledStatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={backgroundStyle.backgroundColor}
        /> */}
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}> */}
        <StyledView isDarkMode={isDarkMode}>
          <Header />
          {isLoading && <Text>Loading...</Text>}
          {data && <ArtworkThumbnailList list={data} />}
        </StyledView>
        {/* </ScrollView> */}
      </StyledSafeAreaView>
    </View>
  );
}
