import Head from "next/head";
//Components
import Hero from "../components/freemasonry/Hero";
//Animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Animations";
//Styles
import styled from "styled-components";
import WhatDoesItDo from "../components/freemasonry/WhatDoesItDo";
import FamousMasons from "../components/freemasonry/FamousMasons";

const freemasonry = () => {
  return (
    <PageWrapper
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Head>
        <title>Windsor Lodge 403 | Freemasonry</title>
        <meta name='description' content='Windsor Lodge 403  Freemasonry' />
        <meta property='og:title' content='Windsor Lodge 403 Freemasonry' />
        <meta
          property='og:description'
          content='Information about Windsor Lodge 403 and the history of Freemasonry'
        />
        <meta
          property='og:url'
          content='https://windsorlodge403.com/freemasonry'
        />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <WhatDoesItDo />
      <FamousMasons />
    </PageWrapper>
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

export default freemasonry;
