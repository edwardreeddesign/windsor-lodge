import styled from "styled-components";
import { H2 } from "../../elements";
import { motion } from "framer-motion";
import { useScroll } from "../../helpers/useScroll";
import { scrollReveal } from "../../animations/Animations";

const Banner = () => {
  const [element, controls] = useScroll();
  return (
    <StyledBanner
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
      exit='exit'
    >
      <H2 color='dark1' align='center'>
        MAKING GOOD MEN BETTER, FROM TIME IMMEMORIAL
      </H2>
    </StyledBanner>
  );
};

const StyledBanner = styled(motion.div)`
  background: ${props => props.theme.colors.main2};
  margin: 2.5rem 0;
  padding: 2.5rem 0;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 2rem 0;
  }
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 1.5rem 0;
  }
`;

export default Banner;
