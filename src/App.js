import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cooking from './components/Cooking/Cooking';
import Footer from './components/Footer/Footer';
function App() {
  const [search, setSearch] = useState('pasta');
  const handleSearch = (value) => {
    setSearch(value);
  }
  const [recipesPage, setRecipesPage] = useState(false);
  const handleRecipesPage = () => {
    setRecipesPage(!recipesPage);
  }
  return (
    <Router>
      <div className="App">
        {/* Header */}
        <Header handleSearch={handleSearch} recipesPage={recipesPage} handleRecipesPage={handleRecipesPage} />
      </div>
      <Switch>
        <Route path="/" exact >
          {/* Recipes */}
          <Home search={search} handleRecipesPage={handleRecipesPage} />
        </Route>
        <Route path='/recipe/:recipeID'>
          {/* Recipe */}
          <Cooking />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
