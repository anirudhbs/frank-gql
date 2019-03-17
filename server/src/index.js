const { GraphQLServer } = require("graphql-yoga")

const { prisma } = require("./generated/prisma-client")

const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const User = require("./resolvers/User")
const Link = require("./resolvers/Link")
const Subscription = require("./resolvers/Subscription")
const Vote = require("./resolvers/Vote")

// String! means info can never be null

// Every GraphQL schema has three special root types,
// these are called Query, Mutation and Subscription

async function main() {}

main().catch(err => {
  console.log(err)
})

const resolvers = {
  Query,
  Mutation,
  User,
  Link,
  Subscription,
  Vote
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return { ...request, prisma }
  }
})

server.start(() => {
  console.log("running on port http://localhost:4000")
})
