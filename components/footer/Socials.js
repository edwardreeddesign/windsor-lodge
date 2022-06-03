import Link from "next/link";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Socials = () => {
  return (
    <StyledSocials>
      <Link href='/'>
        <a>
          <FaTwitter />
        </a>
      </Link>
      <Link href='/'>
        <a>
          <FaFacebook />
        </a>
      </Link>
      <Link href='https://m.facebook.com/groups/944181565592364/'>
        <a>
          <FaInstagram />
        </a>
      </Link>
    </StyledSocials>
  );
};

const StyledSocials = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;

  a {
    cursor: pointer;
    margin: 1.25rem;
    font-size: 1.4rem;
    color: ${props => props.theme.colors.main1};
    transition: all 350ms ease;

    &:hover {
      transform: scale(0.95);
      color: ${props => props.theme.colors.main2};
    }
  }
`;

export default Socials;
