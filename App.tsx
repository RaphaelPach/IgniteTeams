import { ThemeProvider } from "styled-components";
import { NewGroup } from "@components/NewGroup";
import { StatusBar } from "react-native";
import Theme from "./src/Theme";

export default function App() {
  return (
    <ThemeProvider theme={{ Theme }}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <NewGroup />
    </ThemeProvider>
  );
}
