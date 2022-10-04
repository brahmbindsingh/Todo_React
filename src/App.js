import React, { useEffect, useState } from "react";
import Input from "./Components/Input";
import List from "./Components/List";
import Footer from "./Components/Footer";

const App = () => {
  const [tempTask, setTempTask] = useState([]);
  const [addBtn, setAddBtn] = useState(true);
  const [searchBtn, setSearchBtn] = useState(false);
  const [tasks, setTasks] = useState([
    {
      "task": "wake up early",
      "timeStamp": "10:30",
      "tag": "active"
    },
    {
      "task": "go for a job",
      "timeStamp": "11:30",
      "tag": "active"
    },
    {
      "task": "make coffee",
      "timeStamp": "12:30",
      "tag": "active"
    }
  ]);

  const [text, setText] = useState("");

  const handleInput = (value) => {
    value = value
      .split(" ")
      .map((el) => {
        return el.charAt(0).toUpperCase() + el.slice(1);
      })
      .join(" ");
    setText(value);
  };  


  useEffect(() => {
    setTempTask(tasks);
  }, []);

  const handleInpTask = () => {
    const date = new Date();
    let newObj = {
      task: text,
      timeStamp: date.toLocaleDateString(),
      tag: "active",
    };
    setTasks([...tasks, newObj]);
    setTempTask([...tasks, newObj]);
    setText("");
  };

  const deleteTask = (singleTask) => {
    let currTask = tasks;

    let filteredArr = currTask.filter((el) => {
      return el !== singleTask;
    });

    setTempTask(
      tempTask.filter((el) => {
        return el !== singleTask;
      })
    );

    setTasks(filteredArr);
  };


  return (
    <div style={{ width: "50%", margin: "50px auto" }}>
      <h1
        className="text-center"
        style={{ margin: "20px 0", fontWeight: "400", color: "grey" }}
      >
        TODO LIST
      </h1>
      {addBtn && !searchBtn ? (
        <Input
          text={text}
          handleInput={handleInput}
          handleInpTask={handleInpTask}
        />
      ) : (
        ""
      )}
      {searchBtn && !addBtn ? (
        <input
          type="search"
          value={text}
          placeholder = {"Search"}
          style={{width: "100%", margin: "30px 0", padding: "5px 10px"}}
          onChange={(event) => {
            setText(event.target.value.split(" ").map((el)=>{return el.charAt(0).toUpperCase() + el.slice(1)}).join(" "));
            setTempTask(
              tasks.filter((el) => {
                return el.task.toLowerCase().includes(event.target.value.toLowerCase());
              })
            );
          }}
        />
      ) : (
        ""
      )}
      {searchBtn ? (
        <List tasks={tempTask} deleteTask={deleteTask} />
      ) : (
        <List tasks={tasks} deleteTask={deleteTask} />
      )}
      <Footer
        taskSize={tasks.length}
        addBtn={addBtn}
        setAddBtn={setAddBtn}
        searchBtn={searchBtn}
        setSearchBtn={setSearchBtn}
      />
    </div>
  );
};

export default App;
