import { HeaderContainer, Logo, BackButton, BackIcon } from "./styles";
import { CaretLeft } from "phosphor-react-native";

import logoImg from "@assets/logo.png";

type Props = {
  showBackButton?: boolean;
};

export function Header({ showBackButton = false }: Props) {
  return (
    <HeaderContainer>
      {
        showBackButton &&
        <BackButton>
          <BackIcon />
        </BackButton>
      }
      <Logo source={logoImg} />
    </HeaderContainer>
  );
}
