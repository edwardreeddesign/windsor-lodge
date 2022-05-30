import styled from "styled-components";
import Card from "./Card";
import { freemasonryInfo } from "../../data/CardData";
import { H1 } from "../../elements";
//Animations
import { motion } from "framer-motion";
import { slideLeft, scrollReveal } from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";

const WhatDoesItDo = () => {
  const [element, controls] = useScroll();
  return (
    <motion.div ref={element} animate={controls} initial='hidden' exit='exit'>
      <H1 variants={slideLeft} margin='2rem' align='center' weight='light'>
        What Does Freemasonry Do?
      </H1>
      <Content>
        {freemasonryInfo.map(info => (
          <Card key={info.title} info={info} />
        ))}
      </Content>
    </motion.div>
  );
};

const Content = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
`;

export default WhatDoesItDo;
