// ROOT TYPE DEFINITION FOR GRAPHQL SCHEMA
// NOTE: DO NOT EDIT

import { gql } from 'apollo-server-express';

// Define Type Schema
const rootTypeDefs = gql`
  type Query {
    _: String
  }

  type Mutation {
    _: String
  }

  type Subscription {
    _: String
  }
`;

export default rootTypeDefs;
