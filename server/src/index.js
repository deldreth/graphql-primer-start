const { ApolloServer } = require("apollo-server");
const { importSchema } = require("graphql-import");
const { Prisma } = require("prisma-binding");
const path = require("path");

const resolvers = {};

const typeDefs = importSchema(path.resolve("src/schema.graphql"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      typeDefs: "src/generated/prisma.graphql",
      endpoint: "http://localhost:4466"
    })
  })
});

server.listen({ port: 4000 }).then(({ url, subscriptionsUrl }) => {
  console.log(
    `🐈  🐈  🐈  ready at ${url}, subscriptions at ${subscriptionsUrl}`
  );
});
