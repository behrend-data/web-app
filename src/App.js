import './App.css';
import React, { useState } from 'react';
import About from './sections/about';
import Home from './sections/home';
import Contact from './sections/contact';
// import Cv from './sections/cv';
import LinkedinLogo from './linkedin-logo.png';

function App() {
    const [homeActive, setHomeActive] = useState(true);
    const [aboutActive, setAboutActive] = useState(false);
    const [contactActive, setContactActive] = useState(false);

    const openMyProfile = () => {
        window.open('https://www.linkedin.com/in/flemming-behrend-405309a');
    };

    const activate = (name) => {
        switch (name) {
            case 'home':
                setHomeActive(true);
                setAboutActive(false);
                setContactActive(false);
                break;
            case 'about':
                setHomeActive(false);
                setAboutActive(true);
                setContactActive(false);
                break;
            case 'contact':
                setHomeActive(false);
                setAboutActive(false);
                setContactActive(true);
                break;
        }
    };

    return (
        <div>
            <nav className="mb-auto fixed-top container">
                <div className="row">
                    <div className="col-8 firm">
                        <b>BEHREND</b> DATA
                    </div>
                    <div className="col-4">
                        <ul className="nav navbar">
                            <li className="nav-item">
                                <a
                                    className={`${homeActive ? 'active' : ''} nav-link`}
                                    href="#home"
                                    onClick={() => activate('home')}
                                >
                                    Home
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`${aboutActive ? 'active' : ''} nav-link`}
                                    active={aboutActive}
                                    href="#about"
                                    onClick={() => activate('about')}
                                >
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a
                                    className={`${contactActive ? 'active' : ''} nav-link`}
                                    active={contactActive}
                                    href="#contact"
                                    onClick={() => activate('contact')}
                                >
                                    Contact
                                </a>
                            </li>
                            <img
                                src={LinkedinLogo}
                                alt="my linkedin profile"
                                className="linkedin"
                                onClick={openMyProfile}
                            />
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <div className="max-height main-section" id="home">
                    <Home></Home>
                </div>
                <div className="max-height main-section" id="about">
                    <About></About>
                </div>
                <div className="max-height main-section" id="contact">
                    <Contact></Contact>
                </div>
                {/* <section className="max-height main-section" id="cv">
                    <Cv></Cv>
                </section> */}
            </div>
        </div>
    );
}

export default App;
