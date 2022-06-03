import Head from "next/head";
import styled from "styled-components";
import Hero from "../components/contact/Hero";
import { H1 } from "../elements";
//animations
import { motion } from "framer-motion";
import { pageAnimation } from "../animations/Animations";
import Form from "../components/contact/Form";

const contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Head>
        <title>Windsor Lodge 403 | Contact</title>
        <meta
          name='description'
          content='Contact form for Windsor Lodge 403 Contact information for Contacting Windsor Lodge 403'
        />
        <meta property='og:title' content='Windsor Lodge 403 Contact' />
        <meta
          property='og:description'
          content='How to contact Windsor Lodge 403 map of location of Windsor Lodge send a message to Windsor Lodge 403 '
        />
        <meta property='og:url' content='https://windsorlodge403.com/contact' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero />
      <PageWrapper>
        <H1 align='center' margin='2rem 0'>
          Contact
        </H1>
        <Form />
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

export default contact;
