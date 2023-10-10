import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups";
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
      <Groups />
    </ThemeProvider>
  );
}
