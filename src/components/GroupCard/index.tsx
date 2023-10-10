import { TouchableOpacityProps } from "react-native";
/* import { View } from "react-native"; */
import { GroupContainer, Title, Icon } from "@components/GroupCard/styles";

type GroupCardProps = TouchableOpacityProps & {
  title: string;
};

export function GroupCard({ title }: GroupCardProps) {
  return (
    <GroupContainer>
      <Icon />
      <Title>{title}</Title>
    </GroupContainer>
  );
}
