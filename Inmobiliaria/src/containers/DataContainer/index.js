import React from 'react';
import {
    ItemContainer,
    DataContainer,
    CustomText,
    IconContainer,
  } from '../../components';
  import Ionicon from 'react-native-vector-icons/Ionicons';
  import ItemDetailsContainer from '../ItemBoxContainer/';

const DataContainerBox = ({...props}) => {
  return (
    <DataContainer>
      <CustomText fs={'20px'}>{props.name}</CustomText>
      <IconContainer w={'90%'}>
        <Ionicon name="location-outline" color="#ABABAB" size={20} />
        <CustomText fs={'12px'} fw={'normal'} clr={'#909090'}>
          {props.address}
        </CustomText>
      </IconContainer>
      <ItemContainer h={'15%'}>
        <ItemDetailsContainer cSize="20%" name="bed" text={props.beds} />
        <ItemDetailsContainer cSize="20%" name="bathtub" text={props.baths} />
        <ItemDetailsContainer cSize="35%" name="square" text={props.size} />
      </ItemContainer>
      <IconContainer>
        <CustomText fs={'18px'}>{props.cost}</CustomText>
        <Ionicon name="heart-circle-outline" size={30} color={'#0CBE60'} />
      </IconContainer>
    </DataContainer>
  );
};

export default DataContainerBox;
