const { GraphQLServer } = require("graphql-yoga")
const { links } = require("./dummy-apis")

const typeDefs = `
type Query {
  info: String!
  feed: [Link!]!
}

type Link {
  id: ID!
  url: String!
  description: String!
}
`

// String! means info can never be null

// Every GraphQL schema has three special root types,
// these are called Query, Mutation and Subscription

const resolvers = {
  Query: {
    info: () => "Frank Ocean says Hello!",
    feed: () => links
  },
  Link: {
    id: parent => parent.id,
    url: parent => parent.url,
    description: parent => parent.description
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log("running on port http://localhost:4000")
})
