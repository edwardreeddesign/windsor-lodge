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
        <P size='xSmall'>{about}</P>
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
`;

const Info = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  padding: 0.75rem;
  position: relative;
  .img {
    position: relative;
    height: 1.25rem;
    width: 2rem;
  }
`;

export default CanadianCard;
