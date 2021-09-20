import React from 'react';
import {useState} from 'react';
import {
  Layout,
  ScrollCustom,
  ItemContainer,
  ImageContainer,
  CustomImage,
  CustomText,
  IconContainer,
} from '../../components';
import dataPlaces from '../../data/dataPlaces.json';
import Ionicon from 'react-native-vector-icons/Ionicons';
import DataContainerBox from '../DataContainer';

export const MainContainer = () => {
  const [dataJson] = useState(dataPlaces);
  return (
    <Layout>
      <ScrollCustom>
        {dataJson.map(value => {
          return (
            <ItemContainer key={value.id}>
              <ImageContainer>
                <CustomImage source={{uri: value.url}}>
                  <IconContainer w={'40%'} clr={'#FFFAB8'}>
                    <Ionicon name="star" size={20} color="#FFF000" />
                    <CustomText fs={'18px'}>{value.rate}</CustomText>
                  </IconContainer>
                </CustomImage>
              </ImageContainer>
              <DataContainerBox
                name={value.name} address={value.address} beds={value.bedrooms} 
                baths={value.bathrooms} size={value.size} cost={value.rentCost}/>
            </ItemContainer>
          );
        })}
      </ScrollCustom>
    </Layout>
  );
};
