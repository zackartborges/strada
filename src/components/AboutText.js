import React from 'react'
import {Link} from 'react-router-dom'

function AboutText(){

    return(
        <section id="aboutStory" className="section">
            <div className="container-fluid-small">
                <div className="row">

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-left anim-bot">
                        <h2 className="big-title">We're a bunch of design <br /> passionate folks.</h2>
                        <Link to='/'>View projects</Link>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 story-right anim-bot">
                        <div className="story">
                            <p className="big-p">We've met on a voluptatem quia voluptas sit aspernatur aut odit aut fugit sed quia consequuntur magni dolores eos qui ratione et voluptatem sequi ut enim ad minima veniam, quis nostrum exercitationem. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    <div className="col-xl-3"></div>

                    <div className="col-xl-3"></div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>7 Years of Experience</li>
                            <li>22 Completed Projects</li>
                            <li>41 Happy Customers</li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 story-bottom anim-bot">
                        <ul>
                            <li>Award Winning Agency</li>
                            <li>Aesthetics Oriented Team</li>
                            <li>Marketing Strategy Experts</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    )
    
}

export default AboutText