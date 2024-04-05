import React from 'react';
import { FaFacebook, FaTwitter , FaInstagram, FaLinkedin, FaTwitch } from "react-icons/fa";

export default function footer() {
    return (
        <section className="footer3 cid-u65eFhRSHi mt-5" once="footers" id="footer-3-u65eFhRSHi">
            <div className="container">
                <div className="row">
                    <div className="row-links">
                        <ul className="header-menu">
                            <li className="header-menu-item mbr-fonts-style display-5 animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                <a href="/" className="text-decoration-none">About</a>
                            </li>
                            <li className="header-menu-item mbr-fonts-style display-5 animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                <a href="/" className="text-decoration-none">Donate</a>
                            </li>
                            <li className="header-menu-item mbr-fonts-style display-5 animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                <a href="/" className="text-decoration-none">Connect</a>
                            </li>
                            <li className="header-menu-item mbr-fonts-style display-5 animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                <a href="/" className="text-decoration-none scale-50 ">FAQ</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-12 mt-4">
                        <div className="social-row">
                            <div className="soc-item">
                                <a href="/" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                    <span className="mbr-iconfont socicon socicon-facebook display-7"><FaFacebook/></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="/" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                    <span className="mbr-iconfont socicon-twitter socicon"><FaTwitter/></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="/" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                    <span className="mbr-iconfont socicon-instagram socicon"><FaInstagram/></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="/" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                    <span className="mbr-iconfont socicon socicon-linkedin"><FaLinkedin/></span>
                                </a>
                            </div>
                            <div className="soc-item">
                                <a href="/" target="_blank" className="animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                                    <span className="mbr-iconfont socicon socicon-twitch"><FaTwitch/></span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 mt-5">
                        <p className="mbr-fonts-style copyright display-7 animate__animated animate__delay-1s animate__fadeIn text-decoration-none">
                            © 2024 RaktDaan. All Rights Reserved.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
