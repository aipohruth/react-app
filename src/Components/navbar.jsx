import React, { Component } from 'react';

//stateless functional components
const NavBar = ({totalCounters})=>{ //destructuring
    console.log('NavBar - Rendered')
    return (
        <nav className="navbar navbar-light bg-light">
        <a className="navbar-brand" href="#navbar">
            NavBar {" "} 
        <span className="badge badge-pill badge-secondary">
        {totalCounters}</span>
        </a>
        </nav>
    );
};


export default NavBar;


//preference you can use the class component you wont pass the props