import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { Contact } from './component/Contact';
import { Home } from './component/Home';
import  Header  from './component/Header';
import { Footer } from './component/Footer';
import { ProductDetail } from './component/ProductDetail';
import { ProductList } from './component/ProductList';
import MyComponent from './component/MyComponent';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <main>
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/productlist' Component={ProductList}></Route>
        <Route path='/mycomponent' Component={MyComponent}></Route>
        <Route path='/productdetail' Component={ProductDetail}></Route>
      </Routes>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
