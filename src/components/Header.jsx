import React, { useState, useCallback, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchTerm } from '../redux/slices/productsSlice'
import '../css/header.css'
import { BsBasket, BsSearch } from "react-icons/bs";
import { CiLight } from "react-icons/ci";
import { FaMoon } from "react-icons/fa";
import Cart from './Cart';

const Header = React.memo(() => {
  const [theme, setTheme] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const dispatch = useDispatch();

  // başlangıcta light tema uygulama
  useEffect(() => {
    const root = document.getElementById("root");
    root.classList.add('light-theme');
  }, []);

  // Arama fonksiyonu
  const handleSearch = useCallback((e) => {
    const value = e.target.value;
    setSearchInput(value);
    dispatch(setSearchTerm(value));
  }, [dispatch]);

const changeTheme = useCallback(() => {
  const root = document.getElementById("root");
  setTheme(!theme);

  if(theme){
    root.style.backgroundColor="black";
    root.style.color="#fff";
    root.classList.add('dark-theme');
    root.classList.remove('light-theme');
  }else{
    root.style.backgroundColor="#fff";
    root.style.color="black";
    root.classList.add('light-theme');
    root.classList.remove('dark-theme');
  }
}, [theme]);
  return (
    <div className="header-container">
      <div className="header-content">
        <div className='flex-row'>
            <img className='logo' src='./src/images/logo.png'/>
        </div>

        <div className='flex-row'>
          <div className="search-container">
            <BsSearch className="search-icon" />
            <input 
              className='search-input' 
              type='text' 
              placeholder='Ürün ara...'
              value={searchInput}
              onChange={handleSearch}
            />
          </div>
          <div>
          {theme ? <FaMoon className='icon' onClick={changeTheme}/> : <CiLight className='icon' onClick={changeTheme}/>}
           <Cart />
          </div>
        </div>
      </div>
    </div>
  )
})

Header.displayName = 'Header'

export default Header
