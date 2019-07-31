// TYPE DEFINITION SCHEMA FOR USER RESOURCE

import { gql } from 'apollo-server-express';

// Define Type Schema
const userTypeDefs = gql`
  extend type Mutation {
    addUser(firstName: String!, password: String!): User
  }

  type User {
    id: ID!
    firstName: String!
    password: String!
  }
`;

export default userTypeDefs;
