import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/supreme2580/web3cmsprotocol",
  cache: new InMemoryCache(),
});

export default client;