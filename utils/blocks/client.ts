import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client/core";
import fetch from "cross-fetch";

export const blockClient = new ApolloClient({
  link: new HttpLink({
    fetch,
    uri: "http://ec2-44-202-219-222.compute-1.amazonaws.com:8000/subgraphs/name/radioshackcreator/blocks-cronos",
  }),
  cache: new InMemoryCache(),
});
