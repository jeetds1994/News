import React, { Component } from 'react';

var x = 0

const Article = (article_data) => {
  let article = article_data.article
    return(
        <div id="item">
          <h1>Title: {article.title}</h1>
          <p>Section: {article.Section}</p>
          <img src={article.image_url} />
          <p>URL: {article.url}</p>
        </div>
    )

}

export default Article
