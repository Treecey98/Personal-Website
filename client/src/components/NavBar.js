import React from 'react';
import { HashLink } from 'react-router-hash-link';
import '../index.css';

function NavBar() {

    return (
        <>
            <div className = "navbar--container"> 
                <ul className = "navbar--list">
                    <li><HashLink smooth to="/#Introduction">Introduction</HashLink></li>
                    <li><HashLink smooth to ="/#Projects">Projects</HashLink></li>
                    <li><HashLink smooth to ="/#Blog">Blog</HashLink></li>
                    <li><HashLink smooth to="/#Contacts">Connect</HashLink></li>
                </ul>
            </div>
        </>
    );
}

export default NavBar; 