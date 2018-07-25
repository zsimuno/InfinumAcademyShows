import React, { Component } from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';
import { HeaderContainer } from '../containers/HeaderContainer'
import { emulateButton } from '../style';


@observer
export class LoginRequiredComponent extends Component {
    render() {
        return (
            <div>
             <HeaderContainer hideLogin={true} hideLine={true} />
             <h2>
                 You must be logged in to do this!
             </h2>  
             <Link to='/login' className={emulateButton}>Log in</Link>
            </div>
        )
    }
}
