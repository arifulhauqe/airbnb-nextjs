// src/graphql/queries.ts

// This file exports GraphQL query functions that can be used to fetch data from the server.
// Each function corresponds to a specific query defined in the GraphQL schema.

// Example query function to fetch a list of items
export const GET_ITEMS = `
  query GetItems {
    items {
      id
      name
      description
    }
  }
`;

// Example query function to fetch a single item by ID
export const GET_ITEM_BY_ID = (id: string) => `
  query GetItemById {
    item(id: "${id}") {
      id
      name
      description
    }
  }
`; 

// Add more query functions as needed based on your GraphQL schema.