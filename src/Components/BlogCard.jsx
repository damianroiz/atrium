import React from "react"


export default function BlogCard(props) {
    return (
        <div className="blogcard">
          <img src={props.image}/>
          <div className="blogcard-info">
            <h2 className="title">{props.title}</h2>
            <p className="date">{props.date}</p>
            <p className="desc">{props.description}</p>
            <button className="blogcard-btn"><a href="#">Read More</a></button>
          </div>
        </div>
    )
}