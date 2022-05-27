import Link from "next/link";
import styled from "styled-components";

const Links = () => {
  return (
    <LinkContainer>
      <Link href='/'>
        <a>HOME</a>
      </Link>
      <Link href='/freemasonry'>
        <a>FREEMASONRY</a>
      </Link>
      <Link href='/windsor-lodge'>
        <a>WINDSOR LODGE 403</a>
      </Link>
      <Link href='/faq'>
        <a>FREQUENTLY ASKED QUESTIONS</a>
      </Link>
      <Link href='/contact'>
        <a>CONTACT</a>
      </Link>
    </LinkContainer>
  );
};

const LinkContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.25rem;
  a {
    cursor: pointer;
    font-size: 0.75rem;
    margin-bottom: 0.75rem;
  }
`;

export default Links;
