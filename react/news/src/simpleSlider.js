import React from 'react'
import Slider from 'react-slick'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};
class SimpleSlider extends React.Component {
  constructor(){
    super()

    this.state = {
      articles: [],
      summary: ''
    }
    this.handleImgClick = this.handleImgClick.bind(this)
  }

  fetchHandler(url){
    return fetch(url).then(response => response.json())
  }

  componentDidMount(){
    this.fetchHandler('http://localhost:3000/articles').then(data => {console.log(data);return data}).then(data => this.setState({articles:data}))
  }

  handleImgClick(){
    var article_url = document.querySelector('.slick-active img').id
    
  }

  render() {
    let slideElements
    if (this.state.articles.length > 0) {
      slideElements = this.state.articles.map( (article,i) =>
      <div key={i} className="container">
        <h1>{article.name}</h1>
        <img src={article.image_url} onClick={this.handleImgClick} id={article.url}/>
        <div className="overlay">
          <div className="text">{article.summary}</div>
        </div>
      </div>
    )} else {
      slideElements = <div></div>
    }
   return (
     <div>
      <Slider {...settings}>
        {slideElements}
      </Slider>
    </div>
    );
  }
}

export default SimpleSlider
