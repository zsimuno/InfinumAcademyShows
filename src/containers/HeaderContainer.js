import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import { HeaderComponent } from '../components/HeaderComponent';
import { action } from 'mobx';

@inject("state")
@observer
export class HeaderContainer extends Component {

    @action.bound
    _logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.props.state.username = null;
        this.props.state.token = null;
        this.props.history.push('/');

    }

    render() {
        const { hideLogin, hideLine } = this.props;
        return (
            <div>
                <HeaderComponent
                    hideLogin={hideLogin}
                    hideLine={hideLine}
                    username={this.props.state.getUsername}
                    logout={this._logout}
                />
            </div>

        )
    }
}
