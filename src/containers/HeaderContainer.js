import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { HeaderComponent } from '../components/HeaderComponent';

@inject("state")
@observer
export class HeaderContainer extends Component {

    render() {
        const { hideLogin, hideLine } = this.props;
        return (
            <div>
                <HeaderComponent
                    hideLogin={hideLogin}
                    hideLine={hideLine}
                    username={this.props.state.getUsername}
                    logout={this.props.state._logout}
                />
            </div>

        )
    }
}
