# gatsby-source-twitter-users

This source plugin for Gatsby will help you pull in twitter user object(s) into your Gatsby site

## Installation

```sh
# Install the plugin
yarn add gatsby-source-twitter-users 

or

npm i gatsby-source-twitter-users
```

In `gatsby-config.js`:

```js
module.exports = {
  plugins: [
  {
      resolve: 'gatsby-source-twitter-users',
      options: {
        //Keys and tokens from your twitter dev dashboard
        config: {
          consumer_key: <TWITTER_CONSUMER_KEY>,
          consumer_secret: <TWITTER_CONSUMER_SECRET>,
          bearer_token: <TWITTER_BEARER_TOKEN>,
        },
        //Comma Separated Twitter Handles
        users: '',
      },
    },
  ]
};
```

**NOTE:** To get a Twitter API key, secret, [sign up for a twitter developer account](https://developer.twitter.com/).

## Configuration Options

The configuration options for this plugin, you'll find them in your twitter [developer dashboard](https://developer.twitter.com/en/apps).

| Option            | Description                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `consumer_key`    | Your Twitter **consumer key**                                                                                                                                       |  |
| `consumer_secret` | Your Twitter **consumer secret**                                                                                                                                    |
| `bearer_token`    | Your Twitter **bearer token** generate by following the steps specified here: https://developer.twitter.com/en/docs/basics/authentication/guides/bearer-tokens.html |

**NOTE:** To get a `bearer_token`, you need to follow the steps specified [here](https://developer.twitter.com/en/docs/basics/authentication/guides/bearer-tokens.html).

### Example Configuration

```js
module.exports = {
  plugins: [
  {
      resolve: 'gatsby-source-twitter-users',
      options: {
        //Keys and tokens from your twitter dev dashboard
        config: {
          consumer_key: <TWITTER_CONSUMER_KEY>,
          consumer_secret: <TWITTER_CONSUMER_SECRET>,
          bearer_token: <TWITTER_BEARER_TOKEN>,
        },
        //Comma Separated Twitter Handles
        users: 'marvinjudehk,unicodeveloper,coder_blvck',
      },
    },
  ]
};
```

## Querying Twitter Users

Once the plugin is configured, the `allTwitterUser` query will be available to you
you can test it in your [GraphiQL Debugger](https:localhost:8000/___graphql)

## Note

Incorrect twitter handles will be simply omitted

Here’s an example query to load the user object(s) for the handles(s) you specified if your plugin configuration:

```gql
{
  allTwitterUser {
    edges {
      node {
        id
        name
        profile_image_url
        screen_name
        followers_count
        friends_count
        verified
      }
    }
  }
}
```

See the [Twitter API docs](https://developer.twitter.com/en/docs/tweets/data-dictionary/overview/user-object.html) for a complete list of fields that you can query

**I'm [@marvinjudehk](https://developer.twitter.com/marvinjudehk) on twitter, feel free to share if you find this useful**
