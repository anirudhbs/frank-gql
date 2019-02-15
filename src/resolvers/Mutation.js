const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const { APP_SECRET, getUserId } = require("../utils")

async function signup(parent, args, context) {
  const password = await bcrypt.hash(args.password, 5)
  const user = await context.prisma.createUser({ ...args, password })
  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

async function login(parent, args, context) {
  const { email, password } = args
  const user = await context.prisma.user({ email })
  if (!user) {
    throw new Error("No user found")
  }

  const valid = await bcrypt.compare(password, user.password)
  if (!valid) {
    throw new Error("Invalid password")
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET)

  return {
    token,
    user
  }
}

function post(parent, args, context) {
  const { url, description } = args
  const id = getUserId(context)
  return context.prisma.createLink({
    url,
    description,
    postedBy: {
      connect: { id }
    }
  })
}

async function vote(parent, args, context) {
  const userId = getUserId(context)

  const linkExists = await context.prisma.$exists.vote({
    user: { id: userId },
    link: { id: args.linkId }
  })

  if (linkExists) {
    throw new Error("Already voted for this post!")
  }

  return context.prisma.createVote({
    user: { connect: { id: userId } },
    link: { connect: { id: args.linkId } }
  })
}

module.exports = {
  signup,
  login,
  post,
  vote
}
