import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export type ButtonProps = "PRIMARY" | "SECONDARY";
type ButtonContainerProps = {
  buttonType: ButtonProps;
};
export const ButtonContainer = styled(TouchableOpacity)<ButtonContainerProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  min-height: 56px;
  max-height: 56px;
  border-radius: 6px;

  background-color: ${(buttonType: string) =>
    buttonType === "PRIMARY" ? "#AA2834" : "#00875F"};
`;

export const Title = styled.Text`
  font-size: 16px;
  font-family: monospace;
  color: #fff;
`;
