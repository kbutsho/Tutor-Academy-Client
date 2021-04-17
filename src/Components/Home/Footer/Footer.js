import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {

    const ourAddress = [
        {name: "Bashundhara R/A" , link: "https://www.google.com/maps"},
        {name: "Narail,Lohagara" , link: "https://www.google.com/maps"},
       
    ]
    const Links = [
        {name: "Tutor Academy" , link: "/"},
        {name: "Dashboard" , link: "/dashboard"},
        {name: "login" , link: "/login"},
        {name: "Contact Us" , link: "/"},
        {name: "Our services" , link: "/"}
    ]
    const services = [
        {name: "Tutor Academy" , link: "/"},
        {name: "Contact Us" , link: "/"},
        {name: "Our Tutors" , link: "/"},
        {name: "Special Service" , link: "/"},
        {name: "Why We Special" , link: "/"}
    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={2} menuTitle="Links" menuItems={Links}/>
                    <FooterCol key={3} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call Us</h6>
                            <button className="btn btn-primary">+8801749555864</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved by KB UTSHO</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;