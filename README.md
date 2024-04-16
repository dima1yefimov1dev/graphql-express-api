## Features
- GraphQl APi composed with express
- using schema-first
- jwt auth using cookies, custom middleware and graphQL context
- mongoDb
- mongoose

## How to start:
1. Install dependencies
```bash
npm ci
```
2. create .env file in root of your project and fill it with necessary variables:
  ```bash
  DB_URL= 'url to connet with mongoose'
  JWT_ACCESS_SECRET_KEY=jwt-secret-key
  SALT='salt for hashing password'
  PORT='port u want to use'
  ```


4. start in dev mode :
 ```bash
 npm run dev
 ```
4. if u want ot start it in production - build project:

```bash
npm run build

and start:
npm start
```

## Queries and Mutations: 

| Type               | Fields                                           | Description                             |
|--------------------|--------------------------------------------------|-----------------------------------------|
| Query              |                                                  | Queries for retrieving data             |
|                    | `users: [User!]`                                | Get a list of all users                 |
|                    | `user(id: ID!): User!`                          | Get a single user by ID                 |
|                    | `products: [Product!]`                          | Get a list of all products              |
|                    | `product(id: ID!): Product!`                    | Get a single product by ID              |
| User               |                                                  | Represents a user                        |
|                    | `_id: ID!`                                       | Unique identifier for the user          |
|                    | `name: String!`                                 | User's name                             |
|                    | `username: String!`                             | User's username                         |
|                    | `email: String!`                                | User's email address                    |
| Product            |                                                  | Represents a product                     |
|                    | `_id: ID!`                                       | Unique identifier for the product       |
|                    | `title: String!`                                | Title of the product                    |
|                    | `description: String!`                          | Description of the product              |
|                    | `price: String!`                                | Price of the product                    |
| Input              |                                                  | Input types for mutations                |
|                    | `CreateProductInput`                             | Input for creating a product            |
|                    | `UpdateProductInput`                             | Input for updating a product            |
|                    | `CreateUser`                                    | Input for user registration             |
|                    | `LoginInput`                                    | Input for user login                    |
| AuthPayload        |                                                  | Represents authentication token payload |
|                    | `token: String`                                 | Authentication token                    |
| Mutation           |                                                  | Mutations for creating, updating, and deleting data |
|                    | `createProduct(input: CreateProductInput): Product` | Create a new product               |
|                    | `deleteProduct(id: ID!): Product`               | Delete a product                        |
|                    | `updateProduct(id: ID!, input: UpdateProductInput): Product` | Update a product |
|                    | `registration(input: CreateUser): User`         | Register a new user                     |
|                    | `login(input: LoginInput): AuthPayload`         | Login and get authentication token     |
|                    | `logout: String`                                | Logout                                  |

   
