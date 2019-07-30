import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';
import typeDefs from './typeDefs/index';

// Instantiate Express
const app = express();

// Set up DotEnv
dotenv.config();

// Define Resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello World'
  }
};

// Check Node Environment in order to activate GRAPHQL playground
const IS_DEV = process.env.NODE_ENV === 'development';

// Create GraphQL Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: IS_DEV
});

// Apply GraphQL Middleware to Express App
server.applyMiddleware({ app });

const PORT = process.env.PORT || 4000;

// Start GraphQL Server
app.listen(PORT, () =>
  console.log(`Server ready at http://localhost:${PORT}/graphql`)
);
