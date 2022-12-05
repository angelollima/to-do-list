import React, { useState } from "react";

import Form from "./layout/Button";
import Input from "./layout/Input";
import Button from "./layout/Button";
import Items from "./layout/Items";

function TodoApp() {

  const [task, setTask] = useState("");
  const [itemsList, setItemsList] = useState([]);

  function handleAddItemToList(event) {
    event.preventDefault(); 

    if (!task) { 
      return
    };
    
    setItemsList([...itemsList, task]);
    setTask(""); 
  }

  return (
    <div className="flex justify-center">
      <div>
        <h1>To Do List</h1>
        <Form onSubmit={handleAddItemToList}>
          <Input type="text" placeholder="Add one task" onChange={e => setTask(e.target.value)} value={task} />
          <Button type="submit">Add</Button>
        </Form>

        <Items itemsList={itemsList} />
      </div>
    </div>
  )
}

export default TodoApp
