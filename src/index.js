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
    },
    delete: (parent, args) => {
      const { id } = args
      const indexOfLink = links.findIndex(link => link.id === id)
      const link = links[indexOfLink]
      links.splice(indexOfLink, 1)
      return link // return type has to be Link, as specified in schema
    },
    update: (parent, args) => {
      const { id, url = null, description = null } = args
      const indexOfLink = links.findIndex(link => link.id === id)

      if (url !== null) {
        links[indexOfLink].url = url
      }

      if (description !== null) {
        links[indexOfLink].description = description
      }

      return links[indexOfLink]
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
