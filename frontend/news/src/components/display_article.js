import React from 'react'
import ReactDOM from 'react-dom'
import Slider from 'react-slick'

import Article from './article'

var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };


const DisplayArticles = (articles) => {
  var article_data = articles.article_data
  let returnValue

  if (article_data.length === 0) {
      returnValue = <div></div>
  }else {
      returnValue = <Slider {...settings}>{article_data.map((article,index) => <Article key={index} article={article}/>)}</Slider>
  }
  return returnValue
}


export default DisplayArticles
