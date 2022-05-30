import React from "react";
import style from "./Projects.module.scss"
import styleContainer from "../common/styles/Container.module.scss"
import Project from "./project/Project";
import SectionHeader from "../common/setionHeader/SectionHeader";
import todolistPreview from "../common/img/todolistPreview.png";
import cardsPreview from "../common/img/cardsApp.jpg";
import Fade from "react-reveal/Fade";

function Projects() {

    const todoList = {
        backgroundImage: `url(${todolistPreview})`,
    }
    const weatherApp = {
        backgroundImage: `url(${cardsPreview})`,
    }

    return (
        <section id={'projects'}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Fade top>
                    <SectionHeader header={'My Projects'}/>
                </Fade>
                <div className={style.projects}>
                    <Fade left>
                        <Project
                            style={todoList}
                            projectName={'Todolist'}
                            description={'Complex project that using React-hooks, Redux, Axios and Rest API'}
                            projectLink={'https://dimasukhinov.github.io/todolist/'}/>
                    </Fade>
                    <Fade right>
                        <Project
                            style={weatherApp}
                            projectName={'Weather App'}
                            description={'SPA for learning. Allows creating and editing your own card packs and cards. Using simple smart random for learning. Created by group of developers'}
                            projectLink={'https://dimasukhinov.github.io/weather-app/'}/>
                    </Fade>
                </div>
            </div>
        </section>
    )
}

export default Projects;
