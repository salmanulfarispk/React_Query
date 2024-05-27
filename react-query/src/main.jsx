import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {QueryClient,QueryClientProvider} from "@tanstack/react-query"


const queryClient=new QueryClient({
  
  defaultOptions: {queries: {gcTime: 10* (60 *1000)} }, //If the data is not accessed within the 10-minute gcTime window, it will be removed from the cache to free up memory.
})      //in this page firstly defining providers
  
ReactDOM.createRoot(document.getElementById('root')).render(   
  <React.StrictMode>
  <QueryClientProvider client={queryClient}>    
    <App />
   </QueryClientProvider>           
  </React.StrictMode>,
)
