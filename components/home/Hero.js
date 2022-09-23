import Link from 'next/link';
//styles
import styled from 'styled-components';
import { H1, Button } from '../../elements';
//animations
import { motion, keyframes } from 'framer-motion';
import {
  titleFade1,
  titleFade2,
  buttonFadeIn,
} from '../../animations/Animations';
import Stars from './Stars';

const Hero = () => {
  return (
    <HeroWrapper>
      <Stars />
      <H1 variants={titleFade2} margin="0 4rem 1rem 0" color="dark2">
        From Darkness...
      </H1>

      <H1
        variants={titleFade1}
        size="large"
        margin="1rem 0 2rem 2rem"
        color="light2"
        animation="glow"
      >
        Comes the Light.
      </H1>
      <motion.div variants={buttonFadeIn}>
        <Button primary href="/contact">
          Start Your Journey
        </Button>
      </motion.div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 95vh;
  background: ${props => props.theme.colors.dark1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0;

  /* H1:nth-child(2) {
    animation-name: glow;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-delay: 3s;
    transition: all 350ms ease;
  } */

  @keyframes glow {
    0% {
      text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px hsl(207, 70%, 59%),
        0 0 40px hsl(207, 70%, 59%), 0 0 50px hsl(207, 70%, 59%),
        0 0 60px hsl(207, 70%, 59%), 0 0 70px hsl(207, 70%, 59%);
    }
    50% {
      text-shadow: 0 0 20px #fff, 0 0 30px #fff,
        0 0 40px hsla(207, 70%, 94%, 0.9), 0 0 50px hsla(207, 70%, 94%, 0.9),
        0 0 60px hsla(207, 70%, 94%, 0.9), 0 0 70px hsla(207, 70%, 94%, 0.9),
        0 0 80px hsla(207, 70%, 94%, 0.9);
    }
    100% {
      text-shadow: 0 0 25px #fff, 0 0 35px hsl(207, 70%, 65%),
        0 0 45px hsl(207, 70%, 65%), 0 0 55px hsl(207, 70%, 65%),
        0 0 65px hsl(207, 70%, 65%), 0 0 75px hsl(207, 70%, 65%),
        0 0 50px hsl(207, 70%, 65%);
    }
  }
`;

export default Hero;
