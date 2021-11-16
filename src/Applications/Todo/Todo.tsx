import React from 'react';
import TableComponent from './TableComponent';

// interface Props {}

const Todo: React.FC = () => {
  return (
    <div className="table-inner" data-test="component-todo">
      <h2>Todo Crud Without Redux</h2>
      <TableComponent />
    </div>
  );
};

export default Todo;
