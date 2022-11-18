import styled from 'styled-components';
import { H2, H3, H4 } from '../../elements';
import { motion } from 'framer-motion';
import { useScroll } from '../../helpers/useScroll';
import { scrollReveal } from '../../animations/Animations';

const Rules = () => {
  const [element, controls] = useScroll();
  return (
    <Container
    //   variants={scrollReveal}
    //   ref={element}
    //   animate={controls}
    //   initial="hidden"
    //   exit="exit"
    >
      <H2 color="light2" align="center">
        10 Rules of Respect
      </H2>
      <H4 font="accent" align="center">
        By Charles Christian
      </H4>
      <div>
        <ul>
          <li>If you have a problem with me, come to me (privately).</li>
          <li>
            If I have a problem with you, then I will come to you (privately).
          </li>
          <li>
            If someone has a problem with me and comes to you, send them to me
            (I will do the same for you).
          </li>
          <li>
            If someone consistently will not come to me, say &ldquo;Let&apos;s
            go together&rdquo; (I will do the same for you).
          </li>
          <li>
            Be careful how you interpret me - I&apos;d rather do that. On
            matters that are unclear, do not feel pressured to interpret my
            feelings or thoughts. It is easy to misinterpret intentions.
          </li>
          <li>I will be careful how I interpret you.</li>
          <li>
            If it is confidential, don&apos;t tell. If anyone comes to me in
            confidence, i won&apos;t tell unless:
            <ul className="subList">
              <li>The person is going to harm themselves</li>
              <li>The person is going to physically harm someone else, or</li>
              <li>A child has been physically or sexually abused.</li>
            </ul>
            I expect the same from you.
          </li>
          <li>
            I do not read unsigned notes (they will be shredded as soon as they
            are received).
          </li>
          <li>
            I do not manipulate; I will not be manipulated; do not let others
            manipulate you. We leave conviction to the conscience (who does it
            much better than you or I).
          </li>
          <li>
            When in doubt, just say it. The only bad questions are the ones not
            asked.
          </li>
        </ul>
      </div>
    </Container>
  );
};

const Container = styled(motion.div)`
  background: ${props => props.theme.colors.main2};
  padding: 3rem 7rem 2rem;
  margin: 0 8rem 2rem;
  border-radius: 0.25rem;

  @media ${props => props.theme.breakpoints.tablet} {
    padding: 3rem 3rem 2rem;
    margin: 0 4rem 2rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin: 0 0 2rem;
  }
  ul {
    line-height: 1.25rem;
    li {
      list-style-type: decimal;
    }
  }

  .subList {
    margin-left: 2rem;
    font-size: clamp(0.65rem, 5vw, 0.85rem);
    li {
      list-style-type: lower-alpha;
      line-height: 1.15rem;
    }
  }
`;
export default Rules;
