import React from "react";
import noImage from "../Images/no-image.jpg";
import './NewsCard.css'

const NewsCard = ({ newsItem }) => {

  const fullDate=new Date(newsItem.publishedAt);
  const date=fullDate.toString().split(" ");
  
  const hour=parseInt(date[4].substring(0,2));
  const time= hour>12?true:false

  return (
    <div className="newsCard">
      <img
        alt={newsItem.title}
        src={newsItem.urlToImage ? newsItem.urlToImage : noImage}
        className="newsImage"
      />

      <div className="newsText">
        <div className="newsTitle">
          <span className="title">{newsItem.title}</span>
          <span className="author">
            <a href={newsItem.url} target="_-blank" className="muted"> 
              <b>short</b>
            </a>
            <span> by {newsItem.author ? newsItem.author : "unknown"} </span>
            <span className="dateTime">
            {time
                ? `${hour - 12}:${date[4].substring(3, 5)} pm`
                : `${hour}:${date[4].substring(3, 5)} am`}{" "}
              on {date[2]} {date[1]} {date[3]}, {date[0]}
            </span>
          </span>
        </div>
        <div className="lowerNewstext">
          <div className="desc">{newsItem.description}</div>
          <span className="more">
            Read More at
            <a href={newsItem.url} target="__blank" className="source">
              <b> {newsItem.source.name}</b>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
