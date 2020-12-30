import './App.css';
import portrait from './me.jpg';
import Scrollspy from 'react-scrollspy';

function App() {
    return (
        <div className="app">
            <div className="container d-flex w-100 h-100 p-3 mx-auto flex-column">
                <nav className="mb-auto fixed-top container navbar">
                    <h3 className="float-md-start mb-0 firm">Behrend Data</h3>
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
                        <a className="nav-link" href="#cv">
                            CV.
                        </a>
                    </Scrollspy>
                </nav>
                <section className="max-height main-section" id="home">
                    <h1>Cover your page.</h1>
                    <p className="lead">
                        Cover is a one-page template for building simple and beautiful home pages. Download, edit the
                        text, and add your own fullscreen background photo to make it your own.
                    </p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                            Learn more
                        </a>
                    </p>
                </section>
                <section className="max-height main-section" id="about">
                    <h1>About</h1>
                    <img src={portrait} className="portrait" alt="me" />
                    <p className="lead">
                        Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She
                        cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.
                        Felicity now law securing breeding likewise extended and. Roused either who favour why ham.{' '}
                    </p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                            Learn more
                        </a>
                    </p>
                </section>
                <section className="max-height main-section" id="contact">
                    <h1>Contact</h1>
                    <p className="lead">
                        Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She
                        cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.
                        Felicity now law securing breeding likewise extended and. Roused either who favour why ham.{' '}
                    </p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                            Learn more
                        </a>
                    </p>
                </section>
                <section className="max-height main-section" id="cv">
                    <h1>CV.</h1>
                    <img src={portrait} className="portrait" alt="me" />
                    <p className="lead">
                        Article nor prepare chicken you him now. Shy merits say advice ten before lovers innate add. She
                        cordially behaviour can attempted estimable. Trees delay fancy noise manor do as an small.
                        Felicity now law securing breeding likewise extended and. Roused either who favour why ham.{' '}
                    </p>
                    <p className="lead">
                        <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-white">
                            Learn more
                        </a>
                    </p>
                </section>
            </div>
        </div>
    );
}

export default App;
