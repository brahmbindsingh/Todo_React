import React from 'react'
import search from '../search.svg'
import add from '../add.74fc797d.svg'

const Footer = (props) => {
    const toggleAddBtn = () => {
        if(props.addBtn === true){
            if(props.searchBtn === false){
                props.setAddBtn(false);
            }
        }
        else{
            if(props.searchBtn === false){
                props.setAddBtn(true);
            }
            else{
                props.setSearchBtn(false)
                props.setAddBtn(true)
            }
        }
    }
    const toggleSearchBtn = () => {
        if(props.searchBtn === false){
            if(props.addBtn === true){
                props.setAddBtn(false)
                props.setSearchBtn(true)
            }
            else{
                props.setSearchBtn(true)
            }
        }
        else{
            if(props.addBtn === false){
                props.setSearchBtn(false)
            }
        }
    }
  return (
    <footer className='d-flex align-items-center' style={{ padding: "10px 5px" ,backgroundColor: "#F4FCE8"}}>
        <div style={{marginRight: "15px", borderRight: "1px solid black", padding: "0 10px"}}>
            <img src={add} alt="" style={{cursor: "pointer"}} onClick = {toggleAddBtn} />
            <img src={search} height={"100%"} alt="" style={{cursor: "pointer"}} onClick = {toggleSearchBtn} />
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