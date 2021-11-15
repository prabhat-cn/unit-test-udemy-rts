import React from 'react';
import Table from './Table';

interface Props {}

const Todo = (props: Props) => {
  return (
    <div className="table-inner" data-table="component-todo">
      <h2>Todo Crud Without Redux</h2>
      <Table />
    </div>
  );
};

export default Todo;
