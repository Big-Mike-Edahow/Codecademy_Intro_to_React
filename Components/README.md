A React application typically has two core files: App.js and index.js. App.js file is the top level of your application, and index.js is the entry point.

To render components to the browser, we must rely on the .createRoot() and .render() methods from the react-dom library. This should be done in our entry point, index.js.

import React from 'react' creates a JavaScript object. This object contains properties that are needed to make React work, such as React.createElement().

import ReactDOM from 'react-dom/client' creates another JavaScript object. This object contains methods that help React interact with the DOM, such as ReactDOM.createRoot().

First, we call the createRoot method to create a React root container for displaying content. React applications typically have a single root DOM node, and everything inside it is managed by React DOM.

In an application fully built with React, you will only need to do this once. Once this is set up, React will manage the DOM of your application, and any updates to the UI is taken care of efficiently. Adding more components should take place in your top-level App.js file.

React applications are made up of components.

Components are responsible for rendering pieces of the user interface.

To create components and render them, react and reactDOM must be imported.

React components can be defined with Javascript functions to make function components.

Whenever you create a function component, you need to give that function component a name. That name should be written in Pascal case like this: UpperPascalCase.

Function components can return multiple lines by nesting the elements in a parent element.

Variable attributes can be used inside of a React component with JavaScript injections.

React components support logic by putting the logic statements above the return statements.

Components can conditionally return JSX elements by putting conditional statements inside of the components.

Components can respond to events by defining event handlers and passing them to the JSX elements.
