import React from 'react'
import Title from '../Components/Title'
import ContactItem from '../Components/ContactItem'
import emailme from '../img/emailme.svg';
import location from '../img/location.svg';
function ContactPage() {
    return (
        <div>
        <div className="c-title">
            <Title title={'Contact Me'} span={'Contact Me'} />
            </div>
        <div className="ContactPage">
            
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d896374.8258205015!2d76.53408792839379!3d28.645817491624534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1615457782353!5m2!1sen!2sin" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy"></iframe>
            </div>
            <div className="contact-sect">
                <ContactItem icon={emailme} text1={'akshitawaldia7@gmail.com'} title={'Email'}/>
                <ContactItem icon={location} text1={'Delhi, India'} title={'Location'}/>
            </div>
        </div>
        </div>
    )
}

export default ContactPage;
