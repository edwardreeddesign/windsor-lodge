import styled from "styled-components";
import { motion } from "framer-motion";
import { H3 } from "../../elements";
import { scrollReveal } from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";

const Poem = () => {
  const [element, controls] = useScroll();
  return (
    <Content
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
        margin='0 0 .25rem 0'
        size='small'
      >
        There is no height nor depth,
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        In the eternal space,
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        Not humble work, but work ill done,
      </H3>
      <H3
        font='accent'
        align='center'
        color='light2'
        margin='.25rem 0'
        size='small'
      >
        Will bring disgrace.
      </H3>
    </Content>
  );
};

const Content = styled(motion.div)`
  margin: 2rem auto;
  padding: 2rem 0;
  background: ${props => props.theme.colors.main1};
`;

export default Poem;
