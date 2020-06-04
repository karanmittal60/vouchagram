import React from 'react';
import hdfcLogo from './../../assets/images/hdfc-logo.png'
import smartBuyLogo from './../../assets/images/smart-buy-logo.png'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="header-wrapper">
            <div className="container mb-4">
                <div className="row">
                    <div className="col-md-4 d-sm-none d-md-block">
                        <div className="row">
                            <div className="col-6 HDFC-logoDiv">
                                <a href="https://www.hdfcbank.com/"
                                   target="_blank"
                                   rel="noreferrer">
                                    <img src={hdfcLogo}
                                         alt="HDFC Bank"
                                         className="HDFC-logo"/>
                                </a>
                            </div>
                            <div className="col-6">
                                <a href="https://offers.smartbuy.hdfcbank.com"
                                   rel="noreferrer">
                                    <img src={smartBuyLogo}
                                         alt="Smart Buy"
                                         className="Smart-logo"/>
                                </a>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="row">
                            <div className="col-6 search-wrapper">
                                <input
                                    type="text"
                                    className="search-input"
                                    placeholder="Search for your favourite brands!"
                                />
                            </div>
                            <div className="col-3 help-number">
                                <p>Want help with your Gift Vouchers?</p>
                                <p>Call @ 18001033313/ 7840089420 </p>
                            </div>
                            <div className="col-3">
                                <div className="row route-links">
                                    <div className="col-6">
                                        <Link to="/home" >HOME</Link>
                                    </div>
                                    <div className="col-6">
                                        <Link to="/contact" >CONTACT</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;