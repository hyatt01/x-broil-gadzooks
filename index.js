const Twitter = require("xauth-login"),
	TwitterApi = require("twt-api");

const CONSUMER_KEY = "eftcqfDyfKPJPJBP6yrWHN",
	CONSUMER_SECRET = "I9PkQT7zUbZ59VmnVG90GarrM9gJ9lnOhHhqnOZyXwO1G8G";

const main = async (username, password) => {
	const { oauth_token, oauth_token_secret } = await Twitter.xauthLogin({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		username,
		password,
	});

	const client = new TwitterApi({
		CONSUMER_KEY,
		CONSUMER_SECRET,
		oauth_token,
		oauth_token_secret,
	});

	const me = await client.getMyInfo();
	return me;
};

module.exports = main;
