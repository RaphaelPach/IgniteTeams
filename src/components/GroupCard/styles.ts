import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";
import { UsersThree } from "phosphor-react-native";

export const GroupContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;
  background-color: gray;
  border-radius: 6px;
  flex-direction: row;
  padding: 24px;
  margin-bottom: 12px;
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: sans-serif;
  color: white;
`;

export const Icon = styled(UsersThree).attrs({
  size: 32,
  color: 'green',
})``;
