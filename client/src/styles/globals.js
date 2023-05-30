import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #fff0f0;
        overflow-x: hidden;
        font-family: "montserrat", sans-serif;
    }

    html::-webkit-scrollbar {
        width: 0.5rem;
    }

    html::-webkit-scrollbar-track {
        background: #262626;
    }

    html::-webkit-scrollbar-thumb {
        background: #047857;
    }
`

export default GlobalStyle