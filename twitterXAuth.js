function twitterXAuth(username, password)
{
    // Prepare the YQL Query 
    var query_xAuth = "select * from twitter.xauth.token where oauth_consumer_secret='" + consumer_secret +
	"' AND oauth_consumer_key='" + consumer_key +
	"' AND username='" + username +
	"' AND password='" + password + "'";
    
    // The YQL url for xAuth
    var yql_xAuth = "https://query.yahooapis.com/v1/public/yql?q="+encodeURIComponent(query_xAuth)+"&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys"; 

    // Get the access_token & access_token_secret
    $.getJSON(yql_xAuth, function(data) {

	var result = data['query']['results']['result'];
	
	if (result.indexOf("&") == -1)
	{
	    if (result.indexOf("Tunnel Connection Failed") > -1)
	    {
		// Sometimes there are some problem with YQL
		// Then we just try again. :D
		twitterXAuth(username, password);
		return;
	    }
	}

	// Extract the oauth_token and oauth_token_secret
	var xAuth = result.split("&");
	var oauth_token = xAuth[0].split("=")[1];
	var oauth_token_secret = xAuth[1].split("=")[1];

	// Construct the return object, and return it. 
	var oauth = new Object();
	oauth.token = oauth_token;
	oauth.token_secret = oauth_token_secret;
	return oauth;
    });
}
