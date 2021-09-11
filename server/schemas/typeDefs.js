//import the gql  tagged implemented fxn 
const {gql} = require('apollo-server-express')

//create typedefs
const typeDefs = gql `
    type Query {
        helloWorld: String
    }
`;

//export typedegs
module.exports = typeDefs;