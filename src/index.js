const { GraphQLServer } = require("graphql-yoga")
const { generate } = require("shortid")

const { links } = require("./dummy-apis")

// String! means info can never be null

// Every GraphQL schema has three special root types,
// these are called Query, Mutation and Subscription

const resolvers = {
  Query: {
    info: () => "Frank Ocean says Hello!",
    feed: () => links,
    link: (parent, args) => links.filter(link => link.id === args.id)[0]
  },
  Mutation: {
    post: (parent, args) => {
      const { description, url } = args
      const link = {
        id: `${generate()}`,
        url,
        description
      }
      links.push(link)
      return link
    }
  }
}

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers
})

server.start(() => {
  console.log("running on port http://localhost:4000")
})
