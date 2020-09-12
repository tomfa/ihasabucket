import { AppProps } from 'next/app';

// Global base styles
import '../styles.css';

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />;

export default App;
