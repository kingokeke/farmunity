import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';

// Instantiate Express
const app = express();

// Set up DotEnv
dotenv.config();

(async () => {
  try {
    // Get DB connection parameters from environment variables
    const { DB_HOST, DB_PORT, DB_NAME } = process.env;

    // Connect to database
    await mongoose.connect(`mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`, {
      useNewUrlParser: true
    });

    console.log('Connected to MongoDB database');

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
  } catch (err) {
    console.log(err);
  }
})();
