import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const ScrollCustom = styled.ScrollView`
  display: flex;
  flex-wrap: nowrap;
`;

export const ItemContainer = styled.View`
  height: ${({h}) => h ?? 200};
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  height: 100%;
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
`;

export const DataContainer = styled.View`
  height: 80%;  
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: stretch;
`;

export const CustomImage = styled.Image`
  height: 70%;
  width: 150px;
  margin: 15px;
  border-radius: 10px;
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? '#000'};
  font-size: ${({fs}) => fs ?? '12px'};
  font-weight: ${({fw}) => fw ?? 'normal'};
`;