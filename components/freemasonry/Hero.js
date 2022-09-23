import Image from 'next/image';
import Link from 'next/link';
import { H1, H3, P, Button } from '../../elements';
import styled from 'styled-components';
//Animations
import { motion } from 'framer-motion';
import {
  titleReveal,
  photoIn,
  textFadeIn,
  slideLeft,
} from '../../animations/Animations';
import { useScroll } from '../../helpers/useScroll';

const Hero = () => {
  const [element, controls] = useScroll();
  return (
    <Content>
      <Container>
        <H1 variants={titleReveal} margin="2rem 0" align="center">
          What is Freemasonry?
        </H1>
      </Container>
      <ImgWrapper variants={photoIn}>
        <Image
          src="/images/lodge/cathedral.jpeg"
          alt="Mason built cathedral"
          layout="fill"
          objectFit="cover"
        />
      </ImgWrapper>

      <P size="small" variants={textFadeIn} margin="2rem 3rem 1rem 3rem">
        Freemasonry is the leading Fraternal organization in the world. Current
        worldwide membership totals over 3 million members, 1.1 million of whom
        are in North America. The Grand Lodge of Ancient Free and Accepted
        Masons of Canada in the Province of Ontario is a Grand Lodge with
        jurisdiction over 578 masonic lodges located in the province of Ontario
        in Canada with around 46,000 members.
      </P>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        Freemasonry grew out of medieval stonemasons&apos; guilds, which set
        wages, trained apprentices and regulated who could practice the craft.
      </P>
      <H3
        variants={slideLeft}
        margin="1rem 0 0 3rem "
        color="dark1"
        weight="bold"
      >
        Early Europe
      </H3>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        In early modern Europe, masons studied measurement, geometry and
        mathematical calculation - as well as bricklaying. Expert masons acted
        as engineers and architects, earning a higher status than most other
        tradesmen. The advancement within the guilds implied authority, and the
        path from apprentice to master was marked by ritual. Guilds were also
        social organizations whose members met informally to drink in lodges.
      </P>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        In early modern Europe, masons studied measurement, geometry and
        mathematical calculation - as well as bricklaying. Expert masons acted
        as engineers and architects, earning a higher status than most other
        tradesmen. The advancement within the guilds implied authority, and the
        path from apprentice to master was marked by ritual. Guilds were also
        social organizations whose members met informally to drink in lodges.
      </P>
      <H3
        variants={slideLeft}
        margin="1rem 0 0 3rem "
        color="dark1"
        weight="bold"
      >
        Formation of Freemasons
      </H3>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        Lodges went from operative (working) masons, to symbolic or speculative
        Freemasonry which adopted the rites and trappings of ancient religious
        orders and of chivalric brotherhoods. Lodges are open to all men from
        all walks of life. From the grocery store clerk, construction worker, to
        business owners, doctors, lawyers and politicians... and maybe you.
      </P>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        Masons come from all walks of life, both blue-collar and white-collar,
        urban, suburban and rural. What unifies Masons is not where we come from
        or what we do for a living, but rather what we aspire to be.
      </P>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        It is defined by a commitment to universal brotherhood and
        self-improvement.
      </P>

      <H3
        variants={slideLeft}
        margin="1rem 0 0 3rem "
        color="dark1"
        weight="bold"
      >
        Acceptance of Non-Masons
      </H3>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        Guilds began accepting non-stonemasons and charging them dues in the
        early 1600s. These would be educated men interested in mathematics and
        antiquity. While working masons would &ldquo;hew stone and raise
        perpendiculars&rdquo;, the gentlemen members were to practice
        &ldquo;secrecy, morality and good fellowship&rdquo;. By the end of the
        17th century, stonemason guilds became obsolete and became Freemasons.
      </P>
      <P size="small" variants={textFadeIn} margin="1rem 3rem">
        Lodges went from operative (working) masons, to symbolic or speculative
        Freemasonry which adopted the rites and trappings of ancient religious
        orders and of chivalric brotherhoods. Lodges are open to all men from
        all walks of life. From the grocery store clerk, construction worker, to
        business owners, doctors, lawyers and politicians... and maybe you.
      </P>

      <Button secondary href="/contact">
        Knock
      </Button>
    </Content>
  );
};

const Content = styled(motion.div)`
  /* width: 80%; */
  /* margin: 2rem auto; */
  /* padding: 2rem; */
  overflow: hidden;
`;

const Container = styled(motion.div)``;

const ImgWrapper = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 25rem;
  width: 100%;
  max-width: 60rem;
  overflow: hidden;
  /* box-shadow: ${props => props.theme.shadows.shadow2}; */
  margin: 0 auto;

  @media ${props => props.theme.breakpoints.mobile} {
    width: 100%;
    height: 20rem;
  }
`;

const Text = styled(motion.div)``;

export default Hero;
