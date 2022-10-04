import React from "react";

const ListItem = (props) => {
  const strikeTask = (index) => {
    let inputDiv = document.getElementById("mybox-"+index)
    let checkbox = document.getElementById("cbox-"+index)
    if(checkbox.checked){
      let data = document.querySelector("#mybox-"+index+" div").style.textDecoration = "line-through"
    }
    else{
      let data = document.querySelector("#mybox-"+index+" div").style.textDecoration = "none"
    }
  }
  return props.tasks.map((el, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td className="d-flex align-items-center justify-content-between">
          <div className="d-flex" id={`mybox-${index}`}>
            <input type="checkbox" name="" id={`cbox-${index}`} className="mx-2" onClick={()=>strikeTask(index)} /> <div> {el.task}{" "} </div>
            <button onClick={()=>props.deleteTask(el)}><i style={{color: "red"}} className="fa-solid fa-trash"></i></button>
          </div>
        </td>
        <td>
            {el.timeStamp}
        </td>
      </tr>
    );
  });
};

export default ListItem;
