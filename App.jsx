
import { useState } from 'react'
import './App.css'
import Nav from './Navigation/Nav'
import Product from './Product/Product'
import Recommended from './Recommended/Recommended'
import Sidebar from './Sidebar/Sidebar'
import data from './Store/Data'

function App() {

const [querry, setquerry] = useState('')
const handlequerry=(e)=>{
  setquerry(e.target.value)
}
const allfilterdata=data.filter(datas=>datas.title.toLocaleLowerCase().indexOf(querry.toLocaleLowerCase())) !==-1
  return (
    <>
    <Sidebar/>
  <Nav querry={querry} handlequerry={handlequerry}/>
  <Recommended/>
  <Product/>
 
  </>
  )
}

export default App
