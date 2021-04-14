import ApolloClient from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:8000",
});

export default client;
