# My Next.js App

This project is a Next.js application built with TypeScript, featuring Storybook for component development, REST and GraphQL APIs for data handling, and styled with Tailwind CSS. 

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Running the Application](#running-the-application)
- [Running Storybook](#running-storybook)
- [API Endpoints](#api-endpoints)
- [Contributing](#contributing)

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd my-nextjs-app
npm install
```

## Project Structure

The project is organized as follows:

```
my-nextjs-app
├── src
│   ├── pages               # Contains the application pages
│   ├── components          # Contains reusable components
│   ├── graphql             # Contains GraphQL queries, mutations, and schema
│   ├── styles              # Contains global styles
│   └── types               # Contains TypeScript types and interfaces
├── .storybook              # Contains Storybook configuration
├── public                  # Contains static assets
├── .eslintrc.js           # ESLint configuration
├── .gitignore              # Git ignore file
├── next-env.d.ts          # TypeScript definitions for Next.js
├── next.config.js         # Next.js configuration
├── package.json            # NPM configuration
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
├── README.md               # Project documentation
└── DOCUMENTATION.md        # Additional documentation
```

## Technologies Used

- **Next.js**: A React framework for server-side rendering and static site generation.
- **TypeScript**: A superset of JavaScript that adds static types.
- **Storybook**: A tool for developing UI components in isolation.
- **REST API**: A standard for building web services.
- **GraphQL**: A query language for APIs that allows clients to request only the data they need.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.

## Running the Application

To run the application in development mode, use the following command:

```bash
npm run dev
```

The application will be available at `http://localhost:3000`.

## Running Storybook

To run Storybook for developing and testing components, use the following command:

```bash
npm run storybook
```

Storybook will be available at `http://localhost:6006`.

## API Endpoints

- **GraphQL API**: Accessible at `/api/graphql`
- **REST API**: Accessible at `/api/rest`

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.