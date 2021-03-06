import React from "react";
import style from "./Main.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import avatar from "../common/img/avatar.jpg"
import SectionHeader from "../common/setionHeader/SectionHeader";
import Fade from "react-reveal/Fade";


function Main() {
    return (
        <section id={'main'} className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.aboutContainer}`}>
                <div className={style.aboutHeader}>
                    <Fade top>
                        <div className={style.myPhoto}>
                            <img src={avatar} alt="avatar"/>
                        </div>
                    </Fade>
                    <SectionHeader header={'Dmitry Sukhinov'} withoutMargin={true}/>
                    <p>Front-end Developer</p>
                </div>
                <div className={style.aboutMain}>
                    <Fade right>
                        <div className={style.personalInfo}>
                            <div className={style.header}>
                                <h3 className={style.title}>Personal Info</h3>
                                <div className={style.separator}></div>
                            </div>
                            <p>Name: Dmitry Sukhinov</p>
                            <p>Age: 20</p>
                            <p>Location: Minsk, Belarus</p>
                            <p>E-mail: dmitriysukhinov@gmail.com</p>
                            <p>Phone: +375336294585</p>

                        </div>
                    </Fade>
                    <Fade left>
                        <div className={style.aboutMe}>
                            <SectionHeader header={'About Me'} itemHeader={true}/>
                            <div>
                                <p>Hello, I am a person who has a strong passion for
                                    programming.</p>
                                <p>I have experience in creating SPA
                                    with React/Redux/TypeScript.</p>
                                <p>Now I am improving my skills in this direction
                                    and expanding them with new technologies.</p>
                                <p>I'm planing to study Node.js because my next goal
                                    is to become a Full-Stack Developer.</p>
                                <p>I spend my leisure time with
                                    educational books and also improving my
                                    English.</p>
                            </div>
                        </div>
                    </Fade>

                </div>
            </div>
        </section>
    )
}

export default Main;
