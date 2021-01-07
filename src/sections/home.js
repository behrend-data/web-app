import React from 'react';

const Home = () => {
    return (
        <div className="container d-flex p-2 flex-row home">
            <div className="page-heading align-left">SOFTWARE CONSULTANT WITH A WIDE VARIETY OF SKILLS</div>
            <div className="flex-column">
                <div className="page-text align-right">
                    Provide consulting services that help companies build software in the cloud or on-premise.
                </div>
                <div className="page-text align-right">
                    Expert within the fields of <b>AWS</b>, <b>Serverless</b>, <b>Microservices</b>, <b>DevOps</b>,
                    <b>GitHub</b>, <b>Web development</b>, <b>API management</b> and more.
                </div>
                <div className="page-text align-right">
                    Excels in <b>Software architecture</b> and <b>development</b> with the <b>NodeJS stack</b> and{' '}
                    <b>Java</b> platform.
                </div>
            </div>
        </div>
    );
};

export default Home;
