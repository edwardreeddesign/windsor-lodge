import styled from "styled-components";
import { H2, P } from "../../elements";
import { famousAmericans } from "../../data/CardData";
import AmericanCard from "./AmericanCard";
import { motion } from "framer-motion";
import { photoIn, scrollReveal, slideLeft } from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const American = () => {
  const [element, controls] = useScroll();
  const [maxCards, setMaxCards] = React.useState(3);
  const [americanCards, setAmericanCards] = React.useState(
    famousAmericans.slice(0, maxCards)
  );

  React.useEffect(() => {
    setAmericanCards(famousAmericans.slice(0, maxCards));
  }, [maxCards]);

  const lastAmerican = famousAmericans.length - 1 + 1;

  const paginate = () => {
    setMaxCards(prev => prev + 3);
  };
  return (
    <Content
      transition={{ duration: 0.85 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
      exit='exit'
    >
      <H2
        color='dark1'
        margin='3rem 0 2rem'
        align='left'
        size='large'
        weight='bold'
        variants={slideLeft}
      >
        American Freemasons
      </H2>
      <P size='small' margin='0 0 2rem 0' color='dark4'>
        The earliest known lodges in North America were located in Pennsylvania,
        where John Moore wrote of attending lodge meetings as early as 1715, two
        years before the first Grand Lodge was formed in London. Indeed, several
        of the Founding Fathers of the United States were Freemasons, including
        George Washington, Benjamin Franklin, and James Monroe.
      </P>

      <Flex>
        {americanCards.map(americans => (
          <AmericanCard key={americans.id} americans={americans} />
        ))}
      </Flex>
      <button
        disabled={maxCards >= lastAmerican}
        className='btn'
        onClick={paginate}
      >
        Load More <FaAngleDown />
      </button>
    </Content>
  );
};

const Content = styled(motion.div)`
  min-height: 100%;
  overflow: hidden;

  .btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: ${props => props.theme.colors.light2};
    border: none;
    border-radius: 0.25rem;
    box-shadow: ${props => props.theme.shadows.shadow1};
    transition: all 350ms ease;
    color: ${props => props.theme.colors.dark1};

    &:hover {
      transform: scale(0.95);
      background: ${props => props.theme.colors.light1};
    }

    &:disabled {
      background: grey;
      cursor: not-allowed;
    }
  }
`;

const Flex = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
`;

export default American;
