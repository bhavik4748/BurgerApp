import React, { Component } from 'react';
import Aux from '../Auxx/Auxx';

import Classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
    state = {
        showSideDrawer: false
    }

    sideDrawerClosedHandler = () => {
        this.setState({ showSideDrawer: false });
    }

    MenuClickedHandler = () => {
        const t = this.state.showSideDrawer;
        this.setState({ showSideDrawer: !t });
    }

    render() {
        return (
            <Aux>
                <Toolbar MenuClick={this.MenuClickedHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler} />
                <main className={Classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}



export default Layout;