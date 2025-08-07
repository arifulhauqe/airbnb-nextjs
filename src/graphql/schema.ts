// src/graphql/schema.ts

import { gql } from 'apollo-server-micro';

// Define the GraphQL schema using the Schema Definition Language (SDL)
const typeDefs = gql`
  type Query {
    hello: String
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }

  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

// Define the resolvers for the schema
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
    users: async () => {
      // Logic to fetch users from the database or another source
      return [];
    },
  },
  Mutation: {
    createUser: async (_: any, { name, email }: { name: string; email: string }) => {
      // Logic to create a new user in the database
      return { id: '1', name, email }; // Example return value
    },
  },
};

// Export the type definitions and resolvers
export { typeDefs, resolvers };