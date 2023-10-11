import { EmptyContainer, EmptyText } from "./styles";

type propsEmpty = {
  text: string;
};

export function ListEmpty({ text }: propsEmpty) {
  return (
    <EmptyContainer>
      <EmptyText>{text}</EmptyText>
    </EmptyContainer>
  )
};