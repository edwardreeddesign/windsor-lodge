import Image from 'next/image';
import styled from 'styled-components';
import { H1, H2, H3, Button } from '../../elements';
import { motion } from 'framer-motion';
import {
  photoIn,
  scrollReveal,
  buttonFadeIn,
  slideLeft,
} from '../../animations/Animations';
import { useScroll } from '../../helpers/useScroll';

const Lodge = () => {
  const [element, controls] = useScroll();
  return (
    <Container
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial="hidden"
      exit="exit"
    >
      <Flex>
        <Content>
          <H1
            variants={slideLeft}
            color="dark1"
            margin=".5rem 0 2rem 0"
            align="center"
          >
            Windsor Lodge No. 403
          </H1>
          <H3
            variants={slideLeft}
            color="dark2"
            margin="0 0 .75rem 0"
            align="center"
          >
            Organized Under Dispensation 1883
          </H3>
          <H2
            variants={slideLeft}
            color="dark2"
            margin="0 0 1.5rem 0"
            align="center"
          >
            Charter Granted July 9, 1884
          </H2>
          <H3
            variants={slideLeft}
            color="dark2"
            margin="0 0 .75rem 0"
            align="center"
          >
            A.F. & A.M.
          </H3>
          <H2
            variants={slideLeft}
            color="dark2"
            margin="0 0 1.5rem 0"
            align="center"
          >
            ESSEX COUNTY DISTRICT
          </H2>
          <H2
            variants={slideLeft}
            color="dark2"
            align="center"
            margin="0 0 1.5rem 0"
          >
            A CORNERSTONE LODGE
          </H2>
          <motion.div variants={buttonFadeIn}>
            <Button secondary href="/windsor-lodge">
              Learn More about windsor 403
            </Button>
          </motion.div>
        </Content>
        <StyledImage variants={photoIn}>
          <Image
            src="/images/lodge/MasonicTemple.jpg"
            alt="Exterior of the Windsor Masonic Temple, home of Windsor Lodge No. 403 Freemasons."
            layout="fill"
            objectFit="cover"
          />
        </StyledImage>
      </Flex>
    </Container>
  );
};

const Container = styled(motion.div)`
  margin: 3rem 0;
  overflow: hidden;
`;

const Content = styled(motion.div)`
  padding: 1rem;
  border-radius: 0.25rem;
  overflow: hidden;
`;

const Flex = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  @media ${props => props.theme.breakpoints.tablet} {
    flex-direction: column;
    gap: 2rem;
  }
`;

const StyledImage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 25rem;
  width: 100%;
  max-width: 40rem;
  overflow: hidden;
  border-radius: 0.25rem;
  margin: 0.5rem;

  @media ${props => props.theme.breakpoints.tablet} {
    border-radius: 0;
  }
`;

export default Lodge;
