import React ,{useState} from "react";
import "../App.css"

const SearchBar = () => {
   const [keyword, setKeyword] = useState("");

  return (
    <div className="Searchbar">
      <input
        key="random1"
        value={keyword}
        placeholder={"search Resturant"}
        onChange={(e) => setKeyword(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;
