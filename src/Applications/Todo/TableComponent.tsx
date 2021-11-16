import React, { useEffect } from 'react';
import axios from 'axios';
import { Todo } from './model/Model';
import { getTodoData } from './services/TodoService';

// const API = `${process.env.REACT_APP_API}`;
// const getTodoDatas = () => {
//   axios.get(API + `/todos`).then((response) => {
//     // console.log('getTodoData', response.data);
//     const { data, status } = response;
//     if (status === 200) {
//       // const newData = data.map((item: any) => item.title);
//       // console.log('getTodoData', data);

//       setAllTodos(data);
//     }
//   });
//   // getTodoData();
// };

const TableComponent: React.FC = () => {
  const [allTodos, setAllTodos] = React.useState<Todo[]>([]);

  useEffect(() => {
    getTodoData().then((response: any) => {
      // const { data, status } = response;
      if (response.status === 200) {
        const newData = response.data.map((item: any) => item.title);
        // console.log('getTodoData', data);
        setAllTodos(response.data);
      }
    });
  }, []);
  return (
    <div className="table-class" data-test="component-table">
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
          {allTodos.length > 0 &&
            allTodos.reverse().map((todo: Todo, index) => (
              <tr key={todo.id}>
                <td scope="row">{index + 1}</td>
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
    </div>
  );
};

export default TableComponent;
