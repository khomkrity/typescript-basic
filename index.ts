import axios from 'axios';

const todoUrl = 'https://jsonplaceholder.typicode.com/todos/25';
const userUrl = 'https://jsonplaceholder.typicode.com/users';

// define a structure of a todo object
// help catching errors during development
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface User {
  id: number;
  username: string;
  email: string;
  website: string;
}

axios.get(todoUrl).then(response => {
  const todo = response.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);
});

const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The Todo with ID: ${id}
    Has a title of: ${title}
    Is it finished: ${completed}
  `);
};

axios.get(userUrl).then(response => {
  const users: object[] = response.data;

  for (let i = 0; i < users.length; i++) {
    let { id, username, email, website } = users[i] as User;
    logUser(id, username, email, website);
  }
});

const logUser = (id: number, username: string, email: string, website: string) => {
  console.log(`
    User ID: ${id}
    Username: ${username}
    Email: ${email}
    Website: ${website}
  `);
};
