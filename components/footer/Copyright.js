import Link from "next/link";
import styled from "styled-components";
import { P } from "../../elements/Typography";

const Copyright = () => {
  return (
    <StyledCopyright>
      <P size='xxSmall' margin='0 1rem 00'>
        &copy; 2022 Windsor Lodge No. 403 All Rights Reserved
      </P>
      <P size='xxSmall'>
        <Link href='https://www.edwardreeddesigns.com'>
          <a target='_blank' rel='noreferrer'>
            Designed by Edward Reed Designs
          </a>
        </Link>
      </P>
    </StyledCopyright>
  );
};

const StyledCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: cursive;

  a,
  P {
    font-family: cursive;
  }
`;

export default Copyright;
