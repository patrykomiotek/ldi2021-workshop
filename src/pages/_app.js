if (process.env.NEXT_PUBLIC_API_MOCKING === 'enabled') {
  require('../lib/api/mocks');
}
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
