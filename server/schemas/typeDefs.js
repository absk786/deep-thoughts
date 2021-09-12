//import the gql  tagged implemented fxn 
const {gql} = require('apollo-server-express')

//create typedefs
const typeDefs = gql `
type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

  type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }
 type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

type Query {
        users:[User]
        user(username:String!):User
        thoughts(username:String): [Thought] 
        thought(_id:ID!): Thought
    }
`;

//we're instructing our query that we'll return an array, as noted by the [] square brackets around the returning data, Thought
//With this in place, we have now set it up so that when we run the thoughts query, we can also list the reactions field to get back an array of reaction data for each thought


module.exports = typeDefs;