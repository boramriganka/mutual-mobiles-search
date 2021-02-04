import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from "react-router-dom";
ReactDOM.render((
    <BrowserRouter>
    <App/>
  </BrowserRouter>),
  document.getElementById('root'));

  // var len = items.length;
  //  items.map((x) => x["Kushi Tsuru"])),
  //  timings = items.map((x) => x["Mon-Sun 11:30 am - 9 pm"])
  
  // for (var i = 0; i < len ; i++){
  //     var obj = {
  //       resturant : "",
  //       openings:""
  //   };
  //   obj.resturant = (names[i])
  //   obj.openings = (timings[i]);
  //   resturants_data.push(obj);
  //   console.log(resturants_data)
  // }

  //   console.log(resturants_data);