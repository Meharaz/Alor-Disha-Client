import React from 'react';
import logo from '../../../assets/Common/logo.svg'
const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <aside>
                   <img src={logo} alt="" />
                    <p><span className='text-xl font-bold'>Alor Disha Foundation</span><br />Providing humanitarian service since 2024</p>
                </aside>
                <nav>
                    <header className="footer-title">Services</header>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <header className="footer-title">Company</header>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <header className="footer-title">Legal</header>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside>
                    <p className='text-xl'>Copyright © 2025 Alor Disha Foundation - All rights reserved.</p>
                    <p>Desing & Developed By _ <span className='text-green-700 font-bold'>KloudCore Solution</span></p>
                </aside>
            </footer>

        </div>
    );
};

export default Footer;