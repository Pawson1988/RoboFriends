import React from "react";

const SearchBox = ({searchChange}) => {
    return (
        <div className="pa2">
        <input type="search" placeholder="search robots" className="pa2 ba b--green bg-lightest-blue" onChange={ searchChange }></input>
        <button>search</button>
        </div>
    )
}

export default SearchBox;