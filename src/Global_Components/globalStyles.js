import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
  }
  a {
    color: ${({ theme }) => theme.text};
  }
  .quickIntro {
    background: ${({ theme }) => theme.secondaryBackground};
    color: ${({ theme }) => theme.secondaryText};
    transition: all 0.50s linear;
  }
  .borderColour {
    border-color: ${({ theme }) => theme.borderColour};
  }
  svg.logoBlack {
    fill: ${({ theme }) => theme.svgBlack};
    stroke: ${({ theme }) => theme.svgBlack};
}
  `
