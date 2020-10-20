import React from "react";
import ReactDom from "react-dom";
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from 'react-apollo'
import { App } from './App.js'

const client = new ApolloClient({
    uri: 'https://petgram-server-luisglopez7777.vercel.app/graphql'
})

ReactDom.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById("app"));

