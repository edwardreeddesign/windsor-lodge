import styled from "styled-components";
import Image from "next/image";
import { H3, P } from "../../elements";
import { motion } from "framer-motion";

const AmericanCard = ({ americans }) => {
  // const { name, image, about } = americans;
  return (
    <CardWrapper>
      <div className='header'>
        <ImageWrapper>
          <Image
            src={americans.image}
            alt={americans.name}
            layout='fill'
            objectFit='cover'
            objectPosition='center 20%'
          />
        </ImageWrapper>
      </div>
      <Info>
        <div className='img'>
          <Image
            src='https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/2560px-Flag_of_the_United_States.svg.png'
            alt='american flag'
            height='1.25rem'
            width='2rem'
            layout='responsive'
          />
        </div>
        <H3 align='left' color='light2'>
          {americans.name}
        </H3>

        <P
          color='light1'
          size='small'
          margin='1.125rem .5rem'
          textAlign='center'
        >
          {americans.about}
        </P>
      </Info>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 20rem;
  height: 28rem;
  background: ${props => props.theme.colors.dark1};
  border-radius: 0.5rem;
  box-shadow: ${props => props.theme.shadows.shadow1};
  overflow: hidden;

  .header {
    background-color: ${props => props.theme.colors.dark4};
    width: 100%;
    display: grid;
    place-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  width: 100%;
  padding: 1.75rem;

  .img {
    position: relative;
    height: 2rem;
    width: 2rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  min-width: 10rem;
  min-height: 10rem;
  border-radius: 50%;
  border: 2px solid ${props => props.theme.colors.dark3};
  object-fit: cover;
  object-position: left;
  position: relative;
  overflow: hidden;
  transition: all 350ms ease-in-out;
  box-shadow: ${props => props.theme.shadows.shadow2};

  @media ${props => props.theme.breakpoints.mobile} {
    height: 12rem;
    width: 12rem;
  }
`;

export default AmericanCard;
