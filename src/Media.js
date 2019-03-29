import React, { Component } from 'react';
import bitwise3 from "./images/bitwise3.jpg";
import techish3 from "./images/techish3.png";
import techforward from "./images/techforward.jpg";
import rewriting from "./images/rewriting.jpg";


class Media extends Component {
    render(){
        return (
            <div>
                <h2 className="title section-title">Podcasts</h2>
                <ul className = "media-wrapper">
                    <li className="media__item">
                        <div className="media__card">
                        <img className="img-container cover" src={bitwise3} alt="Bitwise Icon"/>
                        <div className="card__content">
                            <div id="social-icons">
                                <a href="https://bit.ly/2E3hDKv"><i className="fas fa-globe fa-3x"></i></a>
                        </div>
                         <div className="media__text">
                        <h1>Be Bitwise!</h1>
                            <p className= "card__text"> A weekly podcast that provides a setting by which anyone can listen and gain a better understanding of technology. The podcast is hosted by Bevan, Jen, and me, Alondo, who work together to provide a wealth of information that informs the masses.
                            </p></div>
                        </div>
                    </div>
                </li>
                <li className="media__item">
                        <div className="media__card">
                        <img className="img-container cover" src={rewriting} alt="Rewriting Podcast"/>
                        <div className="card__content">
                            <div id="social-icons">
                                <a href="https://bit.ly/2CjXvT4"><i className="fas fa-globe fa-3x"></i></a>
                        </div>
                        <div className="media__text">
                        <h1>Rewriting the Playbook <br/> A Podcast by Black &amp; Brown Founders</h1>
                            <p className= "card__text">Black &amp; Brown Founders podcast explores topics  from ideation to revenue generation and beyond. The hosts Aniyia Williams and Deldelp Medina explain the rules of the game and how to build a badass tech business against all odds.
                            </p></div>
                        </div>
                    </div>
                </li>
                    <li className="media__item">
                        <div className="media__card">
                        <img className="img-container cover" src={techish3} alt="Techish Icon"/>
                        <div className="card__content">
                            <div id="social-icons">
                                <a href="https://bit.ly/2Gyv1rP"><i className="fas fa-globe fa-3x"></i></a>
                        </div>
                         <div className="media__text">
                        <h1>Techish</h1>
                            <p className= "card__text">A podcast by two millennial's talking about all things tech, pop culture, and life. Starring tech founders Abadesi Osunsade [@abadesi] and Michael Berhane [ @michaelberhane_].
                            </p></div>
                        </div>
                    </div>
                </li>
                    <li className="media__item">
                        <div className="media__card">
                        <img className="img-container cover" src={techforward} alt="Tech Forward Icon"/>
                        <div className="card__content">
                            <div id="social-icons">
                                <a href="https://bit.ly/2E2OAqB"><i className="fas fa-globe fa-3x"></i></a>
                        </div>
                        <div className="media__text">
                        <h1>Tech Forward Podcast with Cheryl Chotrani</h1>
                            <p className= "card__text">Tech Forward features the incredible stories of innovators and trailblazers from underrepresented groups in the tech industry. Tech Forward covers everything from the lack of venture funding for women and minorities, to how underrepresented groups can advance their careers in the sector, to how to hold companies accountable for diversity — and more.
                            </p></div>
                        </div>
                    </div>
                </li>
            </ul>
        </div>
        );
    }
}

export default Media;