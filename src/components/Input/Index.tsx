import { ContainerInput } from "./styles";
import { TextInputProps } from "react-native";// isso é para tipar minhas props



export function Input({ ...rest }: TextInputProps) {
  return (
    <ContainerInput 
     {...rest}
    />
  )
}