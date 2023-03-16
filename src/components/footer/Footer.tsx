import { useState } from "react";
import '../footer/Footer.scss';
import {AiFillLinkedin, AiFillGithub} from 'react-icons/ai';
import {MdEmail} from 'react-icons/md';

const Footer = () => {
    return (
        <div className="footer">
            <p className="footer__text">
                Hit me up!
            </p>
            <div className="social">
                <span className="social__icon"><AiFillLinkedin></AiFillLinkedin></span>
                <span className="social__icon"><AiFillGithub></AiFillGithub></span>
                <span className="social__icon"><MdEmail></MdEmail></span>
            </div>
        </div>

    );

}

export default Footer;