import styled from "styled-components/native";


export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #121214;
`;

export const LoadingIndicator = styled.ActivityIndicator.attrs({'size': 'large', 'color': '#00875F'})`
`;