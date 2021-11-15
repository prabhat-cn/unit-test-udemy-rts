import React from 'react';
import Table from './Table';

// interface Props {}

const Todo: React.FC = () => {
  return (
    <div className="table-inner" data-test="component-todo">
      <h2>Todo Crud Without Redux</h2>
      {/* <Table /> */}
    </div>
  );
};

export default Todo;
