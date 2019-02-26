import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

import Card from './Card';
import CardSection from './CardSection';

const AlbumDetail = props => (
  <Card>
    <CardSection>
      <View style={{ flex: 1 }}>
        <Image
          style={styles.thumbnail_image}
          source={{ uri: props.albumProp.thumbnail_image }}
        />
      </View>

      <View style={{ flex: 3, justifyContent: 'center' }}>
        <Text style={styles.title}>{props.albumProp.title}</Text>
        <Text style={styles.artist}>{props.albumProp.artist}</Text>
      </View>
    </CardSection>

    <CardSection>
      <Image style={styles.image} source={{ uri: props.albumProp.image }} />
    </CardSection>

    <CardSection />
  </Card>
);

const styles = StyleSheet.create({
  thumbnail_image: {
    width: 50,
    height: 50,
    marginLeft: 10,
    borderRadius: 25
  },
  image: {
    height: 200,
    flex: 1,
    width: null
  },
  title: {
    fontSize: 20
  },
  artist: {
    fontSize: 15
  }
});

export default AlbumDetail;
