import React from 'react';
import logo from './logo.svg';
import './App.css';
import DisplayArticles from './components/display_article'
import Article from './components/article'
import ManageArticles from './components/manage_articles'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      articles: [],
    }
    this.handleData = this.handleData.bind(this)
  }

  fetchArticles(){
    fetch('http://localhost:3000/articles')
    .then(res => res.json())
    .then(data => this.handleData(data))
  }

  handleData(data){
    this.setState({
    	 articles: data
     })
  }

  componentDidMount(){
    this.fetchArticles()
  }

  render() {
    if (this.state.articles <= 0){return <p>Looking for articles...</p>}
    return (
    <div className="App">
      <div className="slideshow-container">
        <div id="mainContent">
            <div><DisplayArticles article_data={this.state.articles}/></div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
