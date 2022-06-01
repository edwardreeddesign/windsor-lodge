import styled from "styled-components";
import { H1, P } from "../../elements";
import Canadian from "./Canadian";
//Animations
import { motion } from "framer-motion";
import { photoIn, slideLeft, scrollReveal } from "../../animations/Animations";
import { useScroll } from "../../helpers/useScroll";
import American from "./American";

const FamousMasons = () => {
  const [element, controls] = useScroll();
  return (
    <>
      <Content
        transition={{ duration: 0.85 }}
        variants={scrollReveal}
        ref={element}
        animate={controls}
        initial='hidden'
        exit='exit'
      >
        <H1 variants={slideLeft} margin='2rem 0' color='dark1'>
          Famous Freemasons
        </H1>
        <P variants={photoIn} margin='.5rem 0'>
          Masons come from all walks of life, both blue-collar and white-collar,
          urban, suburban and rural. What unifies Masons is not where we come
          from or what we do for a living, but rather what we aspire to be.
        </P>
        <P variants={photoIn} margin='.5rem 0'>
          Throughout history some members of the fraternity have made no secret
          of their involvement, while others have not made their membership
          public. In some cases, membership can be only proven by searching
          through the fraternity&apos;s records. Such records are most often
          kept at the individual Lodge level, and may have been lost due to
          fire, flood, deterioration or simple carelessness.{" "}
        </P>
        <P variants={photoIn} margin='.5rem 0'>
          Grand Lodge governance may have shifted or reorganized, resulting in
          further loss of records on the member or the name, number, location or
          even the existence of the Lodge in question.
        </P>
      </Content>
      <Content>
        <Canadian />
        <American />
      </Content>
    </>
  );
};

const Content = styled(motion.div)`
  overflow: hidden;
  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 2rem;
  }
`;

export default FamousMasons;
