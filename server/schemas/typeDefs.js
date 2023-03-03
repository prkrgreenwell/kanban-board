const { gql } = require('apollo-server-express');

const typeDefs = gql`
type User {
    _id: ID
    username: String
    email: String
    password: String
}

type Project {
    _id: ID
    title: String
    userId: ID
    user: User
    tasks: [Task]
  }

type Task {
    _id: ID
    title: String
    projectId: String
}

type Auth {
    token: ID!
    user: User
  }
  
type Query {
    projects: [Project]
    tasks(projectId: ID!): [Task]
}

type Mutation {
    createProject(title: String!): Project
    createTask(title: String!, projectId: ID!): Task
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
}`

module.exports = typeDefs;