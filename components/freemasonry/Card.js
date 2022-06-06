import Image from "next/image";
import styled from "styled-components";
import { H3, P } from "../../elements";
import { motion } from "framer-motion";
import {
  titleReveal,
  textFadeIn,
  photoFadeIn,
} from "../../animations/Animations";

const Card = ({ info }) => {
  const { img, title, paragraph } = info;
  return (
    <Wrapper variants={photoFadeIn}>
      <StyledImage variants={photoFadeIn}>
        <Image src={img} alt={title} layout='fill' objectFit='cover' />
      </StyledImage>
      <Content>
        <H3
          variants={titleReveal}
          weight='bold'
          color='dark1'
          align='left'
          margin='.5rem 0 2rem'
          size='large'
        >
          {title}
        </H3>
        <P variants={textFadeIn} margin='0 0 1rem' size='xSmall' color='dark2'>
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
