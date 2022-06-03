import { motion } from "framer-motion";
import styled from "styled-components";
import Link from "next/link";

export const Button = ({
  children,
  href,
  primary,
  secondary,
  outline,
  disabled,
  submit,
}) => {
  return (
    <StyledButton
      primary={primary}
      secondary={secondary}
      outline={outline}
      disabled={disabled}
      submit={submit}
    >
      <Link href={href}>
        <a>{children}</a>
      </Link>
    </StyledButton>
  );
};

const StyledButton = styled(motion.button)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 2rem auto;
  padding: 1rem 1.8rem;
  transition: all 350ms ease;
  font-size: clamp(0.8rem, 3vw, 1.1rem);
  font-family: ${props => props.theme.fonts.accent};
  letter-spacing: ${props => props.theme.letterSpacing.small};
  text-transform: uppercase;
  font-weight: 800;
  box-shadow: ${props => props.theme.shadows.shadow2};
  border-radius: 0.125rem;
  border: ${props =>
    props.outline ? `1px solid ${props.theme.colors.dark3}` : "none"};
  background: ${props =>
    props.primary
      ? props.theme.colors.main1
      : props.secondary
      ? props.theme.colors.dark1
      : props.outline
      ? "transparent"
      : ""};
  color: ${props =>
    props.primary
      ? props.theme.colors.light2
      : props.secondary
      ? props.theme.colors.light2
      : props.outline
      ? props.theme.colors.main1
      : ""};

  &:hover {
    background: ${props =>
      props.primary
        ? props.theme.colors.main2
        : props.secondary
        ? props.theme.colors.dark2
        : props.outline
        ? "transparent"
        : ""};
    transform: scale(0.95);
  }
`;
