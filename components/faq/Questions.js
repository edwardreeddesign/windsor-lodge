import styled from "styled-components";
import { faqData } from "../../data/Faq";
import { H1, P } from "../../elements";
import Toggle from "../../helpers/Toggle";
//Animations
import { AnimateSharedLayout, motion } from "framer-motion";
import { useScroll } from "../../helpers/useScroll";
import { scrollReveal } from "../../animations/Animations";

const Questions = () => {
  const [element, controls] = useScroll();

  return (
    <StyledFaq
      ref={element}
      animate={controls}
      initial='hidden'
      variants={scrollReveal}
    >
      <Wrapper>
        <AnimateSharedLayout>
          {faqData.map((data, idx) => (
            <Toggle title={data.question} key={idx}>
              <div className='answer'>
                <P color='dark1' weight='normal'>
                  {data.answer}
                </P>
              </div>
            </Toggle>
          ))}
        </AnimateSharedLayout>
      </Wrapper>
    </StyledFaq>
  );
};

const StyledFaq = styled(motion.div)`
  min-height: 90vh;
  display: block;
  width: 100%;
  max-width: 90%;
  /* padding: 5rem 2rem; */
  margin: 0 auto;

  .answer {
    margin-top: 2rem;
    padding: 1rem;
    background: ${props => props.theme.colors.light2};
    border-radius: 0.25rem;
  }
`;

const Wrapper = styled(motion.div)``;

export default Questions;
