import { useState } from "react";
import styled from "styled-components";
import { H2, P } from "../../elements";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { quotes } from "../../data/QuoteData";

const variants = {
  enter: direction => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: direction => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = ({ offset, velocity }) => {
  return Math.abs(offset) * velocity;
};

const Card = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const quoteIndex = wrap(0, quotes.length, page);

  const paginate = newDirection => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div>
          <CardWrapper
            key={page}
            custom={direction}
            variants={variants}
            initial='enter'
            animate='center'
            exit='exit'
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag='x'
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          >
            <CardHeader>
              <motion.img
                src={quotes[quoteIndex].image}
                alt={quotes[quoteIndex].alt}
              />
            </CardHeader>
            <CardQuote>
              <H2 color='dark1' margin='1rem 0' align='left'>
                {quotes[quoteIndex].name}
              </H2>
              <P size='xSmall' height='small' color='dark2'>
                &ldquo;{quotes[quoteIndex].quote}&rdquo;
              </P>
            </CardQuote>
            <Next
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => paginate(1)}
            >
              {"‣"}
            </Next>
            <Prev
              // whileHover={{ scale: 1.1 }}
              // whileTap={{ scale: 0.9 }}
              onClick={() => paginate(-1)}
            >
              {"‣"}
            </Prev>
          </CardWrapper>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

const CardWrapper = styled(motion.div)`
  position: relative;
  width: 40rem;
  display: flex;
  /* max-height: 15rem; */
  /* flex-direction: column; */
  /* align-items: center;
  justify-content: space-between; */
  background: transparent;
  border-radius: 0.25rem;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.shadow1};

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: column;
    width: 25rem;
  }

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;

    @media ${props => props.theme.breakpoints.mobile} {
      object-position: center 20%;
    }
  }
`;

const CardHeader = styled(motion.div)`
  display: flex;
  flex: 1;
  /* background: ${props => props.theme.colors.dark1}; */

  @media ${props => props.theme.breakpoints.mobile} {
    flex-direction: row;
    /* margin-bottom: 2rem; */
    width: 100%;
  }

  img {
    height: 100%;
  }
`;

const CardQuote = styled(motion.div)`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  justify-content: center;
  padding: 2rem 4rem;
  flex: 1;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 3rem 4rem;
  }
`;

const Next = styled(motion.div)`
  right: 10px;
  top: calc(50% - 20px);
  position: absolute;
  background: ${props => props.theme.colors.main1};
  color: ${props => props.theme.colors.light2};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;

const Prev = styled(motion.div)`
  left: 10px;
  transform: scale(-1);
  top: calc(50% - 20px);
  position: absolute;
  background: ${props => props.theme.colors.main1};
  color: ${props => props.theme.colors.light2};
  border-radius: 30px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 18px;
  z-index: 2;
`;

export default Card;
