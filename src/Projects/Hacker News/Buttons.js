import React from "react";
import { useGlobalContext } from "./context";

const Buttons = () => {
  const { isLoading, page, nbPages, dispatch } = useGlobalContext();
  const handlePage = (val) => {
    let newPage;
    if (val === 1) {
      newPage = page + 1;
      if (newPage >= nbPages) {
        newPage = 0;
      }
    } else {
      newPage = page - 1;
      if (newPage < 0) {
        newPage = nbPages - 1;
      }
    }
    dispatch({ type: "PAGE", payload: newPage });
  };

  return (
    <div className="btn-container">
      <button disabled={isLoading} onClick={() => handlePage(-1)}>
        prev
      </button>
      <p>
        {page+1} of {nbPages}
      </p>
      <button disabled={isLoading} onClick={() => handlePage(1)}>
        next
      </button>
    </div>
  );
};

export default Buttons;
