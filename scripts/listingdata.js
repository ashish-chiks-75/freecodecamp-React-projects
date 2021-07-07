import React from "react";
import ReactDom from "react-dom";
import products from "./0_jsonData";

function Products() {
  return (
    <section>
      {products.map((product) => {
        // const { id, title, body } = product;
        return <Product key={product.id} {...product} />;
      })}
    </section>
  );
}

const Product = (props) => {
  const { id, title, body } = props;
  return (
    <article>
      <h1 className="productId">{id}</h1>
      <h2 className="productTitle">{title}</h2>
      <p className="productDesc">{body}</p>
    </article>
  );
};


ReactDom.render(<Products />, document.getElementById("root"));
