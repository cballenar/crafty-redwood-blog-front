import gql from 'graphql-tag'

export const schema = gql`
  type Query {
    entries: [EntryInterface] @skipAuth
  }
  interface EntryInterface {
    id: String
    title: String
  }
  type posts_default_Entry implements EntryInterface {
    id: String
    title: String
  }
`
