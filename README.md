twitterXAuth
==============

This is a pure JavaScript implementation for twitter xAuth (https://dev.twitter.com/docs/oauth/xauth), which exchanges the username/password pair with access_token and access_token_secret of twitter.

Apply for xAuth for twitter
----------------------------

In order to use this function, you need to register as a twitter developer (of course), and you need to send also apply for the xAuth priviledge. After that you could use your consumer_key and consumer_secret to access xAuth of twitter.

Usage
----------------------------

Before using this function, you need to get your consumer_secret and consumer_key from somewhere and make them global variables. The usage of this function is quite straightforward: you just pass the username and password to the function, and the access_token and the access_token_secret will be return within an object. You could use them to make further requests to twitter APIs, e.g. get all the tweets in the user's timeline.

Yahoo YQL Table
----------------------------

The tricks behind this implementation is that I used YQL for construct the xAuth requests and get the access_tokens. Yahoo is a great company. 

With similar tricks you can store your consumer_key and consumer_secret in YQL Table, which can prevent them exposure in your JavaScript files. 