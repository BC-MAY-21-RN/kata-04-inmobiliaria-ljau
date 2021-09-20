import React from 'react'
import { View, Text } from 'react-native'
import { CustomText, IconContainer, ItemContainer, DataContainer } from '../../components'
import Ionicon from 'react-native-vector-icons/Ionicons';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const ItemDetailsContainer = ({...props}) => {
    return (
        <IconContainer w={`${props.cSize}`}>
            <IconFontAwesome name={`${props.name}`} color="#ABABAB" size={20} />
            <CustomText>{`${props.text}`}</CustomText>
        </IconContainer>
    )
}

export default ItemDetailsContainer
