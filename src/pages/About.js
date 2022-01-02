import React, { useEffect} from 'react'
import {Link} from 'react-router-dom'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import AboutText from '../components/AboutText'
import Team from '../components/Team'
import Services from '../components/Services'
import Footer from '../components/Footer'

function About(){
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    useEffect(() => {
        const headerAnim = document.querySelector('.header-anim')
        const heroTitle = document.querySelectorAll('.hero-title')
        
        setTimeout(() => {
            headerAnim.classList.add('header-anim-on')
        }, 1000)

        setTimeout(() => {
            heroTitle.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('hero-title-on')
                }, 200 * index) 
            })
        }, 1500)
    }, [])

    const onScrollBottomAnim = () => {
        const animBot = document.querySelectorAll('.anim-bot')

        animBot.forEach(item => {
            let itemPosition = item.getBoundingClientRect();

            if(itemPosition.top >= 0 && itemPosition.top <= window.innerHeight - 250) {
                item.classList.add('item-anim-bot')
            }
        })   
    }

    useEffect(() => {
        window.addEventListener("scroll", onScrollBottomAnim);
        return () => window.removeEventListener("scroll", onScrollBottomAnim);
    }, [])

    return(
        <div>
            <motion.div 
                initial={{x:0}}
                animate={{x:'-100%'}}
                exit={{x:0}}
                transition={LoadingTransition}
                className="page-trans">
            </motion.div>
            <Header />
            <Hero>
                <h6 className="sub-title hero-title">Who We Are</h6>
                <h1  className="big-title hero-title">We pride ourselves by creating <br /> amazing design experiences.</h1>
            </ Hero>
            <AboutText />
            <Team />
            <Services>
                <h2 className="big-title">We can take your business <br /> to a whole new level.</h2>
                <p>Helping companies stand out in the digital era consectetur adip isicing elit deleniti earum quod soluta consequuntur officis.</p>
                <Link to='/contact'>Become our partner</Link>
            </Services>
            <Footer />
        </div>
    )
    
}

export default About