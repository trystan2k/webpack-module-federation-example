import React, { useState, useEffect } from "react";
import { FormControlLabel, Checkbox } from "@material-ui/core";

interface TodoItemInterface {
  id: string,
  task: string,
  done: boolean
}

export default function TodoPage() {
  const [todoList, setTodoList] = useState(Array<TodoItemInterface>());
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(
      `http://localhost:5000/todos.json`,
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = (event.currentTarget as HTMLInputElement);
    const newTodoList = [...todoList];
    const index = newTodoList.findIndex((todo) => todo.id === target.id);
    if (index > -1) {
      newTodoList[index] = {
        id: newTodoList[index].id,
        task: newTodoList[index].task,
        done: target.checked
      };
    } else {
      newTodoList.push({
        id: `${Math.random()}`,
        task: newTodoList[index].task,
        done: target.checked
      });
    }
    setTodoList(newTodoList);
  };

  return (
    <div>
      <h2>List of Todos</h2>
      {isLoading && <p>Loading tasks...</p>}
      {todoList.map((item, index) => (
        <div key={index}>
          <FormControlLabel
            control={<Checkbox id={item.id} checked={item.done} onChange={handleChange} name={`${index}`} />}
            label={item.task}
          />
        </div>
      ))}
    </div>
  );
}
