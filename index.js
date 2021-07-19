const {ApolloServer,gql} = require('apollo-server');

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

  `;


const resolvers = {
    Query:{

        message:()=>{
             return " this is message "
        },
        users:()=>{
            return [{id:'1',name:'anzar'},{id:'2',name:'syed'}]
       },
       user:(parent ,{id})=>{
       console.log("🚀 ~ file: index.js ~ line 29 ~ id 00000", id)
           return [{id:'1',name:'anzar'},{id:'2',name:'syed'}].filter((user)=>{
                 return user.id === id ;
           })
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