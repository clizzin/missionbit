### Introduction to JavaScript



### Steps

#### Getting Started

0) Create a new directory on your desktop called `9-flowers-challenge`.

1) Create an `index.html` file in that directory that looks like this:

```html
<html>
    <body></body>
</html>
```

Note that we're giving the `<body>` a margin of 0px so that it reaches the edges of the screen.

2) Now let's write a javascript file! Create a file called `main.js` in the same directory that looks like this:
```js
document.write('Hello world!')
```

3) To connect the script to your `index.html` page, you have to use a script tag. Add this script tag directly after the `<body>` tag:

```html
<script src="main.js"></script>
```

4) Click on the lightning bolt and you should see a page that says "Hello world!"

#### Adding a library

A `library` is simply a bunch of javascript code that someone else wrote. We're going to use the `svg.js` library because it is a nice way to draw shapes and get introduced to the javascript programming language.

0) Download the `svg.js` library from [here](https://raw.githubusercontent.com/svgdotjs/svg.js/master/dist/svg.js) (right-click -> save target as). Save it to your `9-flowers-challenge` directory.

1) Connect the `svg.js` library to your `index.html` page with another script tag. Add this script tag directly between the `<body>` tag and the `<script>` tag you already added:

```html
<script src="svg.js"></script>
```

Your `index.html` page should look like this:

```html
<html>
    <body></body>
    <script src="svg.js"></script>
    <script src="main.js"></script>
</html>
```

2) Add a `<div>` with width 100%, height 100%, and id="drawing" to the `<body>`, and give the `<body>` a margin of 0px:

```html
<html>
    <body style="margin: 0px">
      <div id="drawing" style="width: 100%; height: 100%"></div>
    </body>
    <script src="svg.js"></script>
    <script src="main.js"></script>
</html>
```

The 0px margin makes the body reach the edges of the screen.

3) Time to draw a shape. Delete everything in your `main.js` file, and write the following:

```js
// Don't worry about this much right now. This line just uses the svg.js library to prepare to draw shapes.
var drawing = SVG('drawing');
```

And then add:

```js
// Draw a rectangle. The first number is the width, the second number is the height.
drawing.rect(100, 200)
```

Reload the page and you should see a black rectangle.

4) Try giving it color:

```js
// Draw a rectangle. The first number is the width, the second number is the height.
drawing.rect(100, 200).fill('purple')
```

You can also write it like this--it does the same thing:

```js
// Draw a rectangle. The first number is the width, the second number is the height.
drawing
  .rect(100, 200)
  .fill('purple')
```

You can also position it on the screen:

```js
// Draw a rectangle. The first number is the width, the second number is the height.
drawing
  .rect(100, 200)
  .fill('purple')
  .center(300, 300)
```
