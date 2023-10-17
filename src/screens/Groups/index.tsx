import { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Container } from "./styles";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { ListEmpty } from "@components/ListEmpty";
import { Button } from "@components/Button";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Galera da Ursal"]);
  return (
    <Container>
      <Header />
      <Highlight title="Turma" subTitle="Jogue com a sua turmas" />
      <FlatList
        data={groups} // Array de dados
        keyExtractor={(item) => item} // Função que retorna o id de cada item
        renderItem={({ item }) => (
          <GroupCard title={item} /> // Componente que renderiza cada item
        )}
        contentContainerStyle={groups.length === 0 && { flex: 1 }} // Estilo do conteúdo da lista
        ListEmptyComponent={() => (
          <ListEmpty text="Nenhuma Turma ainda, oniChan" />
        )} // Componente que renderiza quando a lista está vazia
      />

      <Button title="Criar Turma" type="SECONDARY" />
    </Container>
  );
}
