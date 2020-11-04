import styled, {createGlobalStyle} from 'styled-components';
//@ts-ignore
import BGImage from './images/nikola-jovanovick.jpg'

export const GlobalStyle = createGlobalStyle `
html {
    height: 100%;

}
body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0 20px;
    display: flex;
    justify-content: center;
}
* {
    box-sizing: border-box;
    font-family: 'bebas=neue';
}
`