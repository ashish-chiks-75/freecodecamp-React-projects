import React from "react";
import ReactDom from "react-dom";
import products from "./0_jsonData.js";

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
      <h1
        className="productId"
        onClick={() => {
          console.log(id);
        }}
      >
        {id}
      </h1>
      <h2 className="productTitle" onClick={() => secondBtn(title)}>
        {title}
      </h2>
      <p className="productDesc">{body}</p>
      <button onClick={orderHandler}>Place Order</button>
    </article>
  );
};

const orderHandler = (e) => {
  console.log(e.target.parentElement);
  alert("order placed");
};

const secondBtn = (title) => {
  console.log(title);
};

ReactDom.render(<Products />, document.getElementById("root"));
