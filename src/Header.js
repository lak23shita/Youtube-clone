import React, { useState } from 'react'
import './styles/Header.css';
import MenuIcon from "@material-ui/icons/Menu";
import lakshita from './images/youtube_PNG6.png';
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import {Link} from 'react-router-dom';
import fire from './Firebase';

function Header() {
    const [inputSearch,setInputSearch] = useState('');
    

    
    const logoutclick=() =>{
        fire.auth().signOut();
    }
    return (
        <div className='header'>
        <div className="header__left">
                <MenuIcon />
                <Link to="/">
                <img className="header__logo" src={lakshita} alt='youtube ' /> 
                </Link>
                
        </div>
        
        
        <div className="header__input">
            <input onChange={(e) => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type ='text' />
            
            <Link to={`/search/${inputSearch}`}>
               <SearchIcon className="header__inputButton" />
            </Link>
        </div>
        
        <div className="header__icons">
        <VideoCallIcon className="header__icon" />
        <AppsIcon className="header__icon" />
        <NotificationsIcon  className="header__icon" />
        <AccountBoxIcon />
        <div className="logout">
        <button onClick={logoutclick} className="logout__we">Logout</button>
        </div>
        </div>
       
        </div>
    )
}

export default Header
