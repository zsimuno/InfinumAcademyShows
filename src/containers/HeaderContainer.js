import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { observer, inject } from 'mobx-react';

import { HeaderComponent } from '../components/HeaderComponent';
import { observable, action } from 'mobx';

@inject("state")
@observer
export class HeaderContainer extends Component {

    @observable
    componentState = {
        succesfulLogout: false,
    }

    @action.bound
    _logout() {
        localStorage.clear();
        sessionStorage.clear();
        this.props.state.username = null;
        this.props.state.token = null;
        this.componentState.succesfulLogout = true;

    }

    render() {
        const { hideLogin, hideLine } = this.props;
        return (
            <div>
                {this.componentState.succesfulLogout &&
                    <Redirect to='/' />}
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
