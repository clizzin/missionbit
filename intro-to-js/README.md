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

0) Download the `svg.js` library from [here](https://raw.githubusercontent.com/svgdotjs/svg.js/master/dist/svg.js) (right-click -> save link as). Save it to your `9-flowers-challenge` directory.

1) To connect the `svg.js` library to your `index.html` page, add another script tag directly between the `<body>` tag and the `<script>` tag you already added:

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

2) Add a `<div>` with width 100%, height 100%, and id="drawing-area" to the `<body>`, and give the `<body>` a margin of 0px:

```html
<html>
    <body style="margin: 0px">
      <div id="drawing-area" style="width: 100%; height: 100%"></div>
    </body>
    <script src="svg.js"></script>
    <script src="main.js"></script>
</html>
```

The 0px margin makes the body reach the edges of the screen.

3) Time to draw a shape. Delete everything in your `main.js` file, and write the following:

```js
// Don't worry about this line too much right now. It
// just uses the svg.js library to prepare to draw shapes.
// Do notice that it references the id of the div we made
// in the previous step.
var drawing = SVG('drawing-area');
```

And then add:

```js
// Draw a rectangle. The first number is the width,
// the second number is the height.
drawing.rect(100, 200)
```

Reload the page and you should see a black rectangle.

4) Try giving it color:

```js
drawing.rect(100, 200).fill('purple')
```

You can also write it like this--it does the same thing:

```js
drawing
  .rect(100, 200)
  .fill('purple')
```

You can also position it on the screen:

```js
drawing
  .rect(100, 200)
  .fill('purple')
  .center(300, 300)
```

5) Try some other shapes:

```js
drawing
  .ellipse(100, 300)
  .stroke('green')
  .center(200, 200)
```

```js
drawing
  .line(0, 0, 100, 200)
  .stroke('yellow')
```

6) For help with the coordinates, include [coordinate-helper.js](coordinate-helper.js) in another script tag on your page.
