import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const client = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "http://ec2-3-83-67-239.compute-1.amazonaws.com:8000/subgraphs/name/radioshackcreator/exchange-cronos",
  }),
  cache: new InMemoryCache(),
});
