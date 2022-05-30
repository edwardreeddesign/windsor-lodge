import Head from "next/head";
import styled from "styled-components";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Animations";
//components
import Hero from "../components/home/Hero";
import Banner from "../components/home/Banner";
import Lodge from "../components/home/Lodge";
import Meeting from "../components/home/Meeting";
import Quotes from "../components/home/Quotes";

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
      <PageWrapper>
        <Banner />
        <Lodge />
        <Meeting />
        <Quotes />
      </PageWrapper>
    </motion.div>
  );
}

const PageWrapper = styled(motion.div)`
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 4rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`;
