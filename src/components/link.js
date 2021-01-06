import React, { useState } from 'react';

const Link = (props) => {
    const [active, setActive] = useState('');
    console.log(active);

    const anchor = (
        <a className={`${active} ${props.className}`} href={props.href} onClick={() => setActive('active')}>
            {props.children}
        </a>
    );

    return anchor;
};

export default Link;
