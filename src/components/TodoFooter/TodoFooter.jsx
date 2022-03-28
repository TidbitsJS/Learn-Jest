import React from "react";
import { Link } from "react-router-dom";

import "./TodoFooter.css";

const TodoFooter = ({ numberOfIncompleteTasks }) => {
  return (
    <div className="todo-footer">
      <p>
        {numberOfIncompleteTasks}{" "}
        {numberOfIncompleteTasks === 1 ? "task" : "tasks"} left
      </p>
      <Link to="/followers">Followers</Link>
    </div>
  );
};

export default TodoFooter;
