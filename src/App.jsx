// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


// import Api2 from "./Component/Api2";
// import Api1 from "./Component/Api1";
// import Reference from "./ComponentFunction/Reference"
// import Form from "./ComponentFunction/Form"
// import { Route, Routes, Link } from "react-router-dom";
// import ToastApi from "./ComponentFunction/ToastApi";
// import Cardcomp from "./ComponentFunction/Cardcomp"
// import Navbar from "./ComponentFunction/Navbar";
// import Todolist from "./ComponentFunction/Todolist"

import Simple from "./ComponentFunction/Simple";
function App() {
  return (
    <div>
      {/* <Api2/>
   <Reference/>
   <Api1/> */}



{/* 
      <nav style={{marginLeft:"100px",marginBottom:"50px"}}>
      <div >
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a class="navbar-brand" href="#">Hidden brand</a>
          <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
            <li class="nav-item active">
            <Link to="/form" className="p-4">no1</Link>
            </li>
            <li class="nav-item">
            <Link to="/toast" className="p-4">no2</Link>
            </li>
            <li class="nav-item">
            <Link to="/card" className="p-4">no3</Link>
            </li>
          </ul>
          <form class="form-inline my-2 my-lg-0">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
            <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
          </form>
        </div>
      </nav>
      </div>
      </nav> */}
      {/* <Routes>

        <Route path="/form" element={<Form />} />
        <Route path="/toast" element={<ToastApi />} />
        <Route path="/card" element={<Cardcomp />} />

      </Routes> */}
      {/* <Navbar/> */}
      {/* <Todolist/> */}
      
      <Simple/>
    </div>
  )
}
export default App