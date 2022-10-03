import React from "react";

const ListItem = (props) => {
  return props.tasks.map((el, index) => {
    return (
      <tr key={index}>
        <th scope="row">{index + 1}</th>
        <td className="d-flex align-items-center justify-content-between">
          <div>
            <input type="checkbox" name="" id="" className="mx-2" /> {el.task}{" "}
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
