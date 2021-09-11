const express = require('express');
//import Apollo server 
const {ApolloServer} = require('apollo-server-express')
const {typeDefs, resolvers} = require('./schemas')
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();
//create a new apollo server 
const server = new ApolloServer ({
  typeDefs,resolvers
})
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//integrate ApolloServer with the express app as middleware 
server.applyMiddleware({app})

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    //log where we can go to test our gql api 
    console.log(`se gql at http://localhost:${PORT}${server.graphqlPath}`)
  });
});
