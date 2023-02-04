import { useState } from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import HomePageComponent from './homePage/homePage';
import ShopPageComponent from "./shopPage/shopPage"
import ListingComponent from './listingPage/ListingComponent';
import './App.css';
import { BasketItemType } from './types';

function App() {
  const [basketItems, setBasketItems] = useState<BasketItemType[]>([]);
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePageComponent/>}/>
        <Route path="/shop" element={<ShopPageComponent basketItems={basketItems}/>}/>
        <Route path="/item/:id" element={<ListingComponent basketItems={basketItems}/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
