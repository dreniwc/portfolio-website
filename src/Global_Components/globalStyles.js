import { createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }
  .quickIntro {
    background: ${({ theme }) => theme.secondaryBackground};
    color: ${({ theme }) => theme.secondaryText};
    transition: all 0.50s linear;
  }
  svg.logoBlack {
    fill: ${({ theme }) => theme.svgBlack};
    stroke: ${({ theme }) => theme.svgBlack};
}
  `
