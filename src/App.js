import './App.css';
import Scrollspy from 'react-scrollspy';
import React from 'react';
import About from './sections/about';
import Home from './sections/home';
import Contact from './sections/contact';
// import Cv from './sections/cv';
import LinkedinLogo from './linkedin-logo.png';

function App() {
    const openMyProfile = () => {
        window.open('https://www.linkedin.com/in/flemming-behrend-405309a');
    };
    return (
        <div className="app">
            <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <nav className="mb-auto fixed-top container navbar">
                    <h3 className="float-md-start mb-0 firm">BEHREND DATA</h3>
                    <Scrollspy
                        className="nav nav-masthead justify-content-center float-md-end"
                        items={['home', 'about', 'contact', 'cv']}
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
                        {/* <a className="nav-link" href="#cv">
                            CV.
                        </a> */}
                        <img
                            src={LinkedinLogo}
                            alt="my linkedin profile"
                            className="linkedin"
                            onClick={openMyProfile}
                        />
                    </Scrollspy>
                </nav>
                <section className="max-height main-section" id="home">
                    <Home></Home>
                </section>
                <section className="max-height main-section" id="about">
                    <About></About>
                </section>
                <section className="max-height main-section" id="contact">
                    <Contact></Contact>
                </section>
                {/* <section className="max-height main-section" id="cv">
                    <Cv></Cv>
                </section> */}
            </div>
        </div>
    );
}

export default App;
