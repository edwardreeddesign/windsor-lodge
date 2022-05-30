import Image from "next/image";
import styled from "styled-components";
import { H3, P } from "../../elements";
import { motion } from "framer-motion";

const Card = ({ info }) => {
  const { img, title, paragraph } = info;
  return (
    <Wrapper>
      <StyledImage>
        <Image src={img} alt={title} layout='fill' objectFit='cover' />
      </StyledImage>
      <Content>
        <H3
          weight='bold'
          color='dark2'
          align='left'
          margin='.5rem 0 2rem'
          size='large'
        >
          {title}
        </H3>
        <P margin='0 0 1rem' size='xSmall'>
          {paragraph}
        </P>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 20rem;
  height: 30rem;
  background: ${props => props.theme.colors.light2};
  border-radius: 0.25rem;
  overflow: hidden;
  gap: 2rem;

  &:nth-child(even) {
    box-shadow: ${props => props.theme.shadows.shadow2};
  }
  &:nth-child(odd) {
    box-shadow: ${props => props.theme.shadows.shadow1};
  }
`;

const StyledImage = styled(motion.div)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  height: 12rem;
  width: 100%;
  overflow: hidden;
`;

const Content = styled(motion.div)`
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
`;

export default Card;
