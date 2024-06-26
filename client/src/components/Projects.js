import '../index.css';
import SpareSeat from '../images/SpareSeat.png';
import EasyEats from '../images/EasyEats.png'

function Projects() {
    return(
        <div>
            <h2 className = "title--centre" id = "Projects">Projects</h2>
            <div className="main-projects-container">
                <div className ="projects--container">
                    <img src={SpareSeat} alt="SpareSeat project homepage" className = "projects--images"/>
                        <div className = "projects--description">
                            <h4>Description</h4>
                                <p>Project built over 2 weeks in a group of 3, offering a new marketplace to buy and exchange football tickets.</p>
                            <h4>Tech stack</h4>
                                <div className = "projects--tech-stack">
                                    <ul className = "projects--tech-stack-list">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>Ruby</li>
                                        <li>Javascript</li>
                                    </ul>
                                    <a href="https://github.com/andreibadea7/SpareSeat" target="_blank" rel="noreferrer"><button className = "projects--button">Code repository</button></a>
                                    </div>
                            </div> 
                            
                </div>

                <div className ="projects--container">
                    <img src={EasyEats} alt="EasyEats project homepage" className = "projects--images"/>
                        <div className = "projects--description">
                            <h4>Description</h4>
                                <p>Application to help users easily find restaurants in their local area. </p>
                                <p>Live site link: <a href="https://easy-eats.onrender.com/" target="_blank" rel="noreferrer">https://easy-eats.onrender.com</a></p>
                            <h4>Tech stack</h4>
                                <div className = "projects--tech-stack">
                                    <ul className = "projects--tech-stack-list">
                                        <li>HTML</li>
                                        <li>CSS</li>
                                        <li>React</li>
                                        <li>Node</li>
                                        <li>MySQL</li>
                                    </ul>
                                    <a href="https://github.com/Treecey98/Restaurant-App" target="_blank" rel="noreferrer"><button className = "projects--button">Code repository</button></a>
                                </div>
                            </div> 
                            
                </div> 
            </div>       
        </div>
    )
}

export default Projects;