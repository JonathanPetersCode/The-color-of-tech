import React, { Component } from 'react';

class About extends Component {
    render(){
        return(
            <div>
                <div className="profile-container">
                <div className="profile">
                    <div className="tech-icons">
                        <i className="fab fa-react"></i>
                        <i className="fab fa-js-square"></i>
                        <i className="fab fa-html5"></i>
                        <i className="fab fa-css3-alt"></i>
                    </div>
                    <div className="tech-used section-title about-description">
                        <p>This site is built with React JS, React Router, HTML5, and CSS3</p>
                        <p> I was inspired to build this site by the people from all different backgrounds, ethnicities, cultures, and walks of life that are helping to influence, motivate, and promote proper representation in technology. <br/> <br/>
                            Content: <a href="https://peopleofcolorintech.com/">peopleofcolorintech.com</a>
                        </p>
                    </div>
                <div id="social-icons">
                        <a href="twitter.com/jonathanpetersc"><i className="fas fa-globe fa-3x"></i></a>
                        <a href="https://github.com/JonathanPetersCode"><i className="fab fa-github fa-3x"></i></a>
                        <a href="https://www.linkedin.com/in/jonathanpeterscode/" rel="noopener noreferrer"><i className="fab fa-linkedin fa-3x"></i></a>
                </div>
                </div>
            </div>
        </div>
        )
    }
}
export default About;