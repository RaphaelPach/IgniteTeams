import { HighContainer, Title, SubTitle } from "./styles";

type props = {
  title: string;
  subTitle: string;
};

export function Highlight({ title, subTitle }: props) {
  return (
    <HighContainer>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
    </HighContainer>
  );
}
