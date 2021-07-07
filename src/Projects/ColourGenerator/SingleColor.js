import React, { useState, useEffect } from "react";
import rgbToHex from "./utils";

const SingleColor = ({ rgb, weight, index, half }) => {
  const [alert, setAlert] = useState(false);
  const code = rgbToHex(...rgb);

  useEffect(() => {
    const timeOut = setTimeout(() => setAlert(false), 700);
    return () => clearTimeout(timeOut);
  }, [alert]);

  return (
    <article
      className={`colour ${index > half && "colour-light"}`}
      style={{ backgroundColor: `rgb(${rgb.join(",")})` }}
      onClick={() => {
        setAlert(true);
        navigator.clipboard.writeText(code);
      }}
    >
      <p className="percent-value">
        {weight}%{alert && <span className="alert"> copied</span>}
      </p>
      <p className="colour-value">{code}</p>
    </article>
  );
};

export default SingleColor;
