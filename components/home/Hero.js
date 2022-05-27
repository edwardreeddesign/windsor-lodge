import Link from "next/link";
//styles
import styled from "styled-components";
import { H1, Button } from "../../elements";
//animations

const Hero = () => {
  return (
    <HeroWrapper>
      <H1 margin='0 4rem 1rem 0' color='dark2'>
        From Darkness...
      </H1>
      <H1 size='large' margin='1rem 0 2rem 2rem' color='light2'>
        Comes the Light.
      </H1>
      <div className='btn'>
        <Button primary href='/contact'>
          Start Your Journey
        </Button>
      </div>
    </HeroWrapper>
  );
};

const HeroWrapper = styled.div`
  height: 95vh;
  background: ${props => props.theme.colors.dark1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default Hero;
