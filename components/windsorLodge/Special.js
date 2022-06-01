import styled from "styled-components";
import { H3 } from "../../elements";
//Animations
import { motion } from "framer-motion";
import { useScroll } from "../../helpers/useScroll";
import { scrollReveal } from "../../animations/Animations";

const Special = () => {
  const [element, controls] = useScroll();
  return (
    <Wrapper
      transition={{ duration: 0.85 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
      exit='exit'
    >
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To your enemy, forgiveness.
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To an opponent, tolerance.
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To a friend, your heart.
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To a customer, service.
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To all men, charity.
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To every child, a good example.
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        To yourself, respect.
      </H3>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  margin: 2rem auto;
  background: ${props => props.theme.colors.dark1};
  padding: 1.75rem 0;
`;

export default Special;
