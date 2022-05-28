import Head from "next/head";
import Hero from "../components/home/Hero";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Animations";
import Banner from "../components/home/Banner";

export default function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
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
      <Banner />
    </motion.div>
  );
}
