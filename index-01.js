 import React from "react"
 import  ReactDOM from "react-dom"


const headingElement = React.createElement(
    'h1',
    {
        id: 'h1-tag',
        className: 'h1Class',
        key: "heading-tag",
        onClick: () => console.log("h1 click")
    },
    'Hello world!'
)
const grandParentElement = React.createElement(
    'p',
    {
        id: 'grandParent',
        key: 'grandParent'
    },
    'Grand Parent'
)


const childElement = React.createElement(
    'h2',
    {
        id: "child",
        key: "child"
    },
    'Nested child 🚀'
)

const parent = React.createElement(
    'div',
    { id: "parent", key: "parent" },
    childElement
)

console.log(headingElement) // object it contains react properties
/**creating nested element structure */
const parentDiv = React.createElement('div', { id: "grandParent" },
    [
        headingElement,
        grandParentElement,
        parent
    ]

)

/** creating root element */
const rootELement = ReactDOM.createRoot(document.getElementById('root'))

console.log(rootELement)

rootELement.render(parentDiv) // render the object(react elemetns) -> first it convert into html element and put it into the dom