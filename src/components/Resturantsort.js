import React from "react";
import { useSortableData } from "../hooks/UseSortableData";
import {useState} from 'react'
import "../App.css";

const Resturants = (props) => {
  const [finaldata, setFinalData] = useState([]);
  const { items, requestSort, sortConfig } = useSortableData(
    props.resturantData
  );
  const getClassNamesFor = (name) => {
    if (!sortConfig) {
      return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
  };
  console.log(items);


  return (
    <table>
      <thead>
        <tr>
          <th>
            <button type="button">Serial No.</button>
          </th>
          <th>
            Resturant Name
            <button
              type="button"
              onClick={() => requestSort("resturant_name")}
              className={getClassNamesFor("resturant_name")}
            >sort</button>
          </th>
          <th>
            Opening Timings
            <button
              type="button"
              onClick={() => requestSort("opening_timings")}
              className={getClassNamesFor("opening_timings")}
            >sort</button>
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
  );
};

export default Resturants;
