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
      articles: []
    }
  }

  fetchHandler(){
    return fetch('http://localhost:3000/articles').then(response => response.json())
  }

  componentDidMount(){
    this.fetchHandler().then(data => {console.log(data);return data}).then(data => this.setState({articles:data}))
  }


  render() {
    let slideElements
    if (this.state.articles.length > 0) {
      slideElements = this.state.articles.map( (article,i) => <div key={i}><p>{article.name}</p><img src={article.image_url}/></div> )
    } else {
      slideElements = <div></div>
    }

   return (
      <Slider {...settings}>
        {slideElements}
      </Slider>
    );
  }
}

export default SimpleSlider
