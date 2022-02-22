
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import Footer from './Component/Footer';
import NavBar from './Component/NavBar';
import NewsContent from './Component/NewsContent';
import apiKey from './Data/Config'


function App() {

  const[category,setCategory]=useState('general')
  const[newsArray,setNewsArray]=useState([])
  const[newsResult,setNewsResult]=useState()
  const[loadMore,setLoadMore]=useState(20)


  const newApi = async()=>{
    try{
      const news = await axios.get(`https://newsapi.org/v2/top-headlines?country=in&apiKey=${apiKey}&pageSize=${loadMore}&category=${category}`);
      setNewsArray(news.data.articles)
      setNewsResult(news.data.totalResults)
    }
    catch(error){
      console.log(error)
    }
  }
  useEffect(()=>{
    newApi()
  },[newsResult,category,loadMore])
  return (
    <div className="app">
      <NavBar setCategory={setCategory}/>
      <NewsContent newsArray={newsArray} newsResult={newsResult} loadMore={loadMore} setLoadMore={setLoadMore}/>
      <Footer/>
    </div>
  );
}

export default App;
