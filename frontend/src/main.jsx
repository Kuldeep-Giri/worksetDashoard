import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { DataProvider } from './context/dataContext.jsx'
import { BrowserRouter } from 'react-router-dom'
import { AuthProvider } from './context/authContext.jsx'
import { GetDataProvider } from './context/getDataContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <GetDataProvider>
  <AuthProvider>
    <DataProvider>
    <App />
    </DataProvider>
    </AuthProvider>
    </GetDataProvider>
    </BrowserRouter>
  ,
)
