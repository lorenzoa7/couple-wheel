import { createGlobalStyle } from 'styled-components'
import PacificoRegular from './fonts/Pacifico-Regular.ttf'
import MontserratLight from './fonts/Montserrat-Light.ttf'
import MontserratMedium from './fonts/Montserrat-Medium.ttf'
import MontserratRegular from './fonts/Montserrat-Regular.ttf'
import MontserratBold from './fonts/Montserrat-Bold.ttf'
import MontserratExtraBold from './fonts/Montserrat-ExtraBold.ttf'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    @font-face {
        font-family: "pacifico";
        src: url(${PacificoRegular}) format("truetype");
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "montserrat";
        src: url(${MontserratLight}) format("truetype");
        font-weight: 300;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "montserrat";
        src: url(${MontserratRegular}) format("truetype");
        font-weight: 400;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "montserrat";
        src: url(${MontserratMedium}) format("truetype");
        font-weight: 500;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "montserrat";
        src: url(${MontserratBold}) format("truetype");
        font-weight: 700;
        font-style: normal;
        font-display: swap;
    }

    @font-face {
        font-family: "montserrat";
        src: url(${MontserratExtraBold}) format("truetype");
        font-weight: 800;
        font-style: normal;
        font-display: swap;
    }

    body {
        background-color: #ffe4e6;
        overflow-x: hidden;
        font-family: 'montserrat', Arial, Helvetica, sans-serif;
    }

    html::-webkit-scrollbar {
        width: 0.5rem;
    }

    html::-webkit-scrollbar-track {
        background: #fecdd3;
    }

    html::-webkit-scrollbar-thumb {
        background: #fb7185;
    }
`

export default GlobalStyle