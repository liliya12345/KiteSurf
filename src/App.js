
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import "./bootstrap.min.css";
import "./style.css";
import ShopComponent from "./components/ShopComponent";
import ShopItemInfo from "./components/ShopItemInfo";
import Contacts from "./components/Contacts";
import Kurser from "./components/Kurser";



function App() {
  return (
    <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/shop" element={<ShopComponent/>}/>
                <Route path="/shop/item/:id" element={<ShopItemInfo/>}/>
                <Route path="/contacts" element={<Contacts/>}/>
                <Route path="/course" element={<Kurser/>}/>
            </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
