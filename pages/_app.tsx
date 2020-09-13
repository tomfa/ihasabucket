import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

// Global base styles
import theme from '../styles/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ThemeProvider theme={theme}>
    <style jsx global>
      {`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: ${theme.fonts.primary};
          background-color: ${theme.colors.bgPrimary};
          color: ${theme.colors.textPrimary};
        }

        * {
          box-sizing: border-box;
        }
      `}
    </style>
    <Component {...pageProps} />
  </ThemeProvider>
);

export default App;
