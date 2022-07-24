import { GraphQLClient } from 'graphql-request'

export const request = async (query = {}) => {
  const graphQLClient = new GraphQLClient(process.env.CRAFTCMS_API_URL, {
    headers: {
      authorization: process.env.CRAFTCMS_API_AUTHENTICATION,
    },
  })
  try {
    return await graphQLClient.request(query)
  } catch (error) {
    console.log(error)
    return error
  }
}
