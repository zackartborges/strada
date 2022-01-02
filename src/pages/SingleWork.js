import React, {useEffect} from 'react'
import {useParams, Link} from "react-router-dom"
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import WorkDescription from '../components/WorkDescription'
import WorkGallery from '../components/WorkGallery'
import WorkNext from '../components/WorkNext'

import Works from '../data/Works'

function SingleWork() {
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    useEffect(() => {
        const headerAnim = document.querySelector('.header-anim')
        const heroTitle = document.querySelectorAll('.hero-title')
        const bgImg = document.querySelector('.single-project-hero')
        
        setTimeout(() => {
            bgImg.classList.add('single-project-hero-on')
        }, 1000)

        setTimeout(() => {
            headerAnim.classList.add('header-anim-on')
        }, 1500)

        setTimeout(() => {
            heroTitle.forEach((item, index) => {
                setTimeout(() => {
                    item.classList.add('hero-title-on')
                }, 200 * index) 
            })
        }, 2000)
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

    const {workId} = useParams()
    const thisWork = Works.find(element => element.id == workId)

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
            <Hero background={thisWork.background} class='single-project-hero' tint='dark-bg'>
                <h6 className="sub-title hero-title">{thisWork.fixedCategory}</h6>
                <h1 className="big-title hero-title">{thisWork.name}</h1>
            </ Hero>
            <WorkDescription>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-5">
                    <h2 className="big-title anim-bot">{thisWork.headline}</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-1"></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 anim-bot">
                    <div className="project-desc">
                        {thisWork.text.map((elem, i) => <p key={i}>{elem}</p>)}
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-after-2 anim-bot">
                    <Link to='/contact'>Start a project</Link>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-after-1 anim-bot">
                    <p className="fade-p">{thisWork.date}</p>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-1 anim-bot">
                    <ul>
                        {thisWork.servicesLeft.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ul>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-3 desc-bottom desc-bottom-before-2 anim-bot">
                    <ul>
                        {thisWork.servicesRight.map((elem, i) => <li key={i}>{elem}</li>)}
                    </ul>
                </div>
            </ WorkDescription>
            <WorkGallery imagesLeft = {thisWork.imagesLeft} imagesRight = {thisWork.imagesRight} />
            <WorkNext link={thisWork.id < Works.length ? thisWork.id + 1 : thisWork.id } noMore={thisWork.id == Works.length && 'done'}/>
        </div>
    )

}

export default SingleWork