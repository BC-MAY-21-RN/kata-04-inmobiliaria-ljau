import React from 'react';
import {useState} from 'react';
import {
  Layout,
  ScrollCustom,
  ItemContainer,
  ImageContainer,
  DataContainer,
  CustomImage,
  CustomText,
  IconContainer,
} from '../../components';
import dataPlaces from '../../data/dataPlaces.json';
import Ionicon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import ItemDetailsContainer from '../ItemBoxContainer/';

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
              <DataContainer>
                <CustomText fs={'20px'}>{value.name}</CustomText>
                <IconContainer w={'90%'}>
                  <Ionicon name="location-outline" color="#ABABAB" size={20} />
                  <CustomText fs={'12px'} fw={'normal'} clr={'#909090'}>
                    {value.address}
                  </CustomText>
                </IconContainer>
                <ItemContainer h={'15%'}>
                  {/* /////////////////////////////////////// */}
                    <ItemDetailsContainer cSize="20%" name="bed" text={value.bedrooms} />
                    <ItemDetailsContainer cSize="20%" name="bathtub" text={value.bathrooms} />
                    <ItemDetailsContainer cSize="35%" name="square" text={value.size} />                    
                </ItemContainer>
                <IconContainer>
                  <CustomText fs={'18px'}>{value.rentCost}</CustomText>
                  <Ionicon name="heart-circle-outline" size={30} color={'#0CBE60'} />
                </IconContainer>
              </DataContainer>
            </ItemContainer>
          );
        })}
      </ScrollCustom>
    </Layout>
  );
};
