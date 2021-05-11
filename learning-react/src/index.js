import React from "react";
import ReactDom from "react-dom";
import "./index.css";

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image></Image>
      <Title></Title>
      <Author></Author>
    </article>
  );
};
const Image = () => (
  <img
    src="https://images-eu.ssl-images-amazon.com/images/I/81YOuOGFCJL._AC_UL200_SR200,200_.jpg"
    alt=""
  />
);
const Title = () => <h2>Harry Potter and the Philosopher's Stone</h2>;
const Author = () => (
  <h3 style={{ color: "green", fontSize: "0.75rem", margin: "0.25rem" }}>
    {" "}
    {/** here we are applying the line CSS (But you like external CSS */} J.K.
    Rowling
  </h3>
);

// New task

// function Welcome(props) {
//   return <h1>Welcome, {props.name}</h1>;
// }

// end task

ReactDom.render(<BookList />, document.getElementById("root"));
