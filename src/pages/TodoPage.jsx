import React from "react";
import { Container } from "react-bootstrap";

import { Todo } from "../components";

const TodoPage = () => {
  return (
    <div>
      <Container>
        <Todo />
      </Container>
    </div>
  );
};

export default TodoPage;
