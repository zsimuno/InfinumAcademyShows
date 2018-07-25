import { css, keyframes } from 'emotion';

export const fadeInImage = keyframes`
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
`;

export const fadeInAnimation = css`
    animation: ${fadeInImage} .6s;
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

export const emulateButton = css`
    display: inline-block;
    text-align: center;
    border-radius: 8px;
    border: 1px solid #EAEAEA;
    transition: background-color 0.1s ease;
    &:hover {
        background: #FF7CAA;
        color: white;
    }
    color: #505050;
    margin: 5px;
    padding: 5px;
    user-select: none;          
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


