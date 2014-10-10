Tweet-saver
===========
Simple angular / bootstrap application that allows you to query for tweets. 
Uses html5 drag and drop + local storage. Created this project for learning purposes.

### Installation:
- Install git
- Install node.js
- Install grunt, in git bash type: ```npm install -g grunt-cli```
- Install bower, in git bash type: ```npm install -g bower```
- In git bash type: ```git clone https://github.com/Timoteus78/tweet-saver.git```
- Change directory to tweet-saver
- In git bash type: ```npm install```
- In git bash type: ```bower install```

### Running locally:
One way to run this application is by  using python's SimpleHTTPServer.
From within the tweet-saver folder run ```python -m SimpleHTTPServer [portnumber]```. 
In your browser go to ```localhost:[portnumber]```.

*Note: The data returned is the same as the Twitter API, but the structure may be slightly different due slight diffenences in how our library serializes/deserializes Twitter's response. Also, note that it's hosted on Heroku so it may take 30 seconds or so for the dyno to spin up but it should be quick if you use it consistently thereafter.*


### Application characteristics
- one page webapp
- search field
- column displaying 10 tweets based on query
- dragging and dropping
- HTML 5 local storage
- local storage count
- links opening in new tab
- double storage validation
- user image
