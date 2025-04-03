"use client";
import store from "./_redux/store"
import { Provider } from "react-redux";
import React, { ReactNode, useState } from 'react'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient=new QueryClient();

export default function Providers({children}:{children:ReactNode}) {

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
    </Provider>
  )
}
