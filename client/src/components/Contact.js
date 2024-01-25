import '../index.css';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

function Contacts() {
    return(
        <div>
            <h2 className = "title--centre" id = "Contacts">Connect with me on</h2>
            <div className = "contacts--background">
                <ul className = "contacts--icons">
                    <a href="https://github.com/Treecey98" target="_blank" rel="noreferrer"><li><GitHubIcon style={{ fontSize: 60}}>Filled</GitHubIcon></li></a>
                    <a href="https://www.linkedin.com/in/edward-treece/" target="_blank" rel="noreferrer"><li><LinkedInIcon style={{ fontSize: 60}}>Filled</LinkedInIcon></li></a>
                    <a href="https://www.facebook.com/edward.treece" target="_blank" rel="noreferrer"><li><FacebookIcon style={{ fontSize: 60}}>Filled</FacebookIcon></li></a>
                </ul>
            </div>
        </div>
    )
} 

export default Contacts;