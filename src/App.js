import {  BrowserRouter , Routes,Route, Link , createBrowserRouter, createRoutesFromElements , RouterProvider} from "react-router-dom";

import React  from "react";
import Home from "./component/home";
import UIlayout from "./Layout/Uilayout";
import Detail from "./component/componentInfo";
import Photos from "./component/componentPhothos";
import Price from "./component/componentPrice";
import { CartProvider } from "./component/CartContext";
import NotFound from "./component/NotFoundPathcomponent";
import ItemDetail from "./component/ItemDtailPage";
import Search from "./component/SerchDetail/Search";
import CartDetail from "./component/Cart/CartPage";


export default function App(){
return(
 
  <CartProvider>
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<UIlayout/>}  >
  <Route index  element={<Home/>} />
  
  <Route path="/serch" element={<Search/>} />
  <Route path="/order" element={<CartDetail/>}/>
  <Route path="/pizzas/:id" element={<ItemDetail/>}>
    <Route index element={<Detail/>}/>
    <Route path="photos" element={<Photos/>}/>
    <Route path="price" element={<Price/>}/>
    
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Route>
   </Routes>
   </BrowserRouter>
  </CartProvider>
   
)
}