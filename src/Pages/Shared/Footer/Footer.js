import React from 'react';
import { Link } from 'react-router-dom';
import footer from '../../../assets/images/footer.png'
const Footer = () => {
    return (
        <footer className="pt-20 mt-16"
            style={{
                background: `url(${footer})`,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: ' center'
            }}
        >
            <div className='footer xl:gap-96 md:gap-60 sm:gap-60 px-10'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link className="link link-hover">Emergency Checkup</Link>
                    <Link className="link link-hover">Monthly Checkup</Link>
                    <Link className="link link-hover">Weekly Checkup</Link>
                    <Link className="link link-hover">Deep Checkup</Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link className="link link-hover">Fluoride Treatment</Link>
                    <Link className="link link-hover">Cavity Filling</Link>
                    <Link className="link link-hover">Teath Whitening</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <Link className="link link-hover">New York - 101010 Hudson</Link>
                </div>
            </div>
            <div className='text-center pb-11 pt-14'>
                <p>Copyright 2022 All Right Reserved</p>
            </div>
        </footer>

    );
};

export default Footer;