import { AppProps } from "next/app";
import Head from "next/head";
import { FC } from "react";
import { ContextProvider } from "../contexts/ContextProvider";
import { AppBar } from "../components/AppBar";
import { ContentContainer } from "../components/ContentContainer";
import { Footer } from "../components/Footer";
import Notifications from "../components/Notification";
import { createTheme, NextUIProvider } from "@nextui-org/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

require("@solana/wallet-adapter-react-ui/styles.css");
require("../styles/globals.css");

const darkTheme = createTheme({
  type: "dark",
});

const App: FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <>
          <Head>
            <title>Nuketown Social Poster</title>
          </Head>

          <ContextProvider>
            <div className="flex flex-col h-screen">
              <Notifications />
              <AppBar />
              <ContentContainer>
                <Component {...pageProps} />
              </ContentContainer>
              <Footer />
            </div>
          </ContextProvider>
        </>
      </NextUIProvider>
    </NextThemesProvider>
  );
};

export default App;
