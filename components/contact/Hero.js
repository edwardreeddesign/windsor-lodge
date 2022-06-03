import Image from "next/image";
import styled from "styled-components";

const Hero = () => {
  return (
    <HeroWrapper>
      <Image
        src='/images/lodge/windsor-lodge-sc-large.JPG'
        alt='Front entrance of Windsor Masonic Temple'
        layout='fill'
        objectFit='cover'
      />
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  position: relative;
  height: 60vh;
  width: 100%;
`;

export default Hero;
