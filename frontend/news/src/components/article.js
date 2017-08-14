import React, { Component } from 'react';

const Article = (article_data) => {
  var article = article_data.article
    return(
      <div>
        <h1>Title: {article.title}</h1>
        <p>Section: {article.Section}</p>
        <img src={article.image_url} width="25%" height="25%"/>
        <p>URL: {article.url}</p>
      </div>
    )
}

export default Article
