const { GraphQLServer } = require("graphql-yoga")

const { prisma } = require("./generated/prisma-client")

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
  Query: {
    info: () => "Frank Ocean says Hello!",
    feed: (root, args, context) => {
      return context.prisma.links()
    }
  },
  Mutation: {
    post: (root, args, context) => {
      const { url, description } = args
      return context.prisma.createLink({ url, description })
    }
  }
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: { prisma }
})

server.start(() => {
  console.log("running on port http://localhost:4000")
})
