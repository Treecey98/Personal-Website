import React from 'react';
import Introduction from '../components/Introduction'
import Projects from '../components/Projects';
import Blog from '../components/Blog';
import Contact from '../components/Contact.js'

function Home() {
    return(
        <>
            <Introduction />
            <Projects />
            <Blog />
            <Contact />
        </>
    )
}

export default Home;