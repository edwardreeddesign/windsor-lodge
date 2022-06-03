import styled from "styled-components";
import { motion } from "framer-motion";
import Card from "./Card";
import { quotes } from "../../data/QuoteData";
import { H1 } from "../../elements";
import { useScroll } from "../../helpers/useScroll";

const Quotes = () => {
  const [element, controls] = useScroll();

  return (
    <>
      <Wrapper ref={element} animate={controls} initial='hidden' exit='exit'>
        <H1 align='center' margin='2rem 0'>
          Freemason Quotes
        </H1>
        <Card />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  margin: 2rem 0;
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

export default Quotes;
