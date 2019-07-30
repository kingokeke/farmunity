"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const express_1 = __importDefault(require("express"));
// Instantiate Express
const app = express_1.default();
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
// Start GraphQL Server
app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000/graphql`));
//# sourceMappingURL=index.js.map