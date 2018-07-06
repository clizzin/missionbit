### Digital Poetry Project

Inspiration by Young Hae Chang Heavy Industries:
- [ASÍ QUE LO LOGRASTE QUIÉN IBA A DECIRLO. FELICIDADES Y ¡BIENVENIDOS!](http://yhchang.com/AS%C3%8D_QUE_LO_LOGRASTE_QUI%C3%89N_IBA_A_DECIRLO._FELICIDADES_Y_%C2%A1BIENVENIDO!_S_V.html)
- [AH](http://yhchang.com/AH_V.html)

Young Hae Chang Heavy Industries are two artists based in Seoul, Korea. A lot of their work is about immigration, power, and other social justice issues.

Your project can be written in any language and be about anything you want at all. It does not need to be about a social issue. I am just using their work as an example because I think it shows how you can combine words and music and video in a simple way for a powerful effect.

### Steps

#### Setup

0) Create a new `digital-poetry-project` folder on your Desktop

1) In brackets, go to File -> Open Folder... and select your new `digital-poetry-project` folder.

2) Save a new `index.html` file into this folder. Make sure it has a `<body></body>` tag.

3) Save a new `main.js` file. Use a `<script>` tag to connect your script file (`main.js`) to your html page (`index.html`) like in the 9 flowers project. If you forget how, look at the `index.html` for your 9 flowers project.

4) Test to see if your script tag works by adding this line to your `main.js` file and loading the page:

```
document.write('Hello world again!')
```

5) For this project we're going to use a very popular library called jquery. Download it from [here](https://code.jquery.com/jquery-3.3.1.js) (ctrl + click -> save as...).

Then link it to your html page with another script tag.

#### Part 1: Editing HTML with JS

You can use javascript to modify HTML after the page loads.

1) First add a `<div>` with id="word-container" to your `<body>`:

```html
<html>
<body>
  <div id="word-container"></div>
</body>
</html>
```

2) Then, in `main.js`, write code that __selects__ the `<div>` with its id, and gives it a name. 

```js
var wordContainer = $('#word-container');
```

You can use any name you want as long as it doesn't have any spaces in it--I used the name "wordContainer".

__Don't forget__ to delete the `document.write` line that you used to test earlier.

3)  Finally, use the `html` function to change the text:
```js
wordContainer.html('I am a cool cat.');
```

You can also change the style:
```js
wordContainer.css('font-size', '50px');
wordContainer.css('padding', '20px');
```

#### Part 2: Listening for keypresses on the keyboard

What if we want the text to change whenever a key is pressed?

We need to use an __event listener__ and a __function__:

```js
var updateWords = function() {
  // this code will get "executed" or "run" whenever
  // a key is pressed on the keyboard

  // put the code that changes the text here
}

$(document).on('keypress', updateWords);
```

The event listener calls the function `updateWords` whenever the `'keypress'` event happens.

There are a bunch of other events you can listen for too. E.g. `'wheel'`, `'resize'`, `'dblclick'`, `'focus'`. Here is a complete list: [https://www.w3schools.com/jsref/dom_obj_event.asp](https://www.w3schools.com/jsref/dom_obj_event.asp).

__Before moving on,__ make sure your event listener works. After you load your page, when you press a key, the text should change. What should it change to, you ask? It should change to whatever you told it to change to in the `updateWords` function. 

#### Challenge 1

Your first challenge is to make the text in the `<div>` change to say how many times you have pressed a key whenever you press a key.

Here's what I mean.

When you load the page, it should look like this:
```
You have pressed a key 0 times.
```

After you press a key the first time, it should change to say:
```
You have pressed a key 1 times.
```

And after the second time:
```
You have pressed a key 2 times.
```

And so on.

You will need to use a new variable that keeps track of how many times you have pressed a key.

Here are some helpful resources:
- [Variables](https://www.w3schools.com/js/js_variables.asp)
- [If/Else Statements](https://www.w3schools.com/js/js_if_else.asp)
- [String Concatenation](http://2ality.com/2011/10/string-concatenation.html)
