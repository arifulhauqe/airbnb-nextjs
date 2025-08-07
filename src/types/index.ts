// src/types/index.ts

// This file exports TypeScript types and interfaces used throughout the application for type safety.

// Example of a type for a User
export interface User {
    id: string;
    name: string;
    email: string;
}

// Example of a type for a Post
export interface Post {
    id: string;
    title: string;
    content: string;
    authorId: string;
}

// Example of a type for a GraphQL response
export interface GraphQLResponse<T> {
    data: T;
    errors?: Array<{ message: string }>;
}

// Add more types and interfaces as needed for your application.