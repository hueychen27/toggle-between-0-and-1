# Why does this exist?
I am testing out my first npm package.
# How do I use it?
Let the comments explain in the following code:
```js
const toggle = require('toggle-between-0-and-1'); // obviously you need this
const t = new toggle(); // toggle() is a class and you can input a number ( new toggle(2) ) The value inputed will be the remainder of it divided by 2 (value % 2)
t.value; // Returns the current value which is 0 in this example
t.value = 9998; // Sets the value to 0 because 9998 % 2 = 0
t.toggle(); // Toggles the value from 0 to 1 or 1 to 0 if the value is already 1. In this example, the value will be 1. The toggle function increments the toggleTimes property by one.
t.toggleTimes; // Returns the toggleTimes property which is 1 in this example
t.toggle();
t.toggle();
t.toggleTimes; // Returns 3
t.resetToggleTimes() // Set the toggleTimes property to 0;
```