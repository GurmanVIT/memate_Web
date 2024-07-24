import React from 'react';
import memate from "../../assets/img/memate.svg";
import facebook_icon from "../../assets/img/facebook_icon.svg";
import instagram_icon from "../../assets/img/instagram_icon.svg";
import linkedin_icon from "../../assets/img/linkedin_icon.svg";
import { Link } from 'react-router-dom';
import app_store from "../../assets/img/app_store.svg";
import google_play from "../../assets/img/google_play.svg";
import mac_app_store from "../../assets/img/mac_app_store.svg";
import microsoft from "../../assets/img/microsoft.svg";

const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-column">
                    <div className='footer_between_column'>
                        <div className="download-links">
                            <div className='flex_img_content'>
                                <a href="#"><img src={memate} alt="App Store" /></a>
                                <span>DOWN TO BUSINESS</span>
                            </div>

                            <p>Business Management Software</p>

                            <div className='connect_imgs'>
                                <h5>Connect</h5>
                                <div className='icon_flex'>
                                    <img src={facebook_icon} alt='facebook_icon' />
                                    <img src={instagram_icon} alt='instagram_icon' />
                                    <img src={linkedin_icon} alt='linkedin_icon' />
                                </div>
                            </div>
                            <div className='download_app'>
                                <h5>Download</h5>
                                <div className='download_img_flex'>
                                    <div className='img_flex'>
                                        <Link to="/"><img src={app_store} alt="Google Play" /></Link>
                                        <Link to="/"><img src={mac_app_store} alt="Mac App Store" /></Link>
                                    </div>
                                    <div className='img_flex'>
                                        <Link to="/"><img src={google_play} alt="Mac App Store" /></Link>
                                        <Link to="/"><img src={microsoft} alt="Microsoft Store" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <p>&copy; MeMate 2024</p>
                            <p>theAd | Web Design Company in Sydney</p>
                        </div>
                    </div>
                </div>

                <div className='flex_column'>
                    <div className="footer-column">
                        <h3>Company</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Business Software</h3>
                        <ul>
                            <li><a href="#">Plans and Pricing</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Industries</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex_column'>
                    <div className="footer-column">
                        <h3>Features</h3>
                        <ul>
                            <li><a href="#">Client Management</a></li>
                            <li><a href="#">Supplier Management</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Project Management</a></li>
                            <li><a href="#">Communication</a></li>
                            <li><a href="#">Scheduling</a></li>
                            <li><a href="#">Invoicing</a></li>
                            <li><a href="#">Statistic</a></li>
                            <li><a href="#">Reports</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Industries</h3>
                        <ul>
                            <li><a href="#">Creative Agencies</a></li>
                            <li><a href="#">Electronic Repair Specialists</a></li>
                            <li><a href="#">Photo & Video Agency</a></li>
                            <li><a href="#">Automotive</a></li>
                            <li><a href="#">Startups</a></li>
                            <li><a href="#">Construction</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex_column'>
                    <div className="footer-column">
                        <h3>Resources & Tools</h3>
                        <ul>
                            <li><a href="#">Customer Stories</a></li>
                            <li><a href="#">Supplier Database</a></li>
                            <li><a href="#">Sitemap</a></li>
                            <li><a href="#">Book a Demo</a></li>
                            <li><a href="#">My Account</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Compare</h3>
                        <ul>
                            <li><a href="#">MeMate vs QuickBooks</a></li>
                            <li><a href="#">MeMate vs Myob</a></li>
                            <li><a href="#">MeMate vs Jira</a></li>
                            <li><a href="#">MeMate vs Monday</a></li>
                            <li><a href="#">MeMate vs Trello</a></li>
                            <li><a href="#">MeMate vs SalesForce</a></li>
                            <li><a href="#">MeMate vs Airtable</a></li>
                            <li><a href="#">MeMate vs Wrike</a></li>
                            <li><a href="#">MeMate vs ServiceM8</a></li>
                            <li><a href="#">MeMate vs Reckon</a></li>
                            <li><a href="#">MeMate vs Xero</a></li>
                            <li><a href="#">MeMate vs ms Project</a></li>
                            <li><a href="#">MeMate vs Sage</a></li>
                            <li><a href="#">MeMate vs NetSuite</a></li>
                        </ul>
                    </div>
                </div>

                <div className='flex_column'>
                    <div className="footer-column">
                        <h3>Legal</h3>
                        <ul>
                            <li><a href="#">Terms And Conditions</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Website Terms of Use</a></li>
                            <li><a href="#">Security</a></li>
                            <li><a href="#">Legal</a></li>
                        </ul>
                    </div>
                    <div className="footer-column">
                        <h3>Support</h3>
                        <ul>
                            <li><a href="#">Contact us</a></li>
                            <li><a href="#">Delete Request</a></li>
                            <li><a href="#">Software Update</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;