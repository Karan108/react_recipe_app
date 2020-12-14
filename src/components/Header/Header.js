import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
function Header({ handleSearch, recipesPage, handleRecipesPage }) {
    const [search, setsearch] = useState("");
    const backBtn = '<< Back To Home';
    const handleForm = (e) => {
        e.preventDefault();
        handleSearch(search);
    }

    const handleClick = () => {
        handleRecipesPage();
    }

    return (
        <header className="header">
            <div className="header__branding">
                <Link to='/' onClick={handleClick}><h1>Food Recipes</h1></Link>
            </div>
            <div className='header__search'>
                {recipesPage ? <Link to='/' className='header__backToHome' onClick={handleClick}>{backBtn}</Link> :
                    <form onSubmit={handleForm} className='header__search_form'>
                        <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search your recipe here...' />
                        <button>Search</button>
                    </form>
                }
            </div>
        </header>
    )
}

export default Header