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

![library gif](https://media.giphy.com/media/CBgB72eTZngJy/giphy.gif)

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

__NOTE:__The main.js `<script>` tag __must come after__ the svg.js `<script>` tag. This is because the scripts are run in order, and in main.js we are going to use some of the functions defined in the svg.js library.

2) Add a `<div>` with width 100vw, height 100vh, and id="drawing-area" to the `<body>`, and give the `<body>` a margin of 0px:

```html
<html>
    <body style="margin: 0px">
      <div id="drawing-area" style="width: 100vw; height: 100vh"></div>
    </body>
    <script src="svg.js"></script>
    <script src="main.js"></script>
</html>
```

The 0px margin makes the body reach the edges of the screen. The width and height make the `<div>` cover the entire screen as well.

#### Drawing Shapes

![shape face](https://media.giphy.com/media/3o7TKt2nShRwLMFiP6/giphy.gif)

0) Time to draw a shape. Delete everything in your `main.js` file, and write the following:

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

1) Try giving it color:

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

Try changing the numbers inside the `center()` function and see how they move the rectangle around.

The numbers that go in the `center()` function are called `coordinates`. You might have seen this word before in a math class at school. It's simply a way of pointing to specific parts of the screen. `0,0` is in the upper left corner.

2) Try some other shapes:

```js
drawing
  .ellipse(100, 300)
  .stroke('green')
  .center(200, 200)
  .rotate(45)
```

```js
drawing
  .line(0, 0, 100, 200)
  .stroke('yellow')
```

3) Download [coordinate-helper.js](https://raw.githubusercontent.com/bennlich/missionbit/master/intro-to-js/coordinate-helper.js) and save it to your 9-flowers-challenge folder. Connect it to your page with another `<script>` tag, just like you did in step 1.

Refresh your page. If it worked, you should see numbers in the upper-right corner of the screen that tell you what coordinates your mouse is at. You can use this as a guide to help you position your shapes.

#### 9 Flowers Challenge

Now it is time for the challenge!

### Part 1

![flowers](https://media.giphy.com/media/rbEQ5LkMhxUvm/giphy.gif)

__Your challenge is to use the shape tools you just learned about to draw 9 flowers in a grid. Each flower must have at least one different color.__

This is similar to the 9 Box Challenge, but instead of boxes, it's flowers, and instead of using HTML, you're using JavaScript.

__IMPORTANT:__ Always break down a challenge into simpler pieces.

In this case, __start by drawing just one flower__. When you have finished one flower, how will you draw a second flower that looks just like the first one?

__When you have finished drawing the second flower, ask Benny to show you a shortcut using variables and functions.__

If you want more shapes, check out these references:
- [http://svgjs.com/manipulating/#syntactic-sugar](http://svgjs.com/manipulating/#syntactic-sugar)
- [http://svgjs.com/elements/](http://svgjs.com/elements/)

### Part 2

![bee](https://media.giphy.com/media/H80pstVGYkK6Q/giphy.gif)

__In part 2, your challenge is to draw a bee that moves whenever you click on a flower.__

1) The first step is to draw a bee.

2) The second step is to add all the parts of the bee to one bee group, for example:

```js
var beeGroup = drawing.group();

// the bee's body
drawing
  .ellipse(200, 30)
  .fill('yellow')
  .addTo(beeGroup);
```

3) To make something happen when you click a flower, you have to add a "click event listener". For example, to add a "click event listener" to a rectangle:

```js
var moveBee = function(mouseEvent) {
  // this will print the coordinates of the mouse
  // to the console
  console.log(mouseEvent.x, mouseEvent.y);
}

drawing
  .rect(100, 200)
  .on('click', moveBee);
```

Now open up the inspector to the console and try clicking on the rectangle. You should see two numbers print out.

4) You have to figure out how to make the `moveBee` function actually move your bee to the right place.

