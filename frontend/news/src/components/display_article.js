import React from 'react'
import ReactDOM from 'react-dom'

import Article from './article'

const DisplayArticles = (articles) => {
  var article_data = articles.article_data
  return(
    <div>
      {article_data.map( article => <Article article={article}/>)}
    </div>
  )
}


export default DisplayArticles
