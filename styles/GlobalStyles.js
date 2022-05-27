import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        background: ${({ theme }) => theme.colors.light1};
        padding-top: 6.4rem;
    }

    a {
        text-decoration: none;
        text-align: center;
        color: ${({ theme }) => theme.colors.dark2};
        font-weight: 600;
        font-family: ${({ theme }) => theme.fonts.title};
    }

    ul, li {
        list-style-type: none;
    }

    span {
        font-weight: 700;
    }

    figcaption {
      font-size: .775rem;
      color: ${props => props.theme.colors.main3};
    }
`;

export default GlobalStyle;
