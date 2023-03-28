import Head from 'next/head';
import styled from 'styled-components';
import Hero from '../components/contact/Hero';
import { H1 } from '../elements';
//animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations/Animations';
import Form from '../components/contact/Form';

const contact = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Head>
        <title>Windsor Lodge 403 | Contact</title>
        <meta
          name="description"
          content="Contact form for Windsor Lodge 403 Contact information for Contacting Windsor Lodge 403 Windsor Lodge 403 masonic lodge masons masonry freemason freemasonry windsor lodge ontario canada grand lodge masonic temple freemasons in ontario contact windsor lodge info information"
        />
        <meta name="author" content="Windsor Lodge 403" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="Windsor Lodge 403 Contact" />
        <meta
          property="og:description"
          content="How to contact Windsor Lodge 403 map of location of Windsor Lodge send a message to Windsor Lodge 403 "
        />
        <meta
          property="og:title"
          content="Windsor Lodge No. 403 Masonic Lodge"
        />
        <meta
          name="google-site-verification"
          content="ZSGCB8zzpcaz10Nvfi1_sFav9lJ0gMZYO_rUVdJplnI"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://windsorlodge403.com/contact" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <PageWrapper>
        <H1 align="center" margin="2rem 0" weight="bold">
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
    padding: 1rem;
  }
`;

export default contact;
