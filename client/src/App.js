import './App.css';
import React, { useState } from 'react';
import {BrowserRouter, Routes, Router} from 'react-router-dom';
import Main from '../views/Main';
import ProductForm from "./components/ProductForm";

const App = () => {

    return(
        <div>
            <BrowserRouter>
                <Routes>
                    <Routes element = {<Main/>} path="/home" default />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

// function App() {
//   return (
//     <div className="App">
//       <ProductForm />
//     </div>
//   );
// }

export default App;
