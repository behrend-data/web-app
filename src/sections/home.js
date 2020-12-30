import React from 'react';

const Home = () => {
    return (
        <div class="container d-flex p-2 flex-row home">
            <div className="page-heading">SOFTWARE CONSULTANT WITH A VARIETY OF SKILLS</div>
            <div className="flex-column">
                <div className="page-text">
                    Provide consulting services that help companies build software in the cloud or on-premise.
                </div>
                <div className="page-text">
                    Expert within the fields of <b>AWS</b>, <b>Serverless</b>, <b>Microservices</b>, <b>DevOps</b>,
                    <b>GitHub</b>, <b>Web development</b>, <b>API management</b> and more.
                </div>
                <div className="page-text">
                    Excels in <b>Software architecture</b> and <b>development</b> with the <b>NodeJS stack</b> and{' '}
                    <b>Java</b> platform.
                </div>
            </div>
        </div>
    );
};

export default Home;
