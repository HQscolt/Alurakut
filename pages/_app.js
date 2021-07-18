import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { AlurakutStyles } from '../src/lib/AlurakutCommons'


const GlobalStyle = createGlobalStyle`
  /* Reset CSS (Necolas reset CSS <3) */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: url('https://images.alphacoders.com/216/thumb-1920-216583.jpg');
  }
//* #1C1C1C   https://s2.best-wallpaper.net/wallpaper/1920x1200/1804/Black-cat-face-eyes-darkness_1920x1200.jpg*//
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img{
    max-width: 100%;
    height: auto;
    display: block;
  }

    ${AlurakutStyles}
`

const theme = {
  colors: {
    primary: 'red',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
