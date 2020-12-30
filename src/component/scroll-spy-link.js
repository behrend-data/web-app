import React from 'react';

const ScrollSpyLink = (props) => {
    return (
        <a className="nav-link" href={'#' + props.name}>
            {props.name}
        </a>
    );
};

export default ScrollSpyLink;
