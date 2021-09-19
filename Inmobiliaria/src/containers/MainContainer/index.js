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
                <CustomText fs={'18px'} fw={'bold'}>{value.rate}</CustomText>
                </IconContainer>
                </CustomImage>
              </ImageContainer>
              <DataContainer>
                <CustomText fs={'20px'} fw={'bold'}>
                  {value.name}
                </CustomText>
                <IconContainer w={'90%'}>
                <Ionicon name="location-outline" color="#ABABAB" size={20} />
                <CustomText clr={'#909090'}>{value.address}</CustomText>
                </IconContainer>
                <ItemContainer h={'15%'}>
                  <IconContainer w={'20%'}>
                    <Ionicon name="bed-outline" color="#ABABAB" size={30} />
                    <CustomText fs={'15px'} fw={'bold'}>{value.bedrooms}</CustomText>
                  </IconContainer>
                  <IconContainer w={'20%'}>
                    <IconFontAwesome name="bathtub" color="#ABABAB" size={20} />
                  <CustomText fs={'15px'} fw={'bold'}>{value.bathrooms}</CustomText>
                  </IconContainer>
                  <IconContainer w={'35%'}>
                    <IconFontAwesome name="square" color="#ABABAB" size={20} />
                  <CustomText fs={'15px'} fw={'bold'}>{value.size}</CustomText>
                  </IconContainer>
                </ItemContainer>
                <IconContainer>
                <CustomText fs={'18px'} fw={'bold'}>{value.rentCost}</CustomText>
                <Ionicon name="heart-circle-outline" size={30} color={'#0CBE60'}/>
                </IconContainer>
              </DataContainer>
            </ItemContainer>
          );
        })}
      </ScrollCustom>
    </Layout>
  );
};
