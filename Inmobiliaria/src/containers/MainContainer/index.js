import React from 'react';
import {useState} from 'react';
import {Text, Image, ScrollView} from 'react-native';
import {CustomImage, ItemContainer, Layout, ScrollCustom} from '../../components';
import dataPlaces from '../../data/dataPlaces.json';

export const MainContainer = () => {
  const [dataJson] = useState(dataPlaces);
  return (
    <Layout>
        <ScrollCustom>
      {dataJson.map(value => {
        return (
          <ItemContainer key={value.id}>            
            <CustomImage source={{uri: value.url}}></CustomImage>
            <Text>{value.name}</Text>
          </ItemContainer>
        );
      })}
      </ScrollCustom>
    </Layout>
  );
};
