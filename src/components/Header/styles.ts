import { CaretLeft } from "phosphor-react-native";
import styled from "styled-components/native";

export const HeaderContainer = styled.View`
  width: 100%;
  margin-top: 15%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.Image`
  width: 46px;
  height: 55px;
`;

export const BackButton = styled.TouchableOpacity`
  flex: 1;
`;

export const BackIcon = styled(CaretLeft).attrs({
  size: 32,
  color: "#fff",
})``;
