import Image from "next/image";
import styled from "styled-components";
import { H3, P } from "../../elements";
import { motion } from "framer-motion";

const CanadianCard = ({ canadian }) => {
  const { name, image, about } = canadian;
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image
          src={image}
          alt={name}
          layout='fill'
          objectFit='cover'
          objectPosition='center 20%'
        />
      </ImageWrapper>
      <Info>
        <div className='name'>
          <div className='img'>
            <Image
              src='https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/Flag_of_Canada.svg/1280px-Flag_of_Canada.svg.png'
              alt='Canadian Flag'
              height='1.25rem'
              width='2rem'
              layout='responsive'
            />
          </div>
          <H3 size='small' color='dark1' weight='bold'>
            {name}
          </H3>
        </div>
        <P size='xSmall' color='dark2'>
          {about}
        </P>
      </Info>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  display: flex;
  width: 25rem;

  overflow: hidden;
  background: ${props => props.theme.colors.light2};
  border-radius: 0.25rem;

  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(7),
  &:nth-child(10) {
    width: 50%;

    @media ${props => props.theme.breakpoints.mobile} {
      width: 20rem;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    min-height: 30rem;
    width: 20rem;
    flex-direction: column;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 100%;
  object-fit: cover;
  object-position: top;
  position: relative;
  flex: 1;
  overflow: hidden;
  transition: all 350ms ease;
  transform: scale(1.1);

  @media ${props => props.theme.breakpoints.mobile} {
    height: 40rem;
    width: 100%;
  }

  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(7),
  &:nth-child(10) {
    height: 20rem;
    @media ${props => props.theme.breakpoints.mobile} {
      height: 20rem;
    }
  }
`;

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  flex: 1;
  padding: 0 1.75rem;
  position: relative;

  .name {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
  }
  .img {
    position: relative;
    height: 1.25rem;
    width: 2rem;
  }

  @media ${props => props.theme.breakpoints.mobile} {
    margin-top: 1rem;
    padding: 2rem;
  }
`;

export default CanadianCard;
