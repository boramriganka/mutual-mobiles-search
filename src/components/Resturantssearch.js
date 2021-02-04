import React, { useState, useEffect } from "react";
import { useSortableData } from "../hooks/UseSortableData";
import "../App.css";
import SearchBar from "./Searchbar";

const Resturantsearch = (props) => {
  const { items, requestSort, sortConfig } = useSortableData(
    props.resturantData
  );
  /******** search bar implementation *****/
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(items);
  const handleChange = (e) => setSearchTerm(e.target.value);
  useEffect(() => {
    const results = items.filter((o) =>
      o.resturant_name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  }, [searchTerm]);

 

  return (
    <>
      {searchResults.length > 0 ? (
        <>
          <input
            className="Searchbar"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="search"
          />

          <p>
            searchTerm:
            <br />
            {searchTerm}
          </p>
          <div className="Resturants">
            <table>
              <thead>
                <tr>
                  <th>
                    <button type="button">Serial No.</button>
                  </th>
                  <th>
                    Resturant Name
                  </th>
                  <th>
                    Opening Timings
                  </th>
                </tr>
              </thead>
              <tbody>
                {searchResults.map((item, i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{item.resturant_name}</td>
                    <td>{item.opening_timings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <input
            className="Searchbar"
            type="text"
            value={searchTerm}
            onChange={handleChange}
            placeholder="search"
          />
          <p>
            searchTerm:
            <br />
            {searchTerm}
          </p>
          <div className="Resturants">
            <table>
              <caption>Products</caption>
              <thead>
                <tr>
                  <th>
                    <button type="button">Serial No.</button>
                  </th>
                  <th>
                    Resturant Name
                  </th>
                  <th>
                    Opening Timings
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map((item, i) => (
                  <tr key={i}>
                    <td>{i}</td>
                    <td>{item.resturant_name}</td>
                    <td>{item.opening_timings}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
};

export default Resturantsearch;
