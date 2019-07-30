import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import dotenv from 'dotenv';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

// Instantiate Express
const app = express();

// Set up DotEnv
dotenv.config();

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

// Set Port Number
const { PORT } = process.env;

// Start GraphQL Server
app.listen(PORT || 4000, () =>
  console.log(`Server ready at http://localhost:${PORT}/graphql`)
);
