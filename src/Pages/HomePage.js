import React from 'react'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> Akshita Waldia</span>
                </h1>
                <p className="h-sub-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eligendi perferendis placeat incidunt modi animi rerum, dolore accusamus architecto magnam voluptatum deleniti exercitationem sint! Aut id doloremque similique veritatis necessitatibus.

                </p>
                <div className="icons">
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh"/>
                    </Link>
                    <Link className="icon-holder">
                        <FontAwesomeIcon icon={faLinkedinIn} className="icon lin"/>
                    </Link>
                </div>

            </header>
        </div>
    )
}

export default HomePage;
