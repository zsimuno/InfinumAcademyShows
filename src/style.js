import { css, keyframes } from 'emotion';

export const fadeInImage = keyframes`
    from { opacity: 0; }
    to {   opacity: 1; }
`;

export const fadeInAnimation = (duration) => css`
    animation: ${fadeInImage} ${duration}s ease;
`;

export const spin = keyframes`
    from { transform: rotate(0deg); }
    to {   transform: rotate(360deg); }
`;

export const loadingAnimation = css` 
    border: 13px solid #EAEAEA; 
    border-top: 13px solid #FF7CAA;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    animation: ${spin} 2s linear infinite;
`;

export const image = css`
    max-width:100%;
    max-height:100%;
`;


export const customInput = css`
    border: none;
    outline: none;
    border-bottom: 1px solid #FF7CAA;
    color: #FF7CAA;
    font-size: 30px;
    margin-top: 15px;
    `;

export const inputLabel = css`
    font-size: 30px;
    
`;

export const showHidePassword = css`
    margin-left: -25px;
    margin-top: -25px;
    position: relative;
    z-index: 2;
    height: 20px;
`;

export const pinkText = css`
    color: #FF7CAA;
`;

export const greyText = css`
    color: #A5A5A5;
`;

export const customTextArea = css`
    font-family: Sans-serif;
    color: #505050;
    border-color: #EAEAEA;
    border-radius: 8px;
    padding: 10px;
`;


export const displayFlexColumn = css`
    display: flex;
    flex-direction: column;
`;

export const emulateButtonIfLogged = (isUserLoggedIn, onHoverColor = '#FF7CAA') => css`
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    color: #505050;
    margin: 5px;
    padding: 5px;
    user-select: none;  
    text-decoration: none; 
    cursor: pointer;

    ${ isUserLoggedIn ?
    `transition: background-color 0.1s ease;
    &:hover {
        background: ${onHoverColor};
        color: white;
    }`
    :
    `pointer-events: none;
    background: #EAEAEA;
    opacity: 0.5;`
    }
`;

export const emulateButton = emulateButtonIfLogged(true);

export const close = css`
    position: absolute;
    right: 32px;
    top: 32px;
    width: 32px;
    height: 32px;
    opacity: 0.3;
    &:hover {
        opacity: 1;
    }
    &:before, &:after {
        position: absolute;
        left: 15px;
        content: ' ';
        height: 33px;
        width: 2px;
        background-color: #333;
    }
    &:before {
        transform: rotate(45deg);
    }
    &:after {
        transform: rotate(-45deg);
    }
    cursor: pointer;
`;