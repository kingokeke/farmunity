import { ApolloServer, gql } from "apollo-server-express";
import express from "express";
import dotenv from "dotenv";

// Instantiate Express
const app = express();

// Set up DotEnv
dotenv.config();

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

const PORT = process.env.PORT || 4000;

// Start GraphQL Server
app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT}/graphql`)
);
