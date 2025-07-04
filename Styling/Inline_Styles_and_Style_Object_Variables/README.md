An inline style is a style that’s written as an attribute, like this:

<h1 style={{ color: 'red' }}>Hello world</h1>

Notice that it has double curly braces. The outer curly braces are to note that everything between should be read as JavaScript. The inner curly braces create a JavaScript object literal.

However, using inline styles can quickly become messy if you want to apply more than just a few styles. An alternative is to store a style object in a variable and then inject that variable as the value of the style attribute.

To do this, we can initialize an object with properties and values like so:

const darkMode = {
  color: 'white',
  background: 'black'
};

Then, the object can be injected to style a component:

<h1 style={darkMode}>Hello world</h1>
