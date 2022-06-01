import Head from "next/head";
import styled from "styled-components";
// animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Animations";
//components
import Hero from "../components/windsorLodge/Hero";
import Special from "../components/windsorLodge/Special";
import History from "../components/windsorLodge/History";
import MasonryGrid from "../components/windsorLodge/MasonryGrid";
import Update from "../components/windsorLodge/Update";
import Poem from "../components/windsorLodge/Poem";

const windsorlodge = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Head>
        <title>Windsor Lodge 403 | Windsor Lodge</title>
        <meta
          name='description'
          content='Windsor Lodge 403 About Windsor Lodge page'
        />
        <meta property='og:title' content='Windsor Lodge 403 Windsor Lodge' />
        <meta
          property='og:description'
          content='History of Windsor Lodge 403 '
        />
        <meta
          property='og:url'
          content='https://windsorlodge403.com/windsor-lodge'
        />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <PageWrapper>
        <Special />
        <History />
        <MasonryGrid />
        <Update />
        <Poem />
      </PageWrapper>
    </motion.div>
  );
};

const PageWrapper = styled(motion.div)`
  padding: 0 8rem;
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 4rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`;

export default windsorlodge;
