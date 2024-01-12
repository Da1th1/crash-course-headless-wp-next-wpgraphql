import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
    uri: `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/graphql`, // Use NEXT_PUBLIC_ prefix
    cache: new InMemoryCache(),
})
