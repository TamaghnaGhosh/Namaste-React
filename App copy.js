import React from "react";
import ReactDOM from "react-dom/client";

// const title = React.createElement("div", { class: "title" }, [
//   React.createElement("h1", {}, "I am a H1 tag"),
//   React.createElement("h2", {}, "I am a h2 tag"),
//   React.createElement("h3", {}, "I am a h3 tag"),

//   // React.createElement("div", { id: "child2" }, [
//   //     React.createElement("h1", {}, "I am a H1 tag"),
//   //     React.createElement("h2", {}, "I am a h2 tag")
//   // ])
// ]);

// // const heading = React.createElement("h1", { id: "heading" }, "Hello World from React!");
// const root = ReactDOM.createRoot(document.getElementById("root"));

// console.log(parent) // object

// //React.createElement(TagName,attributes,children)

// root.render(parent);

// const heading = React.createElement("h1", { id: 'heading' }, "Namaste React");

// console.log(heading);

const jsxHeading = 
  <div className="title">
    <h1 className="heading" tabIndex="1">
      I am a h1 tag
    </h1>

    <h2 className="heading" tabIndex="1">
      I am a h2 tag
    </h2>

    <h3 className="heading" tabIndex="1">
      I am a h3 tag
    </h3>
  </div>


const Title = () => (
  <h1 className="heading" tabIndex="1">
    Namaste React using jsx
  </h1>
);

const HeaderComponent = () => {
  return (
    <div className="constiner">
      <Title />
      <Title></Title>
      {Title()}
      <h2>Namaste React using jsx </h2>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeaderComponent />);
