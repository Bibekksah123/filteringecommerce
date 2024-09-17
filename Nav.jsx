import React from 'react'
import { FiHeart } from "react-icons/fi";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";
import './Nav.css'
function Nav({handlequerry,querry}) {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" placeholder='Search your shoes..' className='Search-input' onChange={handlequerry} value={querry} />
      </div>
      <div className="profile-contaier">
<a href=""><FiHeart className='nav-icon' /></a>
<a href=""><AiOutlineShopping className='shopping' />
</a>
<a href=""><AiOutlineUserAdd className='Add' />
</a>
      </div>
    </nav>
  )
}

export default Nav