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
  height: 200px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: center;
`;

export const ImageContainer = styled.View`
  height: 100%;
  min-height: 100%;
  width: 45%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const DataContainer = styled.View`
  height: 100%;
  min-height: 100%;
  width: 45%;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: center;
`;

export const CustomImage = styled.Image`
  height: 150px;
  width: 150px;
  margin: 15px;
  border-radius: 10px;
`;