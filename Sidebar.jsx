import React from 'react'
import Category from './Category/Category'
import Price from './Price/Price'
import Colors from './Colors/Colors'
import './Sidebar.css'
import { SiWallabag } from "react-icons/si";
function Sidebar() {
  return (
    <>
    <section className="sidebar">
      <div className="logocontainer">
        <h1><SiWallabag  className='logo'/></h1>
      </div>
      <Category/>
      <Price/>
  
    </section>
    </>
 )
}

export default Sidebar