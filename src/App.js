import './App.scss'
import Header from "./header/Header"
import Main from "./main/Main"
import Skills from "./skills/Skills"
import Projects from "./projects/Projects"
import Footer from "./footer/Footer"
import Preview from "./preview/Preview"
import ModalArrow from "./modalArrow/ModalArrow"
import Links from "./links/Links"

function App() {
    return (
        <div className="App">
            <ModalArrow/>
            <Header/>
            <Preview/>
            <Main/>
            <Skills/>
            <Projects/>
            <Links/>
            <Footer/>
        </div>
    );
}

export default App
