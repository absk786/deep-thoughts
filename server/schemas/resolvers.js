const {User, Thought} = require('../models')

const resolvers = { 
    Query: {
        //get all users
        users: async () => {
            return User.find().select('-__v -password').populate('friends').populate('thoughts');
        },
        //get users by usernmae
        user: async (parent, {username}) => {
            return User.findOne({username}).select('-__v -passwrod').populate('friends').populate('thoughts')
        },
        //get all thoughts
        thoughts: async (parent, {username}) => {
            const params = username? {username} : {};
            return Thought.find(params).sort({createdAt: -1}) ;
        },
        //get thought by id
        thought: async (parent, _id) => {
            return Thought.findOne({_id})
        },
     }
};

// Now when we query thoughts, we will perform a .find() method on the Thought model. We're also returning the thought data in descending order, as can be seen in the .sort() method that we chained onto it. 
module.exports = resolvers;
