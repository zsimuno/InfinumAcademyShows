import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { css } from 'emotion';

@observer
export class LineComponent extends Component{
    render() {
        const { widthToEnd } = this.props;
        const line = css`
            border: 0;
            height: 0;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(255, 255, 255, 0.3); 
            ${ widthToEnd && `margin-left: -20%; margin-right: -20%;`}   
        `;
        return (
            <hr className={line} />
        );
    }
}
