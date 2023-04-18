import Head from 'next/head';
import styled from 'styled-components';
// animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations/Animations';
//components
import Hero from '../components/home/Hero';
import Banner from '../components/home/Banner';
import Lodge from '../components/home/Lodge';
import Meeting from '../components/home/Meeting';
import Quotes from '../components/home/Quotes';
import Rules from '../components/home/Rules';

export default function Home() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Head>
        <title>Windsor Lodge 403 | Home</title>
        <meta
          name="description"
          content="Windsor Lodge 403 is a Masonic lodge in Windsor, Ontario, Canada. Learn about our meetings, events, and community service activities."
        />
        <meta name="author" content="Windsor Lodge 403" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          property="og:title"
          content="Windsor Lodge 403: Masonic Lodge in Windsor, Ontario, Canada"
        />
        <meta
          property="og:description"
          content="Windsor Lodge 403 is a Masonic lodge in Windsor, Ontario, Canada. Learn about our meetings, events, and community service activities."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:url" content="https://windsorlodge403.com/" />
        <meta
          property="og:image"
          content="https://windsorlodge403.com/images/og-image.jpg"
        />
        <meta property="og:type" content="website" />

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero />
      <PageWrapper>
        <Banner />
        <Lodge />
        <Meeting />
        <Rules />
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
