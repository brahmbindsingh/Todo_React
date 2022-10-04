import React from 'react'
import search from '../search.svg'
import add from '../add.74fc797d.svg'

const Footer = (props) => {

    let addBtn = document.getElementById("addBtn")
    let searchBtn = document.getElementById("searchBtn")

    const toggleAddBtn = () => {
        if(props.addBtn === true){
            if(props.searchBtn === false){
                props.setAddBtn(false);
                addBtn.classList.add("btnActive")
            }
        }
        else{
            if(props.searchBtn === false){
                props.setAddBtn(true);
                addBtn.classList.remove("btnActive")
            }
            else{
                props.setSearchBtn(false)
                searchBtn.classList.add("btnActve")
                props.setAddBtn(true)
                addBtn.classList.remove("btnActive")
            }
        }
    }
    const toggleSearchBtn = () => {
        if(props.searchBtn === false){
            if(props.addBtn === true){
                props.setAddBtn(false)
                addBtn.classList.add("btnActive")
                props.setSearchBtn(true)
                searchBtn.classList.remove("btnActive")
            }
            else{
                props.setSearchBtn(true)
                searchBtn.classList.remove("btnActive")
            }
        }
        else{
            if(props.addBtn === false){
                props.setSearchBtn(false)
                searchBtn.classList.add("btnActive")
            }

        }
    }
  return (
    <footer className='d-flex align-items-center' style={{ padding: "10px 5px" ,backgroundColor: "#F4FCE8"}}>
        <div style={{marginRight: "15px", borderRight: "1px solid black", padding: "0 10px"}}>
            <img id='addBtn' className='' src={add} alt="" style={{cursor: "pointer"}} onClick = {toggleAddBtn} />
            <img id='searchBtn' className='btnActive' src={search} height={"100%"} alt="" style={{cursor: "pointer"}} onClick = {toggleSearchBtn} />
        </div>
        <div style={{color: "grey", flex: "1"}}>
            {props.taskSize} items
        </div>
        <div>
            <button>All</button>
            <button>Active</button>
            <button>Completed</button>
        </div>
    </footer>
  )
}

export default Footer