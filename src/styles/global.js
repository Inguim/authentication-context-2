import { createGlobalStyle } from "styled-components";
import RobotoWoff from "../assets/fonts/roboto-condensed-v19-latin-regular.woff";
import RobotoWoff2 from "../assets/fonts/roboto-condensed-v19-latin-regular.woff2";

export default createGlobalStyle`
    :root {
        --form-black: #232323;
        --form-left: #e6ecf0;
        --register-gray: #727272;
        --green: #59C15D;
        --blue: #086BAB;
        --blue-mustang: #032156;
        --light-fake-blue: #6fc2d1;
        --red: #E02041;
        --light-blue: #5989C1;
        --light-white: #FAFAFA;
        --dark-gray: #778899;
    }

    @font-face {
        font-family: 'Roboto Condensed';
        src: url(${RobotoWoff2}) format('woff2'),
             url(${RobotoWoff}) format('woff');
    }

    body {
        margin: 0;
        font-family: 'Roboto Condensed', sans-serif;
    }
`;
