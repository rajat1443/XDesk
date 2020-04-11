import React from 'react';
import { headerView as HeaderView } from '../views/headerView';
import { sidebarView as SidebarView } from '../views/sidebarView';

export const userHasLogin = ( WrapperView ) => {
    return class UserHasLogin extends React.Component{

        constructor( props ) {
            super( props );
        }

        onClickLogout = () => {
            window.localStorage.removeItem('_token');
            this.props.history.push('/');
        }

        componentDidMount() {
            const token = window.localStorage.getItem('_token');
            if (token == null) {
                this.props.history.push('/');
            }
        }
        
        render() {
            return(
                <div className="TicketListContainer">
                    <HeaderView 
                        onClickLogout={ this.onClickLogout }
                    />
                    <div className="bottom-container">
                        <SidebarView />
                        <WrapperView { ...this.props } />
                    </div>
                </div>
            );
        }

    }
}