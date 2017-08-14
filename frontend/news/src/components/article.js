import React, { Component } from 'react';


var x = 0

const Article = (article_data) => {
  let article = article_data.article

    return(
      <div className="owl-carousel owl-theme">
        <div id="item">
          <h1>Title: {article.title}</h1>
          <p>Section: {article.Section}</p>
          <img src={article.image_url} className="d-block img-fluid" />
          <p>URL: {article.url}</p>
        </div>
      </div>
    )

}

export default Article
