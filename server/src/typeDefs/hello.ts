import { gql } from 'apollo-server-express';

// Define Type Schema
const helloTypeDefs = gql`
  extend type Query {
    hello: String
  }
`;

export default helloTypeDefs;
