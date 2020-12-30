import './App.css';
import portrait from './me.jpg';
import Navigation from './container/navigation';
import React, { useState } from 'react';

function App() {
    const [items, setItems] = useState(['home', 'about', 'contact', 'CV']);

    return (
        <div className="app">
            <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <Navigation items={items}></Navigation>
                <section className="max-height main-section" id="home">
                    <h1>Cover your page.</h1>
                    <p className="lead">
                        Cover is a one-page template for building simple and beautiful home pages. Download, edit the
                        text, and add your own fullscreen background photo to make it your own.
                    </p>
                    <p className="lead">fdsfdsfdsfsdfs</p>
                </section>
                <section className="max-height main-section" id="about">
                    <h1>About</h1>
                    <img src={portrait} className="portrait" alt="me" />
                    <p className="lead">
                        Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She
                        cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.
                        Felicity now law securing breeding likewise extended and. Roused either who favour why ham.{' '}
                    </p>
                    <p className="lead">fdsfdsfdsfds</p>
                </section>
                <section className="max-height main-section" id="contact">
                    <h1>Contact</h1>
                    <p className="lead">
                        Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She
                        cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.
                        Felicity now law securing breeding likewise extended and. Roused either who favour why ham.{' '}
                    </p>
                    <p className="lead">dsfdsfdsfdsf</p>
                </section>
                <section className="max-height main-section" id="cv">
                    <h1>CV.</h1>
                    <img src={portrait} className="portrait" alt="me" />
                    <p className="lead">
                        Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She
                        cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.
                        Felicity now law securing breeding likewise extended and. Roused either who favour why ham.{' '}
                    </p>
                    <p className="lead">fddsfdsfdsfs</p>
                </section>
            </div>
        </div>
    );
}

export default App;
