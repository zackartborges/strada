import React, {useEffect} from 'react'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import SpecializedBody from '../components/SpecializedBody'

function Specialized() {
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
                <h6 className="sub-title hero-title">Say Hello</h6>
                <h1 className="big-title hero-title">We'd love to work together <br /> Don't hesitate, drop us a line.</h1>
            </Hero>
            <SpecializedBody />
        </div>
    )
    
}

export default Specialized