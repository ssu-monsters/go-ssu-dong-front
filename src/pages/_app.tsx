import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';

import globalStyles from '@/styles/global';
import '@/assets/fonts/font.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
      <style jsx global>
        {globalStyles}
      </style>
    </>
  );
}
