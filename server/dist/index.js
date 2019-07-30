"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
// Instantiate Express
const app = express_1.default();
// Set up DotEnv
dotenv_1.default.config();
// Define Type Schema
const typeDefs = apollo_server_express_1.gql `
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
const server = new apollo_server_express_1.ApolloServer({
    typeDefs,
    resolvers
});
// Apply GraphQL Middleware to Express App
server.applyMiddleware({ app });
const PORT = process.env.PORT || 4000;
// Start GraphQL Server
app.listen(PORT, () => console.log(`Server ready at http://localhost:${PORT}/graphql`));
//# sourceMappingURL=index.js.map