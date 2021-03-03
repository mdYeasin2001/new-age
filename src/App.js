import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import { useEffect, useState } from 'react';
import Trending from './components/Trending/Trending';
import LatestNews from './components/LatestNews/LatestNews';

function App() {
  const [news, setNews] = useState([]);
  
  const [trendingNews, setTrendingNews] = useState([]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e51a5085b6314f16878112af9f4aea06')
    .then(res => res.json())
    .then(data => setNews(data.articles))
    .catch(error => error);
  },[]);
  useEffect(() => {
    fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=e51a5085b6314f16878112af9f4aea06')
    .then(res => res.json())
    .then(data => setTrendingNews(data.articles))
    .catch(error => error);
  },[]);
  
  return (
    <div>
     <Header news={news}></Header>
     <Trending tradingNews={trendingNews}></Trending>
     <LatestNews news={news}></LatestNews>
    </div>
  );
}

export default App;
