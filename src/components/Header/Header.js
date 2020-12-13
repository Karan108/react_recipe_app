import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import "./Header.css";
function Header({ handleSearch, recipesPage, handleRecipesPage }) {
    const [search, setsearch] = useState("");

    const handleForm = (e) => {
        e.preventDefault();
        handleSearch(search);
    }

    const handleClick = () => {
        handleRecipesPage();
    }

    return (
        <header className="nav">
            <div className="branding">
                <h1>Food Recipes</h1>
            </div>
            <div className='search'>
                {recipesPage ? <Link to='/' onClick={handleClick}>Back to Home</Link> :
                    <form onSubmit={handleForm} className='search_form'>
                        <input type="text" value={search} onChange={(e) => setsearch(e.target.value)} placeholder='Search your recipe here...' />
                        <button>Search</button>
                    </form>
                }
            </div>
        </header>
    )
}

export default Header