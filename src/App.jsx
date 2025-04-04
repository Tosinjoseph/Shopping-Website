import { BrowserRouter, Routes, Route, Router } from "react-router-dom"
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Home from "./pages/Home.jsx"
import Shop from "./pages/Shop.jsx"
import Cart from "./pages/Cart.jsx"
import Checkout from "./pages/Checkout.jsx"
import { useState } from "react"
import Order from "./pages/Order.jsx"
import FilterData from "./pages/FilterData.jsx"
import ProductDetail from "./pages/ProductDetail.jsx"


function App() {
  const[order, setOrder] = useState(null)

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/shop" element={<Shop/>}></Route>
        <Route path='/cart' element={<Cart/>}></Route>
        <Route path='/checkout' element={<Checkout setOrder={setOrder}/>}></Route>
        <Route path='/order-confirmation' element={<Order order={order}/>}></Route>
        <Route path='/filter-data' element={<FilterData/>}></Route>
        <Route path='/product/:id' element={<ProductDetail/>}></Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App




/*import Image1 from "./Images/bag.jpg";
import Image2 from "./Images/sandle.jpg";
import Image3 from "./Images/watch.jpg";
import Image4 from "./Images/cap.jpg";
import Image5 from "./Images/boot1.jpg";
import Image6 from "./Images/dove.jpg";
import Image7 from "./Images/headphone.jpg";
import Image8 from "./Images/robot.jpg";
import Image9 from "./Images/wwatch.jpg";
import Image10 from "./Images/shirt.jpg";

export const Categories = [
  "Electronics",
  "Fashion",
  "Home & Kitchen",
  "Beauty",
  "Sports",
  "Automotive",
];


export const mockData = [
  {
    id: 1,
    image: Image9,
    name: "Product 1",
    price: 29.99,
  },
  {
    id: 2,
    image: Image8,
    name: "Product 2",
    price: 39.99,
  },
  {
    id: 3,
    image: Image7,
    name: "Product 3",
    price: 19.99,
  },
  {
    id: 4,
    image: Image6,
    name: "Product 4",
    price: 49.99,
  },
  {
    id: 5,
    image: Image10,
    name: "Product 5",
    price: 49.99,
  },
  {
    id: 6,
    image: Image4,
    name: "Product 6",
    price: 49.99,
  },
  {
    id: 7,
    image: Image5,
    name: "Product 7",
    price: 49.99,
  },
  {
    id: 8,
    image: Image3,
    name: "Product 8",
    price: 49.99,
  },
  {
    id: 9,
    image: Image2,
    name: "Product 9",
    price: 49.99,
  },
  {
    id: 10,
    image: Image1,
    name: "Product 10",
    price: 49.99,
  },

]; */
