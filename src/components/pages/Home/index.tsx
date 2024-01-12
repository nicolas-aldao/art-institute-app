import React from 'react';
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useFetchArtworks} from '../../../hooks/useFetchArtworks';
import {FavoriteButton} from '../../atoms/FavoritesButton/index';
import {Header} from '../../molecules/Header/index';
import {Section} from '../../molecules/Section/index';
import {ArtworkThumbail} from '../../molecules/ArtworkThumbail/index';
import {
  StyledSafeAreaView,
  StyledStatusBar,
  StyledView,
} from '../../../../AppStyles';

export function HomeScreen({navigation}) {
  const isDarkMode = useColorScheme() === 'dark';
  const {data, isLoading} = useFetchArtworks();
  console.log('isLoading ', isLoading);

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

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
          {data && (
            <FlatList
              data={data?.data}
              renderItem={({item}) => {
                return (
                  <ArtworkThumbail
                    id={item.id}
                    title={`${item.id} - ${item.title}`}
                    imageUrl={`https://www.artic.edu/iiif/2/${item?.image_id}/full/843,/0/default.jpg`}
                  />
                );
              }}
            />
          )}
        </StyledView>
        {/* </ScrollView> */}
      </StyledSafeAreaView>
    </View>
  );
}
