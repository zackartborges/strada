import React, {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import {motion} from "framer-motion";

import Hero from '../components/Hero'
import Header from '../components/Header'
import NewsDetails from '../components/NewsDetails'
import Footer from '../components/Footer'

import RecentPosts from '../elements/Widgets/RecentPosts'
import Categories from '../elements/Widgets/Categories'

import ArticlesData from '../data/News'

function SingleNews(){
    const LoadingTransition = { duration: 1, ease: [0.43, 0.13, 0.23, 0.96] };

    useEffect(() => {
        const headerAnim = document.querySelector('.header-anim')
        const heroTitle = document.querySelectorAll('.hero-title')
        const bgImg = document.querySelector('.single-news-hero')
        
        setTimeout(() => {
            bgImg.classList.add('single-news-hero-on')
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

    const {newsId} = useParams()
    const thisNews = ArticlesData.find(element => element.id == newsId)

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
            <Hero class='single-news-hero'>
                <h6 className="sub-title hero-title"><span className="single-news-date">{thisNews.date}</span>{thisNews.categories.map((item, i) => <a href="/" key={i}>{item}</a>)}</h6>
                <h1 className="big-title hero-title">{thisNews.title}</h1>
            </Hero>
            <NewsDetails>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-8 single-news-left anim-bot">

                    <img src={`assets/images/${thisNews.image}`} alt="" />
                    <h3 className="big-title anim-bot">{thisNews.headline}</h3>
                    {thisNews.textOne.map((item, i) => <p key={i}>{item}</p>)}
                    {thisNews.blockquote.text ? 
                        <blockquote>
                            <p>
                                {thisNews.blockquote.text}
                            </p>
                            <cite>{thisNews.blockquote.author}</cite>
                        </blockquote>
                    : null }
                    {thisNews.textTwo.map((item, i) => <p key={i}>{item}</p>)}
                    <p className="tags">
                        {thisNews.tags.map((item, i) => <span key={i}>{item}</span>)}
                    </p>
                    
                </div>

                <div className="col-12 col-sm-8 col-md-8 col-lg-6 col-xl-4 single-news-right sidebar">
                    <RecentPosts />
                    <Categories />
                </div>

                <div className="col-12 col-sm-4 col-md-4 col-lg-6"></div>
            </NewsDetails>
            <Footer />
        </div>
    )

}

export default SingleNews