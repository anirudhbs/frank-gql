const { GraphQLServer } = require("graphql-yoga")

const typeDefs = `
type Query {
  info: String!
}
`
// String! means info can never be null

const resolvers = {
  Query: {
    info: () => `This is what Frank Ocean is telling you, Hello!`
  }
}

const server = new GraphQLServer({
  typeDefs,
  resolvers
})

server.start(() => {
  console.log("running on port http://localhost:4000")
})
