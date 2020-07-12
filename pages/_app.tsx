import { AppProps } from 'next/app';

import '../styles/index.scss';

const Main: React.FunctionComponent = ({ Component, pageProps }): React.ReactElement => {
  return <Component {...pageProps} />;
};

export default Main;
