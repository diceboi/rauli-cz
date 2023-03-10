import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://rauli.hu/graphql",
    cache: new InMemoryCache(),
});

export default client;