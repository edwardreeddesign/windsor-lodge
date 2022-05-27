import Head from "next/head";
import Hero from "../components/home/Hero";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Windsor Lodge 403 | Home</title>
        <meta name='description' content='Windsor Lodge 403 home page' />
        <meta property='og:title' content='Windsor Lodge 403 Home' />
        <meta
          property='og:description'
          content='Information about Windsor Lodge 403 and Freemasonry in Windsor Ontario Meeting dates and times for Windsor Lodge'
        />
        <meta property='og:url' content='https://windsorlodge403.com/' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Hero />
    </div>
  );
}
