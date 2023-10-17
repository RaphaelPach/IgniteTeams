import { Highlight } from "@components/Highlight";
import { GroupContainer, Content, Icon } from "./styles";
import { Header } from "@components/Header";
import { Button } from "@components/Button";
import { Input } from "@components/Input/Index";

export function NewGroup() {
  return (
    <GroupContainer>
      <Header showBackButton />
      <Content>
        <Icon />
        <Highlight
          title="Criar Turma"
          subTitle="Crie uma turma para jogar com seus amigos"
        />
        <Input />
        <Button title="Criar Turma" style={{ marginTop: 20 }} />
      </Content>
    </GroupContainer>
  );
}
