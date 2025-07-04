One way to make styles modular, organized, and reusable is to create separate stylesheets for each component.

We can import a stylesheet by using the import keyword:

import './App.css'

However, if we have multiple stylesheets with the same class names, the names can collide and create style conflicts.

One way to prevent this is to use CSS modules. By importing it as a module, the styles will only be available for the component that imported the style. This is done automatically by creating unique class names for each module. This frees us from having to keep track of the class names we’ve used across stylesheets.

To use CSS modules, we begin by naming our stylesheet in this format, where fileName should be replaced with the name of the component you’re styling:

fileName.module.css

This indicates that the file should be processed as a CSS module.

Then, it must be imported into the file containing our component.

import styles from './fileName.module.css'

From this import, we can see that the styles object now holds the class selectors of fileName.module.css. To access the selectors, we use the dot notation like so:

<div className={styles.divStyle}></div>

Note that we apply styles using the className attribute rather than class. class is a reserved JavaScript keyword, so React uses className to avoid conflicts.

Although React does not have an opinion on how styles should be defined, this is the preferred method for styling in React, as it maintains the compositional philosophy of React.
