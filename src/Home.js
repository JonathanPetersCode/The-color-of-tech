import React, { Component } from 'react';
import leslieMiley from "./images/leslie-miley-slack6.jpg";
import zorahPic from "./images/zorahFung.image.jpg";
import saronPic from "./images/Saron.jpg";
import francesPic from "./images/francesCoronel.jpg";
import kimberlyPic from "./images/kimberly-img.jpg";
import johnnyAustin from "./images/johnny-austin-img.png";

class Home extends Component {
    render(){
        return (
            <div>
                <div>
                <h2 className="home section-title">The POC Spotlight</h2>
                </div>
                <p className="home-info">Tech People to Follow</p>
            <div id="profile-container">
                
<ul className= "cards">
    <li className="cards__item">
                <div className="card">
                <img className="profileImgPad" src={leslieMiley} alt="Leslie Miley"/>
                <div className="card__content">
            <div className="card__title">Leslie Miley</div>
            <p className="card__text">Technology visionary and creative leader with experience building mobile and web engineering teams. Extensive experience building, motivating, and managing globally distributed teams with different cultural backgrounds. </p>
            <div id="social-icons">
                <a href="https://bit.ly/2TCjETk"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://bit.ly/2WU6oLV"><i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://bit.ly/2GAAa2r" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
            </div>
        </div>
        </div>
</li>
    <li className="cards__item">
        <div className="card">
        <img className="profileImgPad" src={zorahPic} alt="Zorah Fung"/>
        <div className="card__content">
            <div className="card__title">Zorah Fung</div>
            <p className="card__text">Zorah Fung is a lecturer for the introductory programming courses at University of Washington Computer Science and Engineering. She earned her Bachelor’s and Master’s in Computer Science from UW CSE. When Zorah is not teaching, she works as a Software Engineer for bay area startup, Sift Science.</p>
            <div id="social-icons">
                <a href="https://www.cs.washington.edu/people/faculty/zorahf"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://twitter.com/zorahlea?lang=en"><i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/zorah/" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
            </div>
        </div>
    </div>
</li>
<li className="cards__item">
        <div className="card">
        <img className="profileImgPad" src={saronPic} alt="Sorah Pic"/>
        <div className="card__content">
            <div className="card__title">Saron Yitbarek</div>
            <p className = "card__text">Developer and CEO/Founder of CodeNewbie, the most supportive community of programmers and people learning to code. Recently worked at Microsoft managing a new tech training program called Tech Jobs Academy.</p>
            <div id="social-icons">
                <a href="https://saron.io/"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://twitter.com/saronyitbarek"><i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/saronyitbarek/" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
            </div>
        </div>
        </div>
    </li>
<li className="cards__item">
        <div className="card">
        <img className="profileImgPad" src={francesPic} alt="Frances Pic"/>
        <div className="card__content">
            <div className="card__title">Frances Coronel</div>
            <p className="card__text">Frances Coronel is a software engineer specializing in UI development on the Customer Acquisition Team at Slack. She has been working professionally as a developer since 2015 and has both a Bachelors and Masters in Computer Science.</p>
            <div id="social-icons">
                <a href="https://www.fvcproductions.com/"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://twitter.com/fvcproductions?lang=en"><i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://www.linkedin.com/in/fvcproductions/" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="cards__item">
                <div className="card">
                <img className="profileImgPad" src={kimberlyPic} alt="Kimberly Bryant"/>
                <div className="card__content">
            <div className="card__title">Kimberly Bryant</div>
            <p className="card__text">Kimberly Bryant is an African American electrical engineer who worked in the biotechnology field at Genentech, Novartis Vaccines, Diagnostics, and Merck. In 2011, Bryant founded Black Girls Code, a training course that teaches basic programming concepts to black girls who are underrepresented in technology careers.</p>
            <div id="social-icons">
                <a href="https://bit.ly/2lyXzoe"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://bit.ly/2T3m4t4"><i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://bit.ly/2u1bGYM" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
            </div>
        </div>
</li>
<li className="cards__item">
                <div className="card">
                <img className="profileImgPad" src={johnnyAustin} alt="Leslie Miley"/>
                <div className="card__content">
            <div className="card__title">Johnny Austin</div>
            <p className="card__text">Johnny Austin is a seasoned engineering leader with experience building cross-functional teams while driving towards technical, product and revenue goals. He is an active member of the open source community - contributing to projects such as Node.js and many others.</p>
            <div id="social-icons">
                <a href="https://bit.ly/2TOHUVu"><i className="fas fa-globe fa-3x"></i></a>
                <a href="https://bit.ly/2TxbMGK"><i className="fab fa-twitter-square fa-3x"></i></a>
                <a href="https://bit.ly/2EZnPCz" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
            </div>
        </div>
        </div>
</li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Home;