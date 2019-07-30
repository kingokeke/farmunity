import { ApolloServer, gql } from "apollo-server-express";
import express from "express";

// Instantiate Express
const app = express();

// Define Type Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define Resolvers
const resolvers = {
  Query: {
    hello: () => "Hello World"
  }
};

// Create GraphQL Server
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// Apply GraphQL Middleware to Express App
server.applyMiddleware({ app });

// Start GraphQL Server
app.listen({ port: 4000 }, () =>
  console.log(`Server ready at http://localhost:4000/graphql`)
);
