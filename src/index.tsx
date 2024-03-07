import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // React component

//JSX
// React Element
const Heading = ()=>(<h1>Hello world! 🚀</h1>);
// internally it uses React.createElement to create react element which is nothing but an object -> Browsers don't understand the jsx, webpack kind of bundlers will transpile jsx into browser understandable code -> it will transpile before jsx reaches to js engine ->babel usesed to tranpile JSX(covers into React.createElement)

// React component -> there are two types of components
// 1) class based components -> older
// 2) functional based components -> React functional components are just like a normal javascript function and it returns JSX

//React Functional component


//creating root element
const rootELement = ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement);

//render element in the browser
rootELement.render(<App/>);
