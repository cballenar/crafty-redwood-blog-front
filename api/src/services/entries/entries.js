import { gql } from 'graphql-tag'

import { request } from 'src/lib/db'

export const entries = async () => {
  const query = gql`
    query EntriesQuery {
      entries {
        __typename
        title
      }
    }
  `
  const response = await request(query)
  return response['entries']
}
