import React from 'react';
import Scrollspy from 'react-scrollspy';
import ScrollSpyLink from './../component/scroll-spy-link';
// {props.items.map((value) => {
//     return <ScrollSpyLink name={value}></ScrollSpyLink>;
// })}

const Navigation = (props) => {
    return (
        <nav className="mb-auto fixed-top container navbar">
            <h3 className="float-md-start mb-0 firm">Behrend Data</h3>
            <Scrollspy
                className="nav nav-masthead justify-content-center float-md-end"
                items={['home', 'about', 'contact', 'CV']}
                currentClassName="active"
            >
                <a className="nav-link" href="#home">
                    Home
                </a>
                <a className="nav-link" href="#about">
                    About
                </a>
                <a className="nav-link" href="#contact">
                    Contact
                </a>
                <a className="nav-link" href="#cv">
                    CV.
                </a>
            </Scrollspy>
        </nav>
    );
};

export default Navigation;
