import Head from 'next/head';
import styled from 'styled-components';
import { H1 } from '../elements';
import { motion } from 'framer-motion';
import { pageAnimation, slideLeft } from '../animations/Animations';
import Questions from '../components/faq/Questions';

const faq = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Head>
        <title>Windsor Lodge 403 | Faq&apos;s</title>
        <meta
          name="description"
          content="Windsor Lodge 403 Frequently Asked Questions about Freemasonry and Windsor Lodge 403  masonic lodge masons masonry freemason freemasonry windsor lodge ontario canada grand lodge masonic temple freemasons in ontario contact windsor lodge info information"
        />
        <meta name="author" content="Windsor Lodge 403" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:title"
          content="Windsor Lodge 403 Frequently Asked Questions"
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:description"
          content="Information about Windsor Lodge 403 and Frequently Asked Questions about Freemasonry and How to join Freemasonry in Windsor and Windsor Lodge 403 "
        />
        <meta
          property="og:title"
          content="Windsor Lodge No. 403 Masonic Lodge"
        />
        <meta
          name="google-site-verification"
          content="ZSGCB8zzpcaz10Nvfi1_sFav9lJ0gMZYO_rUVdJplnI"
        />
        <meta property="og:url" content="https://windsorlodge403.com/faq" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PageWrapper>
        <H1 variants={slideLeft} align="center" weight="bold">
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
