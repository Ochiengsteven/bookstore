// eslint-disable-next-line import/no-extraneous-dependencies
import { createGlobalStyle } from 'styled-components';

const FontStyles = createGlobalStyle`
  /* Import and use the Google Fonts here */
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;500&display=swap');

  /* Apply the fonts to different elements */
  body {
    font-family: 'Roboto', sans-serif;
  }

  h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
  }
`;

export default FontStyles;
