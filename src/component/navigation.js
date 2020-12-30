import React from 'react';
import Scrollspy from 'react-scrollspy';

const Navigation = (props) => {
    return (
        <nav className="mb-auto fixed-top container navbar">
            <h3 className="float-md-start mb-0 firm">Behrend Data</h3>
            <Scrollspy
                className="nav nav-masthead justify-content-center float-md-end"
                items={['home', 'about', 'contact', 'CV']}
                currentClassName="active"
            >
                {props.items.map((obj) => {
                    return (
                        <a className="nav-link" href={'#' + obj.hashValue}>
                            {obj.name}
                        </a>
                    );
                })}
            </Scrollspy>
        </nav>
    );
};

export default Navigation;
