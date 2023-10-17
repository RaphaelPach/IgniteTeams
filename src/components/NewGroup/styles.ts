import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";

export const GroupContainer = styled.View`
  flex: 1;
  background-color: #202024;
  padding: 24px;
`;

export const Content = styled.View`
  flex: 1;
  justify-content: center;
`;

export const Icon = styled(UsersThree).attrs({
  size: 56,
  color: "#00875F",
})`
  align-self: center;
`;
