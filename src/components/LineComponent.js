import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css, cx } from 'emotion';

const line = css`
    border: 0;
    height: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(255, 255, 255, 0.3); 
`;

const lineToEnd = (widthToEnd) => css`
    ${ widthToEnd && `margin-left: -10%; margin-right: -10%;`}   
`;

@observer
export class LineComponent extends Component {
    render() {
        const { widthToEnd } = this.props;

        return (
            <hr className={cx(lineToEnd(widthToEnd), line)} />
        );
    }
}
