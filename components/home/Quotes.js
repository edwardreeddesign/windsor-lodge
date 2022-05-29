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
        <H1>Freemason Quotes</H1>
        <Card />
      </Wrapper>
    </>
  );
};

const Wrapper = styled(motion.div)`
  /* padding: 3rem 7rem 2rem;
  margin: 0 0rem 2rem;
  border-radius: 0.25rem; */
`;

export default Quotes;
