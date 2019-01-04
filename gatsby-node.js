const Twitter = require('twitter')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins

  let { config, users } = configOptions

  //Create params for fetching users see:https://developer.twitter.com/en/docs/accounts-and-users/follow-search-get-users/api-reference/get-users-lookup
  let params = { screen_name: users }

  //Initialize Twitter Client
  var client = new Twitter({
    ...config,
  })

  // Helper function that processes a user to match Gatsby's node structure
  const processUser = user => {
    const nodeId = createNodeId(`twitter-user-${user.id}`)
    const nodeContent = JSON.stringify(user)
    const nodeData = Object.assign({}, user, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `TwitterUser`,
        content: nodeContent,
        contentDigest: createContentDigest(user),
      },
    })

    return nodeData
  }

  return client
    .get('users/lookup', params)
    .then(users => {
      users.forEach(user => {
        const nodeData = processUser(user)
        createNode(nodeData)
      })
    })
    .catch(error => console.log(error))
}
