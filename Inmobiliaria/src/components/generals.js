import styled from 'styled-components/native';

export const Layout = styled.View`
  background-color: #ffffff;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

export const ScrollCustom = styled.ScrollView`
  display: flex;
  flex-wrap: nowrap;
`;

export const ItemContainer = styled.View`
  height: ${({h}) => h ?? 200};
  width: 100%;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  background-color: #E4FFFE;
  margin-top: 10px;
  margin-bottom: 10px;
  border-radius: 20px;
`;

export const ImageContainer = styled.View`
  height: 70%;
  width: 45%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;  
  border-radius: 20px;
  overflow: hidden;
`;

export const DataContainer = styled.View`
  height: 80%;  
  width: 50%;
  display: flex;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: stretch;
`;

export const CustomImage = styled.ImageBackground`
  height: 100%;
  width: 150px;
  margin: 15px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CustomText = styled.Text`
  color: ${({clr}) => clr ?? '#000'};
  font-size: ${({fs}) => fs ?? '12px'};
  font-weight: ${({fw}) => fw ?? 'normal'};
`;

export const IconContainer = styled.View`
  background-color: ${({clr}) => clr ?? '#E4FFFE'};
  width: ${({w}) => w ?? '100%'};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;  
  padding: 2px;
  border-radius: 10px;
`;