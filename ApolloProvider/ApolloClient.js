'use client'
import { ApolloProvider } from "@apollo/client";
import createApolloClient from '@/app/login/aplloClient';

import React from 'react'

const ApolloClient = ({ children }) => {
  const client = createApolloClient();
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  )
}

export default ApolloClient
