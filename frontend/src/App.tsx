import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePageComponent from './homePage/homePage';
import ShopPageComponent from "./shopPage/shopPage"
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent/>}/>
        <Route path="/shop" element={<ShopPageComponent/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App