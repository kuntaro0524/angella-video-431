import React, { useState } from "react";

export const ToDoItem = (props) => {
  const { todoItems } = props;
  const [doneFlag, setDoneFlag] = useState([]);

  const onClickButton = (index) => {
    console.log(index);
    const currentFlags = [...doneFlag];
    console.log(currentFlags);

    currentFlags[index] = !currentFlags[index];
    setDoneFlag(currentFlags);
  };

  return (
    <>
      <ul>
        {todoItems.map((todoItem, index) => (
          <li
            key={todoItem}
            onClick={() => onClickButton(index)}
            style={doneFlag[index] ? { textDecoration: "line-through" } : {}}
          >
            {todoItem}
          </li>
        ))}
      </ul>
    </>
  );
};
