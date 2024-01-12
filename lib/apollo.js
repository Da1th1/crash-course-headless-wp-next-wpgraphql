import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `${process.env.NEXT_WORDPRESS_API_URL}/graphql`,
    cache: new InMemoryCache(),
})