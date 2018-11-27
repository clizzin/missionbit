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
