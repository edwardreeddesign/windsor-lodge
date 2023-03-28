import Head from 'next/head';
import styled from 'styled-components';
// animations
import { motion } from 'framer-motion';
import { pageAnimation } from '../animations/Animations';
//components
import Hero from '../components/windsorLodge/Hero';
import Special from '../components/windsorLodge/Special';
import History from '../components/windsorLodge/History';
import MasonryGrid from '../components/windsorLodge/MasonryGrid';
import Update from '../components/windsorLodge/Update';
import Poem from '../components/windsorLodge/Poem';
import Land from '../components/windsorLodge/Land';

const windsorlodge = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <Head>
        <title>Windsor Lodge 403 | Windsor Lodge</title>
        <meta
          name="description"
          content="Windsor Lodge 403 About Windsor Lodge page Windsor Lodge 403 masonic lodge masons masonry freemason freemasonry windsor lodge ontario canada grand lodge masonic temple freemasons in ontario contact windsor lodge info information"
        />
        <meta
          name="google-site-verification"
          content="ZSGCB8zzpcaz10Nvfi1_sFav9lJ0gMZYO_rUVdJplnI"
        />
        <meta name="author" content="Windsor Lodge 403" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta property="og:title" content="Windsor Lodge 403 Windsor Lodge" />
        <meta
          property="og:description"
          content="History of Windsor Lodge 403 masonic lodge masons masonry freemason freemasonry windsor lodge ontario canada grand lodge masonic temple freemasons in ontario contact windsor lodge info information "
        />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content="https://windsorlodge403.com/windsor-lodge"
        />
        <meta
          property="og:title"
          content="Windsor Lodge No. 403 Masonic Lodge"
        />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <PageWrapper>
        <Special />
        <History />
        <Land />
        <MasonryGrid />
        <Update />
        <Poem />
      </PageWrapper>
    </motion.div>
  );
};

const PageWrapper = styled(motion.div)`
  overflow: hidden;
  padding: 0 8rem;
  @media ${props => props.theme.breakpoints.tablet} {
    padding: 0 4rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0;
  }
`;

export default windsorlodge;
