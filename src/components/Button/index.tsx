import { TouchableOpacityProps } from "react-native";
import { ButtonContainer, Title, ButtonProps } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
  type?: ButtonProps;
};

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
  return (
    <ButtonContainer {...rest}>
      <Title>{title}</Title>
    </ButtonContainer>
  );
}
