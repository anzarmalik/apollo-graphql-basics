const {ApolloServer,gql} = require('apollo-server');

const typeDefs = gql`
 
   type Query {
       message : String!  
   }
`

const resolvers = {
    Query:{
        message:()=>{
             return " this is message "
        }
    }
}

const server  = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen({
    port:3000
}).then((res)=>{
    console.log("Server listening"+res.url)
}).catch((err)=>{
    console.log(err)
})