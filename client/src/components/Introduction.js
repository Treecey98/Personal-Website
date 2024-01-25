import Photo from '../images/headshot.jpg';
import '../index.css';

function Introduction() {
    return(
        <div className = "introduction--container" id = "Introduction">
            <div className = "introduction--center-items">
            <img className = "introduction--image" src={Photo} alt="Headshot"/>
            <h2>Introduction</h2>
            </div>
                <p>Hi! I'm Ed and this is my personal page. I am a frontend developer in the early stages of my career.
                    I am a keen learner looking to expand my knowledge of web development as much as possible, which is why I decided to build this webage.
                    Outside of coding I am an active person and I enjoy hockey, golf and running.
                </p>
        </div>
    )
}

export default Introduction;