import styled from "styled-components";
import Image from "next/image";

const Images = ({ image }) => {
  const { img, alt, height, width } = image;
  return (
    <ImageWrapper>
      <Image
        src={img}
        alt={alt}
        height={height}
        width={width}
        layout='responsive'
        objectFit='cover'
      />
    </ImageWrapper>
  );
};

const ImageWrapper = styled.div`
  /* margin: 2rem auto; */
  box-shadow: ${props => props.theme.shadows.shadow2};
  /* border: 2px solid ${props => props.theme.colors.accent1}; */
  width: 100%;
  max-width: 16rem;
  border: 2px solid ${props => props.theme.dark3};
  border-radius: 0.25rem;
  overflow: hidden;
  transition: all 350ms ease;

  /* &:hover {
    transform: scale(1.125);
  } */

  @media ${props => props.theme.breakpoints.mobile} {
    flex-wrap: wrap;
  }
`;

export default Images;
