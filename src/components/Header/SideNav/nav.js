import React from 'react';
import SideNav from 'react-simple-sidenav';
import NavItems from './navItems';

const Nav = (props) => {
    return(
        <SideNav 
            showNav={props.showNav}
            onHideNav={props.onHideNav}
            navStyle={{ 
                background:'#3a539b',
                maxWidth: '200px'
            }}
        >
            <div>
               <NavItems/>
            </div>
        </SideNav>
    )
}

export default Nav;