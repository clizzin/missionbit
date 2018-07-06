var data = [
  {
    words: 'This',
    x: 200,
    y: 200,
    size: '100px'
  },
  {
    words: 'is only',
    x: 300,
    y: 300,
    size: '120px'
  },
  {
    words: 'the beginning...',
    x: 300,
    y: 500,
    size: '140px'
  }
];
var dataBookmark = 0;
var wordContainer = document.getElementById('word-container');
wordContainer.style.position = 'absolute';

var updateWords = function() {
  var nextData = data[dataBookmark];
  wordContainer.innerText = nextData.words;
  wordContainer.style.left = nextData.x;
  wordContainer.style.top = nextData.y;
  wordContainer.style['font-size'] = nextData.size;

  dataBookmark = dataBookmark + 1;

  if (dataBookmark === data.length) {
    dataBookmark = 0;
  }
};

document.addEventListener('keypress', updateWords);
