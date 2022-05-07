import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import PageLayout from "../layout/PageLayout";
import { NotificationsProvider } from "@mantine/notifications";
import Head from "next/head";
import "@fontsource/roboto";
import { StateProvider } from "../cms/globalStateProvider";
import { initState, reducer } from "../cms/reducer";


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        <StateProvider initState={initState} reducer={reducer}>
          {getLayout(
            <main>
              <Component {...pageProps} />
            </main>
          )}
        </StateProvider>
      </MantineProvider>
    </>
  );
}

export default MyApp;
