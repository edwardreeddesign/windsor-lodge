import styled from "styled-components";
import { H3, Button } from "../../elements";
import { motion } from "framer-motion";
import { textFadeIn } from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";

const Meeting = () => {
  const [element, controls] = useScroll();
  return (
    <Container ref={element} animate={controls} initial='hidden' exit='exit'>
      <H3
        variants={textFadeIn}
        align='center'
        letterSpacing='small'
        color='dark4'
        weight='bold'
      >
        Regular Meeting of Windsor Lodge to be held at the Masonic Temple on the
        first Friday of each month, except July and August, at 7:30 p.m. sharp.
      </H3>
      <Button primary href='/contact'>
        Contact
      </Button>
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${props => props.theme.colors.main3};
  padding: 3rem 7rem 2rem;
  margin: 0 8rem 2rem;
  border-radius: 0.25rem;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 3rem 3rem 2rem;
    margin: 0 4rem 2rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 0 2rem;
  }
`;

export default Meeting;
