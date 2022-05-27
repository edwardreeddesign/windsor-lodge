import GlobalStyle from "../styles/GlobalStyles";
import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme/theme";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
