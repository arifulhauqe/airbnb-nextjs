import { ApolloServer, gql } from 'apollo-server-micro';
import type { NextApiRequest, NextApiResponse } from 'next';

// Define your GraphQL schema using the gql template literal
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// Define your resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
};

// Create an instance of ApolloServer
const server = new ApolloServer({ typeDefs, resolvers });

// Export the API route handler
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Use the Apollo server to handle the request
  await server.start();
  return server.createHandler({ path: '/api/graphql' })(req, res);
}

// Set the config to allow body parsing for GraphQL requests
export const config = {
  api: {
    bodyParser: false,
  },
};