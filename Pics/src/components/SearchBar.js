import { useState } from "react";
import './SearchBar.css';

function SearchBar({ onSubmit }) {
    
    const [term, setTerm] = useState(" ");
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(term);
    }

    const handleChange = (e) => {
        console.log(e.target.value);
        setTerm(e.target.value);
    }
    return (
        <div className="search-bar">
            <form onSubmit={handleSubmit}>
                <input value={term} onChange={handleChange} />
            </form>
        </div>);
}

export default SearchBar;