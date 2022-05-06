import "../styles/globals.css";
import { MantineProvider } from "@mantine/core";
import { QueryClient, QueryClientProvider } from "react-query";
import PageLayout from "../layout/PageLayout";
import { NotificationProviderProps } from "@mantine/notifications";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  <MantineProvider
    withGlobalStyles
    withNormalizeCSS
    theme={{ colorScheme: "light" }}
  >
    <PageLayout>
      <Component {...pageProps} />
    </PageLayout>
  </MantineProvider>;
}

export default MyApp;
