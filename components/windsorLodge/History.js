import styled from "styled-components";
//Animations
import { motion } from "framer-motion";
import { slideLeft, scrollReveal, photoIn } from "../../animations/Animations";
import { H1, P } from "../../elements";
import { useScroll } from "../../helpers/useScroll";

const History = () => {
  const [element, controls] = useScroll();

  return (
    <Content
      transition={{ duration: 0.85 }}
      variants={scrollReveal}
      ref={element}
      animate={controls}
      initial='hidden'
      exit='exit'
    >
      <div>
        <H1 color='dark2' margin='0 0 2rem 0' variants={slideLeft}>
          Where We Started
        </H1>
      </div>

      <Container>
        <P
          margin='.25rem 0 .5rem 0'
          transition={{ duration: 0.85 }}
          variants={photoIn}
        >
          Back around the year 1882, several of the Masonic Brethren in Windsor
          conceived the idea of forming another lodge in this locality and in
          consequence, petitioned Great Western Lodge, which was the only lodge
          in Windsor at that time for permission to do so.
        </P>
        <P margin='.25rem 0 .5rem 0' variants={photoIn}>
          Heading this group of Masons was our Late Brother George E. Copeland,
          founder of Copeland&apos;s Book Store, which still carries his name.
          Great Western Lodge granted permission and this was forwarded to Grand
          Lodge for approval. On <span>July 13, 1883</span>, at their annual
          convocation of the Grand lodge of Canada, a motion was passed to
          authorize the organizing under dispensation of Windsor Lodge. The
          following year at the next annual convocation of{" "}
          <span>July 9th, 1884</span>, the charter was granted.
        </P>
        <P margin='.25rem 0 .5rem 0' variants={photoIn}>
          Windsor Lodge No. 403 was instituted and dedicated on{" "}
          <span>August 13, 1884</span>.
        </P>
        <P margin='.25rem 0 .5rem 0' variants={photoIn}>
          The first meeting of Windsor Lodge No. 403 was held{" "}
          <span>September 12, 1883</span> in the lodge rooms in the White Block.
          The White Block was located about the middle of the first block west
          of Ouellette Avenue and what is now known as Riverside Drive West.
        </P>
        <P margin='.25rem 0 .5rem 0' variants={photoIn}>
          The Lodge rooms were later moved to the Davis Block which was located
          about the middle of the first block east of Ouellette Avenue on
          Riverside Drive East. This was the location of the Windsor Theater and
          is now occupied by the Smith Auditorium. Later again, the lodge rooms
          were moved to our present location.
        </P>
        <figcaption>
          This is a partial copy of the history of Windsor Lodge by persons
          unknown and printed as a booklet for the 1958, 75th Anniversary
          Celebration.
        </figcaption>
      </Container>
    </Content>
  );
};

const Content = styled(motion.div)`
  margin: 2rem auto;

  @media ${props => props.theme.breakpoints.mobile} {
    padding: 0 1.55rem;
  }
`;

const Container = styled(motion.div)``;

export default History;
