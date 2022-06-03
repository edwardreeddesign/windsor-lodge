import Image from "next/image";
import styled from "styled-components";
import { H1, Button } from "../../elements";
//Animations
import { motion } from "framer-motion";
import { titleAnimation, buttonFadeIn2 } from "../../animations/Animations";

const Hero = () => {
  return (
    <StyledHero>
      <Image
        src='/images/lodge/WindsorLodgeInside.jpeg'
        alt='Inside Windsor Lodge Blue Room'
        objectFit='cover'
        layout='fill'
      />
      <Title>
        <H1
          variants={titleAnimation}
          align='center'
          color='light1'
          weight='bold'
          size='large'
        >
          History of
        </H1>
        <H1
          variants={titleAnimation}
          align='center'
          color='light1'
          weight='bold'
          size='large'
          margin='1rem 0 1rem 0'
        >
          Windsor Lodge 403
        </H1>
        <motion.div variants={buttonFadeIn2}>
          <Button href='/contact' primary='true'>
            Contact
          </Button>
        </motion.div>
      </Title>
    </StyledHero>
  );
};

const StyledHero = styled(motion.div)`
  width: 100%;
  height: 75vh;
  position: relative;
  overflow: hidden;
`;

const Title = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1;
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000,
    1px 1px 0 #000;
`;

export default Hero;
