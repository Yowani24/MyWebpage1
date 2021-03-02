import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="container footer_box">
                <h3>Copyright  &copy;  2021</h3>
                <div className="contacts">
                    <h3 className="mynumber"><FaWhatsapp className="whatsapp_icon"/> +55 21 969 712 168</h3>
                    <div className="social_networks">
                        <div ><FaFacebookF className="social_network_icon facebook_icon"/></div>
                        <div ><FaInstagram className="social_network_icon instagram_icon"/></div>
                        <div ><FaTwitter className="social_network_icon twitter_icon"/></div>
                        <div ><FaLinkedin className="social_network_icon linkedin_icon"/></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
