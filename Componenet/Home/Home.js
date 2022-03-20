/*
Name:-- Arjun Chauhan
github:-- https://github.com/RockstArjun
instagram:-- https://instagram.com/python.programe
linkedin:- https://linkedin.com/in/arjun-chauhan-20b9aa217
*/
import React,{useEffect} from "react";
import "./Home.css";
import google from "../../assests/google.png";
import { useNavigate } from "react-router-dom";
import search from "../../assests/search.png";
import glogo from "../../assests/glogo.png";

export default function Home() {
  let yyyy =new Date();
  let year=yyyy.getFullYear()
  let navigate = useNavigate();
  const formbtn = (e) => {
    e.preventDefault();
    let path = `/search`;
    navigate(path);
    let val = document.getElementById('input').value ;
    localStorage.setItem('val',val)
  };
  useEffect(()=>{
    localStorage.clear()
  })
  return (
    <div className="home-body">
      <div className="home">
        <div className="upper">
          <div className="navyBar">
            <ul id="ul">
              <a href="https://linkedin.com/in/arjun-chauhan-20b9aa217">
                <li id="li">Gmail</li>
              </a>
              <a href="https://linkedin.com/in/arjun-chauhan-20b9aa217">
                <li id="li">About</li>
              </a>
              <a href="https://instagram.com/python.programe">
                <li id="li-img">A</li>
              </a>
            </ul>
          </div>
          <div id="logo">
            <img src={google} alt="" />
          </div>
          <div id="search">
            <form className="form">
              <div className="search-body">
                <img src={glogo} id="glogo" alt=""></img>
                <input type="text" id="input" ></input>
                <button type="submit" id="btn" onClick={formbtn}>
                  <img src={search} alt="" />
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="lower">
          <h3>© {year} <a href="https://instagram.com/python.programe">ARJUN CHAUHAN</a></h3>
        </div>
      </div>
    </div>
  );
}
