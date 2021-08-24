import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";
import { useTranslation } from "react-i18next";

export default function TodoPage() {
  const [todoList, setTodoList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { t } = useTranslation();

  useEffect(() => {
    fetch(
      `http://localhost:5001/todos.json`,
      {
        method: "GET"
      }
    )
      .then(res => res.json())
      .then(response => {
        setTodoList(response)
        setIsLoading(false);
      })
      .catch(error => console.log(error));
  }, []);  

  const handleChange = (event) => {
    let newTodoList = [...todoList];
    newTodoList[event.target.name] = {
      task: newTodoList[event.target.name].task,
      done: event.target.checked
    };
    setTodoList(newTodoList); 
  };  

  return (
    <div>
      <h2>{t("todo:title")}</h2>  
      {isLoading && <p>Loading tasks...</p>}
      {todoList.map((item, index) => (
        <div key={index}>
          <FormControlLabel
            control={<Checkbox checked={item.done} onChange={handleChange} name={`${index}`} />}
            label={item.task}
          />    
        </div>
      ))}
    </div>
  );
}
