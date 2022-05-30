import styled from "styled-components";
import { H2, P } from "../../elements";
import { famousCanadians } from "../../data/CardData";
import CanadianCard from "./CanadianCard";
import { motion } from "framer-motion";

const Canadian = () => {
  return (
    <Content>
      <H2 color='dark2' margin='3rem 0 2rem' align='center'>
        Canadian Freemasons
      </H2>
      <P margin='0 0 2rem 0' color='dark2'>
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
      <Flex>
        {famousCanadians.map(canadian => (
          <CanadianCard key={canadian.id} canadian={canadian} />
        ))}
      </Flex>
    </Content>
  );
};

const Content = styled(motion.div)``;

const Flex = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1.5rem;
`;

export default Canadian;
