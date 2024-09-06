import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/*" element={<App />} />
        {/* <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/homepage' element={<Homepage/>} />
        <Route path="/database-mahasiswa" element={<DatabaseMahasiswa/>}/>
        <Route path="/tambah-mahasiswa" element={<TambahMahasiswa/>}/>
        <Route path="/pemantauan" element={<Pemantauan/>}/>
        <Route path='/update-mahasiswa/:nim' element={<UpdateMahasiswa/>}/> */}
      </Routes>
    </Router>
  </React.StrictMode>,
)
