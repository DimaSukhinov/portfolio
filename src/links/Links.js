import React from 'react';
import style from "./Links.module.scss";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGithub, faLinkedin, faTelegram} from '@fortawesome/free-brands-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import Fade from "react-reveal/Fade";

const Links = () => {
    return (
        <div className={style.linksContainer}>
            <h4>You can find me here:</h4>
            <div className={style.links}>
                <Fade bottom>
                    <a href="https://github.com/DimaSukhinov">
                        <FontAwesomeIcon icon={faGithub}/>
                    </a>
                </Fade>
                <Fade top>
                    <a href="mailto:dmitriysukhinov@gmail.com">
                        <FontAwesomeIcon icon={faEnvelope}/>
                    </a>
                </Fade>
                <Fade bottom>
                    <a href="https://t.me/merkuriy_7">
                        <FontAwesomeIcon icon={faTelegram}/>
                    </a>
                </Fade>
                <Fade top>
                    <a href="https://www.linkedin.com/in/dmitry-sukhinov-7bb10b1b0/">
                        <FontAwesomeIcon icon={faLinkedin}/>
                    </a>
                </Fade>
            </div>
        </div>
    );
};

export default Links;
