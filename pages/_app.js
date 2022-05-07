import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import PageLayout from "../layout/PageLayout";
import { NotificationsProvider } from "@mantine/notifications";
import Head from "next/head";
import "@fontsource/roboto";


function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{ colorScheme: "light" }}
      >
        {getLayout(
          <main>
            <Component {...pageProps} />
          </main>
        )}
      </MantineProvider>
    </>
  );
}

export default MyApp;
