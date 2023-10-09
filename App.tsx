import { ThemeProvider } from "styled-components";
import { Groups } from "@screens/Groups";
import { Loading } from "@components/Loading";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import Theme from "./src/Theme";

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });

  return (
    <ThemeProvider theme={{ Theme }}>
      {fontsLoaded ? <Groups /> : <Loading />}
    </ThemeProvider>
  );
}
