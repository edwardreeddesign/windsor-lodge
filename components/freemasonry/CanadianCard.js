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
          <H3 size='small' color='dark3' weight='bold' align='center'>
            {name}
          </H3>
        </div>
        <P size='xSmall' align='center' margin='0 .75rem'>
          {about}
        </P>
      </Info>
    </CardWrapper>
  );
};

const CardWrapper = styled(motion.div)`
  display: flex;
  width: 25rem;
  height: 15rem;
  overflow: hidden;
  background: ${props => props.theme.colors.light2};
  border-radius: 0.25rem;

  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(7),
  &:nth-child(10) {
    width: 50%;
    /* height: rem; */
    @media ${props => props.theme.breakpoints.mobile} {
      height: 17rem;
      width: 20rem;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    height: 17rem;
    width: 20rem;
  }
`;

const ImageWrapper = styled(motion.div)`
  width: 10rem;
  height: 14.75rem;
  object-fit: cover;
  object-position: top;
  position: relative;
  /* flex: 1; */
  overflow: hidden;
  transition: all 350ms ease;
  transform: scale(1.1);

  &:nth-child(1),
  &:nth-child(4),
  &:nth-child(7),
  &:nth-child(10) {
    height: 20rem;
    @media ${props => props.theme.breakpoints.mobile} {
      height: 15rem;
      width: 6rem;
    }
  }

  @media ${props => props.theme.breakpoints.mobile} {
    height: 15rem;
    width: 6rem;
  }
`;

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  flex: 1;
  padding: 0.75rem;
  position: relative;

  .name {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
  }
  .img {
    position: relative;
    height: 1.25rem;
    width: 2rem;
  }
`;

export default CanadianCard;
