import express from 'express';
import cors from 'cors';
import { ApolloServer } from '@apollo/server';
import { expressMiddleware as apolloMiddleware } from '@apollo/server/express4';
import {readFile} from 'fs/promises';
import {resolvers} from './graphql/resolvers/resolvers';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cookieParser from 'cookie-parser';
import { authMiddleware } from './lib/middleware/auth-middleware';



dotenv.config();
const DB = process.env.DB_URL;
const PORT = process.env.PORT || 9000;

const startServer = async() => {
  const app = express();

  app.use(cors(), express.json(), cookieParser(), authMiddleware);

  const typeDefs = await readFile('src/graphql/schemas/schema.graphql', 'utf-8');

  const apolloServer = new ApolloServer(
    {
      typeDefs,
      resolvers,
      introspection: true,
    });

  await apolloServer.start();
  
  const getContext = async({ req, res }) => {
    return {req, res, auth: req.auth};
  }

  app.use('/graphql', apolloMiddleware(apolloServer, { 
    context: getContext
  }));

  await mongoose.connect(DB);

  app.listen(PORT, () => {
    console.log(`server started AT ${PORT}`);
    console.log(`graphql playground: http://localhost:${PORT}/graphql`)
  })
}

startServer()