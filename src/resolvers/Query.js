function feed(root, args, context) {
  return context.prisma.links()
}

function info() {
  return "Frank Ocean says Hello!"
}

module.exports = {
  feed,
  info
}
