import React from "react";
import ListItem from "./ListItem";

const List = (props) => {
  if(props.tasks.length>0)
  return (
    <>
    <table className="table" style={{marginBottom: "0"}}>
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Task</th>
          <th scope="col">TimeStamp</th>
        </tr>
      </thead>
      <tbody>
      <ListItem tasks = {props.tasks} deleteTask = {props.deleteTask} />
      </tbody>
    </table>
      </>
  );
  else
    return <>
    <div style={{backgroundColor: "lightgreen", padding: "5px 10px"}}> No tasks </div>
    </>
};

export default List;
