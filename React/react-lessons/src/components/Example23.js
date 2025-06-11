"use client";

//Example23: Conditionally Rendering a List
// todos = [ {id:1, text:"Task 1"},{id: 2, text: "Task 2"}];

export default function TodoList({ todos = [] }) {
  return (
    <ul>
      {todos.length > 0 ?(
        todos.map((task, index) => <li key={task.id}>{task.text}</li>)
      ) : (
        <li>No tasks available</li>
      )}
    </ul>
  );
}