import { gql } from 'apollo-server-express';

// Define Type Schema
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

export default typeDefs;
