 ##Day 2: Refactor with Express

###Step 1: Install Express
Let's install Express to get started.

```
npm install --save express
```

This saves express to your package.json

Now we need to require express and instantiate it. To get familiar with express, get familiar with the [guide](http://expressjs.com/guide.html).

How would setting up a server be different from setting up a server in Node?

There are three steps to setting up an express server:
* Require the express library: `var express = require('express');`
* Instantiate the express app: `var app = express();`
* Have the app listen on a port: `app.listen(9001);`

###Step 2: Create GET endpoint

In express, listening on endpoints is as easy as calling `get` or `post` on the app itself. For example:

```javascript
app.get('/', function(req, res) {
	res.send(JSON.stringify(messages));
});
```

Pretty cool right?

Now create your `get endpoint for your server.js

###Step 9: Create POST endpoint

Remember all of the crappy code we had to write to get POST data? Express and body-parser make this a lot simpler.

* Install `body-parser` as a npm module. See the express install command above for reference
* Require `body-parser` in your server.js, assign it to a variable called `bodyParser`
* Make a POST endpoint that will look very much like your GET, but that reads `req.body` to get the message data.
* In order to get the POST data without using .on('data') and .on('end'), we'll use bodyParser:

```javascript
app.use(bodyParser.json());
```

bodyParser is *middleware*, meaning it runs before every request. It automatically parses the body of requests and puts it together in a nice `req.body` property.

* finish your POST endpoint by grabbing the req.body and adding the messages to your messages array

Your server.js might look something like this when it's done: https://gist.github.com/cahlan/7027611

###Step 3: Refactor header writing into middlware

Let's create our own middleware to deal with headers.

```javascript
app.use(function(req, res, next) {
 //middleware goes here
});
```

Anything that runs in the above function will happen before every request is processed. It's a great place to put header modification.

Use your own custom middleware to add the appropriate headers to your server.js. It should look something like this: https://gist.github.com/jacob-israel-turner/3ccb040963cb7f59acb2
