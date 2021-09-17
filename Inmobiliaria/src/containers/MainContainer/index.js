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
} from '../../components';
import dataPlaces from '../../data/dataPlaces.json';

export const MainContainer = () => {
  const [dataJson] = useState(dataPlaces);
  return (
    <Layout>
      <ScrollCustom>
        {dataJson.map(value => {
          return (
            <ItemContainer key={value.id}>
              <ImageContainer>
                <CustomImage source={{uri: value.url}}></CustomImage>
              </ImageContainer>
              <DataContainer>
                <CustomText fs={'20px'} fw={'bold'}>
                  {value.name}
                </CustomText>
                <CustomText clr={'#909090'}>{value.address}</CustomText>
                <ItemContainer h={'15%'}>
                  <CustomText>{value.bedrooms}</CustomText>
                  <CustomText>{value.bathrooms}</CustomText>
                  <CustomText>{value.size}</CustomText>
                </ItemContainer>
                <CustomText fs={'18px'} fw={'bold'}>{value.rentCost}</CustomText>
              </DataContainer>
            </ItemContainer>
          );
        })}
      </ScrollCustom>
    </Layout>
  );
};
