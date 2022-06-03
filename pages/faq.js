import Head from "next/head";
import styled from "styled-components";
import { H1 } from "../elements";
import { motion } from "framer-motion";
import { pageAnimation, slideLeft } from "../animations/Animations";
import Questions from "../components/faq/Questions";

const faq = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial='hidden'
      animate='show'
      exit='exit'
    >
      <Head>
        <title>Windsor Lodge 403 | Faq&apos;s</title>
        <meta
          name='description'
          content='Windsor Lodge 403 Frequently Asked Questions about Freemasonry and Windsor Lodge 403'
        />
        <meta
          property='og:title'
          content='Windsor Lodge 403 Frequently Asked Questions'
        />
        <meta
          property='og:description'
          content='Information about Windsor Lodge 403 and Frequently Asked Questions about Freemasonry and How to join Freemasonry in Windsor and Windsor Lodge 403 '
        />
        <meta property='og:url' content='https://windsorlodge403.com/faq' />
        <meta property='og:type' content='website' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <PageWrapper>
        <H1 variants={slideLeft} align='center' weight='bold'>
          Frequently Asked Questions
        </H1>
        <Questions />
      </PageWrapper>
    </motion.div>
  );
};

const PageWrapper = styled(motion.div)`
  margin-top: 4rem;
  padding: 0 8rem;
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 4rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`;

export default faq;
