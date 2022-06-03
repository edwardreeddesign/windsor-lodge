import React from "react";
import styled from "styled-components";
import { H2, P } from "../../elements";
import { famousCanadians } from "../../data/CardData";
import CanadianCard from "./CanadianCard";
import { FaAngleDown } from "react-icons/fa";
//Animations
import { motion } from "framer-motion";
import {
  photoIn,
  slideLeft,
  scrollReveal,
  photoFadeIn,
} from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";

const Canadian = () => {
  const [element, controls] = useScroll();
  const [maxCards, setMaxCards] = React.useState(3);
  const [canadianCards, setCanadianCards] = React.useState(
    famousCanadians.slice(0, maxCards)
  );

  React.useEffect(() => {
    setCanadianCards(famousCanadians.slice(0, maxCards));
  }, [maxCards]);

  // gets the last index of the canadians data
  const lastCanadian = famousCanadians.length - 1 + 1;

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
        Canadian Freemasons
      </H2>
      <P size='small' variants={photoIn} margin='0 0 2rem 0' color='dark1'>
        Freemasonry in Canada traces its origins to the United Grand Lodge of
        England, the Grand Lodge of Scotland and the Grand Lodge of Ireland, as
        a result of Canada&apos;s history as a dominion within the British
        Empire. Freemasonry in the United States, including Prince Hall
        Freemasonry, also influenced the formation of Freemasonry in Canada.
        Erasmus James Philipps became a Freemason while working on a commission
        to resolve boundaries in New England and, in 1739, became provincial
        Grand Master for Nova Scotia. Philipps founded the first Masonic lodge
        in Canada at Annapolis Royal, Nova Scotia.
      </P>
      <Flex variants={photoIn}>
        {canadianCards.map(canadian => (
          <CanadianCard
            variants={photoIn}
            key={canadian.id}
            canadian={canadian}
          />
        ))}
      </Flex>
      <button
        // if the last index === the maxCards from pagination
        disabled={maxCards >= lastCanadian}
        className='btn'
        onClick={paginate}
      >
        Load More <FaAngleDown />
      </button>
    </Content>
  );
};

const Content = styled(motion.div)`
  overflow: hidden;

  .btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem auto;
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: ${props => props.theme.colors.main2};
    border: none;
    border-radius: 0.25rem;
    box-shadow: ${props => props.theme.shadows.shadow1};
    transition: all 350ms ease;
    color: ${props => props.theme.colors.light1};

    &:hover {
      transform: scale(0.95);
      background: ${props => props.theme.colors.main3};
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

export default Canadian;
