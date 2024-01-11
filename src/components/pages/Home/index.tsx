import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {useFetchArtworks} from '../../../hooks/useFetchArtworks';
import {Section} from '../../molecules/Section/index';
import {ArtworkThumbail} from '../../molecules/ArtworkThumbail/index';
import {
  StyledSafeAreaView,
  StyledStatusBar,
  StyledView,
} from '../../../../AppStyles';

export function HomeScreen() {
  const isDarkMode = useColorScheme() === 'dark';
  const {data, isLoading} = useFetchArtworks();

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
        {/* <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={backgroundStyle}> */}
        <StyledView isDarkMode={isDarkMode}>
          <Section title="Art Institute Of Chicago Catalog">
            In this app you will see your favorite artworks
          </Section>
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
        </StyledView>
        {/* </ScrollView> */}
      </StyledSafeAreaView>
    </View>
  );
}
