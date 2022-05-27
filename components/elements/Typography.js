import styled from "styled-components";
import { motion } from "framer-motion";

export const P = styled(motion.p)`
  margin: ${props => (props.margin ? props.margin : 0)};

  font-size: ${props => {
    switch (props.size) {
      case "medium":
        return "1.125rem";
      case "small":
        return "1rem";
      case "xSmall":
        return ".875rem";
      case "xxSmall":
        return ".575rem";
      default:
        return "1.125rem";
    }
  }};

  line-height: ${props => {
    switch (props.height) {
      case "medium":
        return "1.4375rem";
      case "small":
        return "1.275rem";
      case "xSmall":
        return "1.125";
      default:
        return "1.4375rem";
    }
  }};

  font-weight: ${props => {
    switch (props.weight) {
      case "normal":
        return 400;
      case "bold":
        return 700;
      default:
        return 400;
    }
  }};

  color: ${props => {
    switch (props.color) {
      case "main1":
        return props.theme.colors.main1;
      case "main2":
        return props.theme.colors.main2;
      case "dark1":
        return props.theme.colors.dark1;
      case "dark2":
        return props.theme.colors.dark2;
      case "dark3":
        return props.theme.colors.dark3;
      case "light1":
        return props.theme.colors.light1;
      case "light2":
        return props.theme.colors.light2;
      default:
        return props.theme.colors.dark1;
    }
  }};
  text-align: ${props => (props.align ? props.align : "left")};
`;

export const H1 = styled(motion.h1)``;

export const H2 = styled(motion.h2)``;

export const H3 = styled(motion.h3)``;

export const H4 = styled(motion.h4)``;
