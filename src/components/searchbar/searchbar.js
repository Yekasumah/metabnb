import React from "react";
import "./searchbar.css"

const Search = () => {
    return (
    <form action="/" method="get">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search blog posts</span>
        </label>
        <input
        className="in"
            type="text"
            id="header-search"
            placeholder="Search for location"
            name="s" 
        />
        <button className="btn btn1" type="submit">Search</button>
    </form>
);

}

export default Search;