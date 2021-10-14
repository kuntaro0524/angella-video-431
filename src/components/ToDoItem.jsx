import React from "react";

export const ToDoItem = (props) => {
  const { todoItems } = props;
  return (
    <>
      <ul>
        {todoItems.map((todoItem) => (
          <li>{todoItem}</li>
        ))}
      </ul>
    </>
  );
};
