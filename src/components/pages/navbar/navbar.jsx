import { Link, useSearchParams } from "react-router";
import { useState, useEffect, useRef } from "react";
import Recipes from "../../../api/api"; 
import Modal from "../../modal/modal";
import "./navbar.css";

const Nav = () => {
  const [searchQuery, setSearchQuery] = useState(""); 
  const [searchResults, setSearchResults] = useState([]); 
  const [searchParams, setSearchParams] = useSearchParams(); 
  const inputRef = useRef(null);

  
  useEffect(() => {
    const query = searchParams.get("q");
    if (query) {
      setSearchQuery(query); 
      fetchSearchResults(query); 
    }
  }, [searchParams]); 

  
  const handleSearch = () => {
    if (searchQuery.trim()) {
      setSearchParams({ q: searchQuery }); 
    }
    inputRef.current.value = ''; 
  };

  
  const fetchSearchResults = async (query) => {
    try {
      const results = await Recipes.searchRecipes(query);
      setSearchResults(results); 
    } catch (error) {
      console.error("Error fetching search results:", error);
      setSearchResults([]); 
    }
  };

  return (
    <nav className="navbar">
      <ul className="ul-list">
        <li><Link to="/" className="link">Home</Link></li>
        <li><Link to="/about" className="link">About</Link></li>
        <li><Link to="/gallery" className="link">Gallery</Link></li>
      </ul>

      <div className="search-container">
        <input
          ref={inputRef}
          type="text"
          placeholder="Search recipes..."
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)} 
        />
        <button className="search-button" onClick={handleSearch}>Search</button>
      </div>

      
      {searchResults.length > 0 && (
        <div className="search-results">
          <Modal>
            <ul>
              {searchResults.map((recipe) => (
                <li key={recipe.id} className='list'>
                  <Link to={`/recipe/${recipe.id}`} className="search-recipe">
                    {recipe.name}
                  </Link>
                </li>
              ))}
            </ul>
          </Modal>
        </div>
      )}

      
      {searchResults.length === 0 && searchQuery && (
        <div className="search-results">
          <Modal>
            <p>No recipes found</p>
          </Modal>
        </div>
      )}
    </nav>
  );
};

export default Nav;

