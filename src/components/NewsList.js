import  Axios  from 'axios';
import React, { useEffect, useRef} from 'react';
import { useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import NewsItem from './NewsItem';
import { Swiper } from "swiper/react";
import "../styles/Home.css";
// Import Swiper styles
import "swiper/css";
// import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/swiper-bundle.css";
// import Swiper core and required modules
import SwiperCore, {
  Navigation
} from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation]);

const NewsList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        Axios.get('https://newsapi.org/v2/everything?q=("climate change" AND "global warming")&from=2022-01-01&language=en&qInTitle="title search"&apiKey=0dceb446306b4189be97c28031adbb7d').then((response)=>{
            setArticles(response.data.articles.splice(8, response.data.articles.length))
        })
    }, []);
    console.log(articles);

  return (
    <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true}  navigation={true} className="mySwiper">
        {articles.map(({title, url, urlToImage}) => (
            <SwiperSlide>
                <NewsItem className='news-item' title={title} url={url} urlToImage={urlToImage}/>
            </SwiperSlide>
        ))}
    </Swiper>
  )};

export default NewsList;