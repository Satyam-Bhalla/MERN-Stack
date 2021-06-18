import React, { Component } from 'react';

class Navbar extends Component {
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand">Navbar</a>
                <span>{this.props.totalCounters}</span>
            </nav>
         );
    }
}
 
export default Navbar;