const { GraphQLServer } = require("graphql-yoga")

const { prisma } = require("./generated/prisma-client")

const Query = require("./resolvers/Query")
const Mutation = require("./resolvers/Mutation")
const User = require("./resolvers/User")
const Link = require("./resolvers/Link")

// String! means info can never be null

// Every GraphQL schema has three special root types,
// these are called Query, Mutation and Subscription

async function main() {
  const link = await prisma.createLink({
    url: "free21savage.org",
    description: "#Free21"
  })

  console.log(`created new Link ${link.id}`)

  const allLinks = await prisma.links()
  console.log(allLinks.length)
}

main().catch(err => {
  console.log(err)
})

const resolvers = {
  Query,
  Mutation,
  User,
  Link
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
