import React, { useEffect } from 'react';
import axios from 'axios';
import { Todo } from './model/Model';

const API = `${process.env.REACT_APP_API}`;

const Table: React.FC = () => {
  const [allTodos, setAllTodos] = React.useState<Todo[]>([]);
  const getTodoData = () => {
    axios.get(API + `/todos`).then((response) => {
      // console.log('getTodoData', response);
      const { data, status } = response;
      if (status === 200) {
        setAllTodos(data);
      }
    });
  };

  useEffect(() => {
    getTodoData();
  }, []);
  return (
    <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Todo Title</th>
            <th scope="col">Status</th>
            {/* <th scope="col">Action</th> */}
          </tr>
        </thead>
        <tbody>
          {allTodos &&
            allTodos.reverse().map((todo: Todo, index) => (
              <tr key={todo.id}>
                <th scope="row">{index + 1}</th>
                <td>{todo.title}</td>
                <td>
                  {todo.completed && todo.completed === true ? (
                    <strong style={{ color: 'green' }}>Completed</strong>
                  ) : (
                    <strong style={{ color: 'red' }}>Not Completed</strong>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
