import styled from "styled-components";
import Copyright from "./Copyright";
import Links from "./Links";
import Socials from "./Socials";

const Footer = () => {
  return (
    <StyledFooter>
      <Socials />
      <Links />
      <Copyright />
    </StyledFooter>
  );
};

const StyledFooter = styled.div`
  background: ${props => props.theme.colors.light2};
  padding: 1rem 0;
`;

export default Footer;
