import React from "react";
import "./Quotes.css";

const Quotes = ({ data, handleOnClick, showdata, author }) => {
  return (
    <div className="container">
      <div className="wrapper">
        <p className="quote"> {showdata}</p>

        <p className="author"> {author} -</p>
      </div>
      <div className="btn-container">
        <button
          className="btn"
          onClick={() => {
            handleOnClick();
          }}
        >
          Get quote
        </button>
      </div>
    </div>
  );
};

export default Quotes;
