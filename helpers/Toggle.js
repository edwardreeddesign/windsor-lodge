import React, { useState } from "react";
import styled from "styled-components";
import { H3 } from "../elements";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <StyledToggle layout onClick={() => setToggle(!toggle)}>
      <H3 margin='2rem 0' layout>
        {title}
      </H3>
      {toggle ? children : ""}
      <Line />
    </StyledToggle>
  );
};

const StyledToggle = styled.div`
  cursor: pointer;
`;

const Line = styled.div`
  background: ${props => props.theme.colors.light2};
  box-shadow: ${props => props.theme.shadows.shadow2};
  height: 0.2rem;
  margin: 2rem 0;
  width: 100%;
`;

export default Toggle;
