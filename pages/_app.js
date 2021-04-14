import "../styles/globals.css";
import { ApolloProvider } from "@apollo/client";
import client from "../src/apollo";

const App = ({ Component, pageProps }) => {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default App;
