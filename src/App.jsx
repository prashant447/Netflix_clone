import React from 'react'
import './App.scss'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Component/Home/Home'
import Header from './Component/Header/Header'

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
        <Routes>
          <Route exact path='/' element = {<Home/>}></Route>
        </Routes>
    
    
    
    </BrowserRouter>
    </>
  )
}

export default App
