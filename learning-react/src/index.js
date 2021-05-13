import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
    </section>
  );
}

const author = "J.K.Rowling";
const title = "Harry Potter and the Philosopher's Stone";
const image =
  "https://images-eu.ssl-images-amazon.com/images/I/81YOuOGFCJL._AC_UL200_SR200,200_.jpg";
const Book = () => {
  return (
    <article className="book">
      <img src={image} alt="" />
      <h2>{title}</h2>
      <h3>{author.toUpperCase()}</h3>
    </article>
  );
};

ReactDom.render(<BookList />, document.getElementById("root"));
