import Head from 'next/head';
import Link from 'next/link';

function CsDev({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>csolution.dev</title>
      </Head>

      <header>CABECALHO</header>
      <Link href="/">
        <a>Home</a>
      </Link>
      <p>_____________________</p>
      
      <div>
        <Component {...pageProps} />
      </div>
      
      <p>_____________________</p>

      <footer>RODAPE</footer>
    </>
  );
}

export default CsDev;
