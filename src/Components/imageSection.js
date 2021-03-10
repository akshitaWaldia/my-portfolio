import React from 'react'
import about from '../img/about.jpg'
function imageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>I am<span>Akshita Waldia</span></h4>
                <p class="about-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                    Animi numquam illum nulla dolore unde beatae rerum inventore deserunt totam saepe.</p>
            <div className="about-details">
                <div className="left-section">
                    <p>Full Name</p>
                    <p>Age</p>
                    <p>Languages</p>
                    <p>Location</p>
                </div>
                <div className="right-section">
                    <p>:  Akshita Waldia</p>
                    <p>:  20</p>
                    <p>: English, German</p>
                    <p>:  Delhi, India</p>
                </div>
            </div>
            <button className="btn">
                Download CV
            </button>
        </div>
    </div>
    )
}

export default imageSection;
