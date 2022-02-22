import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "./NewsCard";
import "./NewsContent.css";

const NewsContent = ({newsArray, newsResult,setLoadMore,loadMore}) => {

  return (
    <div className="newsContent">
      <Container maxWidth="md">
        <div className="content">
        <div className="downloadApp">
          <span className="downloadText">
            For the best experience use Top News app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="Play Store"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="App Store"
            height="80%"
          />
        </div>
        {
          newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title}/>
          ))
        }

        
        <div>
          {newsResult>=loadMore ?
          <><hr />
          <button
            className="loadMore"
            onClick={() => setLoadMore(loadMore + 20)}
          >
            Load More
          </button></>
             : 
            <b>No More News </b>
          }
       
        </div>
        
        </div>
      </Container>
    </div>
  );
};

export default NewsContent;
