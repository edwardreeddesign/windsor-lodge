import styled from "styled-components";
import { H2, P } from "../../elements";
import { famousAmericans } from "../../data/CardData";
import AmericanCard from "./AmericanCard";
import { motion } from "framer-motion";
import { photoIn } from "../../animations/Animations";
import React from "react";
import { FaAngleDown } from "react-icons/fa";

const American = () => {
  const [maxCards, setMaxCards] = React.useState(3);
  const [americanCards, setAmericanCards] = React.useState(
    famousAmericans.slice(0, maxCards)
  );

  React.useEffect(() => {
    setAmericanCards(famousAmericans.slice(0, maxCards));
  }, [maxCards]);

  console.log(famousAmericans.slice(0, maxCards));

  const paginate = () => {
    if (maxCards.length === 0) {
      return "disabled";
    }
    setMaxCards(prev => prev + 3);
  };
  return (
    <Content>
      <H2
        color='dark2'
        margin='3rem 0 2rem'
        align='center'
        size='large'
        weight='bold'
      >
        American Freemasons
      </H2>
      <P margin='5rem auto' color='dark2'>
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
      <button className='btn' onClick={paginate}>
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

    &:hover {
      transform: scale(0.95);
      background: ${props => props.theme.colors.light1};
    }

    &.disabled {
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
