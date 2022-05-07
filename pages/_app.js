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
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

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
