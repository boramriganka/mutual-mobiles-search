import React from 'react';
import './App.css';
import {useFetch} from './hooks/fetchData'
import {useState} from 'react'
import Resturantsearch from './components/Resturantssearch'
export default function App() {
  const url = `https://run.mocky.io/v3/b0f3e975-b815-4e88-8a6a-84af59fe32eb`;

  const { status, data, error } = useFetch(url);

  const resturantData = data;
  /****making resturant object array */
  var len = resturantData.length;
  var resturants_data = {
    resturants:[],
    timings:[]
  };
  for (var i = 0; i < len; i++) {
    resturants_data.resturants = resturantData.map((x) => x["Kushi Tsuru"]);
    resturants_data.timings = resturantData.map((x) => x["Mon-Sun 11:30 am - 9 pm"]);
  }
  var final_data = resturants_data.resturants.map(function (x, i) {
    return {
        resturant_name : x,
      opening_timings:resturants_data.timings[i]
    }
    
    
  });
  console.log(final_data)
  return (
    <div className="App">
      <div className="header">The Resturants</div>
      <Resturantsearch resturantData={final_data} />
    </div>
  );
}