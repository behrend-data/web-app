import React from 'react';
import Portrait from './../me.jpg';

const About = () => {
    return (
        <div class="container d-flex p-2 flex-column home">
            <div className="page-header align-center">
                <img src={Portrait} className="portrait" alt="me" />
            </div>
            <div className="flex-column">
                <div className="page-text align-center">
                    My name is <b>Flemming Behrend</b>, I am an independent software consultant with over 20 years of
                    expirience in the field.
                </div>
                <div className="page-text align-center">
                    The last 10 years I have worked in agile teams, implementing a wide variety of solutions.
                </div>
                <div className="page-text align-center">
                    I have created applications where I have build domain models using <b>Domain Driven Design</b> and{' '}
                    <b>Hibernate</b> but also architeted solutions in the cloud using <b>Microservices</b> and{' '}
                    <b>Microfrontends</b>.
                </div>
                <div className="page-text align-center">
                    I have always seen <b>DevOps</b> as part of a developers job and have a strong skillset in that
                    field aswell.
                </div>
            </div>
        </div>
    );
};

export default About;
