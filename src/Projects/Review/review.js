import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = people[index];
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            let newIndex = index - 1;
            if (newIndex < 0) {
              newIndex = newIndex + people.length;
            }
            setIndex(newIndex);
          }}
        >
          <FaChevronLeft />
        </button>
        <button
          className="next-btn"
          onClick={() => {
            setIndex((index + 1) % people.length);
          }}
        >
          <FaChevronRight />
        </button>
      </div>
      <button
        className="random-btn"
        onClick={() => {
          let newIndex = Math.floor(Math.random() * 4);
          console.log(newIndex);
          setIndex(newIndex);
        }}
      >
        {" "}
        Random Review{" "}
      </button>
    </article>
  );
};

export default Review;
