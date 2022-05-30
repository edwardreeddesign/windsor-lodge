import styled from "styled-components";
import Card from "./Card";
import { freemasonryInfo } from "../../data/CardData";
import { H1 } from "../../elements";
import { motion } from "framer-motion";

const WhatDoesItDo = () => {
  return (
    <>
      <H1 margin='2rem' align='center'>
        What Does Freemasonry Do?
      </H1>
      <Content>
        {freemasonryInfo.map(info => (
          <Card key={info.title} info={info} />
        ))}
      </Content>
    </>
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
