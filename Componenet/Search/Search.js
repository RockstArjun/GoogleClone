/*
Name:-- Arjun Chauhan
github:-- https://github.com/RockstArjun
instagram:-- https://instagram.com/python.programe
linkedin:- https://linkedin.com/in/arjun-chauhan-20b9aa217
*/

import React, { useState,useEffect } from "react";
import "./Search.css";
import search from "../../assests/search.png";
import glogo from "../../assests/glogo.png";

import axios from 'axios';

export default function Search() {
  const [data, setData] = useState([]);
  let val = localStorage.getItem('val')
  useEffect(()=>{
    document.getElementById("Sinput").value=val;
  })
  const onFireSearch=(e)=>{
    e.preventDefault()
    let e1=document.getElementById("Sinput").value;
    localStorage.setItem('val',e1)
    window.location.reload();
  }

 let url ='https://www.googleapis.com/customsearch/v1?key=AIzaSyDJT2m11MyqDanlknB6koMjyYTeuuF4Cmc&cx=017576662512468239146:omuauf_lfve&q=' + val 
 axios.get(url).then((response)=>{
  if(response.status === 200){
    setData(response.data.items);
  }
})
  
  return(
    <div className="seb">
      <nav className="upperpad-search">
        <h1 id="h1">Google</h1>
        <form className="Sform">
              <div className="Ssearch-body">
                <img src={glogo} id="Sglogo" alt=""></img>
                <input type="text" id="Sinput" ></input>
                <button type="submit" id="Sbtn" onClick={onFireSearch}>
                  <img src={search} alt="" />
                </button>
              </div>
            </form>
      </nav>
      <div className="resultOfSearch">
      <div className="allResult">
        {data.length > 0 ?
        data.map((item) => {
          return (
            <div id="div">
              <h2 id="div-h2">{item.title}</h2>
              <a href={item.link} id="div-a">{item.link}</a>
              <p id="div-p">{item.snippet}</p>
            </div>
          )
        }) : null}
        </div>
      </div>
    </div>
  ) 
}
