import React, {useState} from 'react';
import OwlCarousel from 'react-owl-carousel2';
import 'react-owl-carousel2/lib/styles.css';
import bg_1 from './../../assets/images/bg_1.jpg';
import bg_2 from './../../assets/images/bg_2.jpg';
import {bindActionCreators} from "redux";
import * as CounterActions from "../../actions";
import { connect } from 'react-redux';

const Home = () => {

    const options = {
        items: 1,
        nav: true,
        rewind: true,
        autoplay: true
    };

    const events = {
        onDragged: function(event) {

        },
        onChanged: function(event) {

        }
    };

    const [days, setDays] = useState('');
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [second, setSecond] = useState('');


    function makeTimer() {

        var endTime = new Date("21 December 2019 9:56:00 GMT+01:00");
        endTime = (Date.parse(endTime) / 1000);

        var now = new Date();
        now = (Date.parse(now) / 1000);

        var timeLeft = endTime - now;

        var days = Math.floor(timeLeft / 86400);
        var hours = Math.floor((timeLeft - (days * 86400)) / 3600);
        var minutes = Math.floor((timeLeft - (days * 86400) - (hours * 3600 )) / 60);
        var seconds = Math.floor((timeLeft - (days * 86400) - (hours * 3600) - (minutes * 60)));

        if (hours < "10") { hours = "0" + hours; }
        if (minutes < "10") { minutes = "0" + minutes; }
        if (seconds < "10") { seconds = "0" + seconds; }

        setDays(days)
        setMinutes(minutes)
        setSecond(seconds)
        setHours(hours)
    }

    setInterval(function() { makeTimer(); }, 1000);



    return (
        <div>
            <section id="home-section" className="hero js-fullheight">
                <h3 className="vr"><span>Welcome</span> to MeetUp.</h3>
                <div id="timer" className="text-center">
                    <div className="time" id="days">{days} <br/><span>Days</span></div>
                    <div className="time" id="hours">{hours} <br/> <span>HOURS</span></div>
                    <div className="time" id="minutes">{minutes} <br/> <span>MINUTES</span></div>
                    <div className="time" id="seconds">{second} <br/> <span>SECONDS</span></div>
                </div>

                <OwlCarousel
                    options={options}
                    events={events}
                    className="home-slider owl-carousel js-fullheight"
                >
                    <div className="slider-item js-fullheight">
                        <div className="overlay"></div>
                        <div className="container-fluid px-0">
                            <div
                                className="row d-md-flex no-gutters slider-text js-fullheight align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div className="one-third order-md-last js-fullheight img"
                                     style={{backgroundImage: `url(${bg_1})`}}>
                                    <div className="overlay"></div>
                                </div>
                                <div
                                    className="one-forth js-fullheight d-flex align-items-start align-items-md-center"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text mt-4 mt-md-0 text-left">
                                        <h1 className="mb-4">Annual <span>Conference</span> 2019</h1>
                                        <h2 className="mb-4">November 26-30, 2019 - 08:00am-12:00pm</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary py-3 px-4">Get Ticket</a>
                                            <a href="#" className="btn btn-white py-3 px-4">Watch Video</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="slider-item js-fullheight">
                        <div className="overlay"></div>
                        <div className="container-fluid px-0">
                            <div
                                className="row d-flex no-gutters slider-text js-fullheight align-items-end justify-content-end"
                                data-scrollax-parent="true">
                                <div className="one-third order-md-last js-fullheight img"
                                     style={{backgroundImage: `url(${bg_2})`}}>
                                    <div className="overlay"></div>
                                </div>
                                <div
                                    className="one-forth js-fullheight d-flex align-items-start align-items-md-center"
                                    data-scrollax=" properties: { translateY: '70%' }">
                                    <div className="text mt-4 mt-md-0 text-left">
                                        <h1 className="mb-4">Business <span>Conference</span> 2019</h1>
                                        <h2 className="mb-4">November 26-30, 2019 - 08:00am-12:00pm</h2>
                                        <p>
                                            <a href="#" className="btn btn-primary py-3 px-4">Get Ticket</a>
                                            <a href="#" className="btn btn-white py-3 px-4">Watch Video</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </OwlCarousel>
            </section>
        </div>
    );
};


const mapStateToProps = state => {
    console.log("state===>", state);
    return {
        contactFormData: state.contact,
    }
};


export default connect( mapStateToProps, null )(Home);
// export default Home;
