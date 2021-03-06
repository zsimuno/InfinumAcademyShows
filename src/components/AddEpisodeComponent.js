import React, { Component } from 'react';
import { observer } from 'mobx-react';
import Dropzone from 'react-dropzone';
import { Link } from 'react-router-dom';

import { css, cx } from 'emotion';
import { customTextArea, fadeInAnimation, emulateButton, close } from '../style';

import { ButtonComponent } from './ButtonComponent';

const container = css`
    display: grid;
    position: fixed;
    grid-gap: 20px;
    width: 40%;
    left: 20%;
    top: 10%;
    background: white;
    padding: 30px;
    border-radius: 8px;    
`;

const backgroundContainer = css`
    position: fixed;
    z-index: 200;
    background-color: rgb(0, 0, 0, 0.6);
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
`;

const customInput = css`
    border: none;
    outline: none;
    border-bottom: 1px solid #A5A5A5;;
    color: #FF7CAA;
    font-size: 20px;
    &::placeholder {
        color: #A3A3A3;
    }
    `;

const selectInput = css`
    width: 100%;
    margin-right: 20px;
    margin-left: 10px;
`;

const inputLabel = css`
    font-size: 20px;
    color: #A3A3A3;
    
`;

const _textAreaStyle = css`
    font-size: 20px;
    width: 95%;
    height: 100px;
    resize: none;
    &::placeholder {
        color: #A3A3A3;
    }
`;

const displayFlex = css`
    display: flex;
    justify-content: space-between;
`;

const dropzoneStyle = css`
    display: grid;
    width: 100%;
    height: 150px;
    color: #A5A5A5;
    border: 2px dashed #EAEAEA;
`;

const dropzoneAccept = css`
    color: green;
    border: 2px dashed green;
`;

const dropzoneReject = css`
    color: red;
    border: 2px dashed red;
`;

const textInDropzone = css`
    justify-self: center;
    align-self: center;
`;


const imageStyle = css`
    justify-self: center;
    align-self: center;
    height: 100px;
    width: auto;
`;

@observer
export class AddEpisodeComponent extends Component {
    render() {
        const {
            onSubmit,
            onDrop,
            onChangeFunction,
            errors,
            title,
            season,
            seasonOptions,
            episodeNumber,
            episodeOptions,
            description,
            onClose,
            image,
            isUserLoggedIn,
        } = this.props;
        return (
            <div className={backgroundContainer}>
                {!isUserLoggedIn ?
                    <div className={cx(fadeInAnimation(1), container)}>
                        <h3>
                            You must be logged in to do this!
                        </h3>
                        <div className={close} onClick={onClose}></div>
                        <Link to='/login' className={emulateButton}>Log in</Link>
                    </div>
                    :
                    <form className={cx(fadeInAnimation(1), container)} onSubmit={onSubmit}>
                        {errors && errors.map((error, index) => <p key={index}>{error}</p>)}

                        <div className={displayFlex}>
                            <h2>Add new episode:</h2>
                            <div className={close} onClick={onClose}></div>
                        </div>
                        <Dropzone
                            className={dropzoneStyle}
                            acceptClassName={dropzoneAccept}
                            rejectClassName={dropzoneReject}
                            onDrop={onDrop}
                            accept='image/*'
                            multiple={false}
                        >
                            {image ?
                                <img className={imageStyle} src={image.preview} alt={image.name} />
                                :
                                <b className={textInDropzone}>Drag your image here</b>}
                        </Dropzone>
                        <input
                            id="title"
                            type="text"
                            className={customInput}
                            value={title}
                            onChange={onChangeFunction('title')}
                            placeholder="Episode title"
                            autoFocus="true"
                        />
                        <div className={displayFlex}>
                            <label
                                htmlFor="season"
                                className={inputLabel}
                            >
                                Season:
                            </label>
                            <select
                                id="season"
                                type="number"
                                className={cx(selectInput, customInput)}
                                value={season}
                                onChange={onChangeFunction('season')}
                            >
                                {
                                    seasonOptions.map((option, index) =>
                                        <option key={index} value={option}>{option}</option>
                                    )
                                }
                            </select>
                            <label
                                htmlFor="episodeNumber"
                                className={inputLabel}
                            >
                                Episode:
                            </label>
                            <select
                                id="episodeNumber"
                                type="number"
                                className={cx(selectInput, customInput)}
                                value={episodeNumber}
                                onChange={onChangeFunction('episodeNumber')}
                            >
                                {
                                    episodeOptions.map((option, index) =>
                                        <option key={index} value={option}>{option}</option>
                                    )
                                }
                            </select>
                        </div>
                        <textarea
                            id="description"
                            type="text"
                            className={cx(_textAreaStyle, customTextArea)}
                            value={description}
                            onChange={onChangeFunction('description')}
                            placeholder="Episode description"
                        />

                        <ButtonComponent
                            type="submit"
                            text="ADD EPISODE"
                            justifySelf="center"
                            disabled={!image || !title || !description}
                        />
                    </form>
                }
            </div>
        );
    }
}
