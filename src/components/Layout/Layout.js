import React, { Component } from 'react';
import Aux from '../../hoc/Auxx';

import Classes from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

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