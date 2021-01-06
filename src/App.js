import './App.css';
import React from 'react';
import Link from './components/link';
import About from './sections/about';
import Home from './sections/home';
import Contact from './sections/contact';
// import Cv from './sections/cv';
import LinkedinLogo from './linkedin-logo.png';

function App() {
    const openMyProfile = () => {
        window.open('https://www.linkedin.com/in/flemming-behrend-405309a');
    };

    const activate = (el) => {
        const hash = el?.nativeEvent?.target?.hash;
        console.log(hash);
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
                                <Link className="nav-link" href="#home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about" onClick={activate}>
                                    About
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact" onClick={activate}>
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
