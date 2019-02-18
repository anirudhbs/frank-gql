async function feed(root, args, context) {
  const where = args.filter
    ? {
        OR: [{ description_contains: args.filter }, { url_contains: args.filter }]
      }
    : {}

  const links = await context.prisma.links({
    where,
    skip: args.skip,
    first: args.first
  })
  return links
}

function info() {
  return "Frank Ocean says Hello!"
}

module.exports = {
  feed,
  info
}
