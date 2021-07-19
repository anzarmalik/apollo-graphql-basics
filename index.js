const {ApolloServer,gql} = require('apollo-server');

const userArray = [{id:'0',name:'anzar'},{id:'1',name:'syed'}];

const typeDefs = gql`

   type User {
      id:ID
      name : String
   }

   type Query {
       message : String!,
       users : [User!]!,
       user(id: String) :[User!]!,
   }

  type Mutation {
    createUser(name: String!): User
   }

  `;


const resolvers = {
    
    Query:{
        message:()=>{
             return " this is message "
        },
        users:()=>{
            return userArray
       },
       user:(parent ,{id})=>{
       console.log("🚀 ~ file: index.js ~ line 29 ~ id 00000", id)
           return userArray.filter((user)=>{
                 return user.id === id ;
           })
      }

    },

    Mutation:{
        createUser :(parent,args)=>{
              const {name} = args ;
              const id = userArray.length;
              const userforArray = {
                  id,
                  name
              };
              userArray.push(userforArray);
              return userforArray
        }
    }
}

const server  = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen({
    port:4000
}).then((res)=>{
    console.log("Server listening     "+res.url)
}).catch((err)=>{
    console.log(err)
})