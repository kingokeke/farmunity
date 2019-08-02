// TYPE DEFINITION SCHEMA FOR USER RESOURCE

import { gql } from 'apollo-server-express';

// Define Type Schema
const userTypeDefs = gql`
  extend type Query {
    getAllUsers: [User!]!
  }

  extend type Mutation {
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      phone: String!
      password: String!
      role: String!
      streetAddress: String
      localGovt: String
      state: String
      profilePic: String
    ): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    phone: String!
    role: String!
    streetAddress: String
    localGovt: String
    state: String
    profilePic: String
  }
`;

export default userTypeDefs;
